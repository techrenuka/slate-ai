"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from 'react-markdown';

interface Message {
  type: 'user' | 'ai';
  content: string;
}

export default function ChatWithAI() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.onended = () => {
      setIsSpeaking(false);
    };
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
  
      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setQuestion(prev => prev + transcript);
      };
  
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
  
      recognitionRef.current.onerror = (event : any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };
    }
  
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);
  
  const toggleListening = () => {
    if (!recognitionRef.current) {
      setError("Speech recognition is not supported in your browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setQuestion("");
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const speakText = async (text: string) => {
    try {
      setIsSpeaking(true);
      setError(""); // Clear any previous errors
      
      // Replace with your ElevenLabs API key
      const apiKey = "sk_038eaf593dbc3df4d29384884be89093dc6ed8cffbfdb217";
      
      // Use a default voice ID from ElevenLabs
      const voiceId = "21m00Tcm4TlvDq8ikWAM"; // Rachel voice
      
      // Limit text length to avoid API issues (ElevenLabs has character limits)
      const trimmedText = text.length > 5000 ? text.substring(0, 5000) + "..." : text;
      
      console.log("Sending TTS request to ElevenLabs API...");
      
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': apiKey
        },
        body: JSON.stringify({
          text: trimmedText,
          model_id: "eleven_flash_v2_5",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
          }
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("ElevenLabs API error:", errorData);
        throw new Error(errorData.detail || `Failed to generate speech: ${response.status} ${response.statusText}`);
      }
      
      const audioBlob = await response.blob();
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
      
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play().catch(err => {
          console.error("Audio playback error:", err);
          throw new Error("Failed to play audio");
        });
      }
    } catch (err) {
      console.error('Error generating speech:', err);
      setIsSpeaking(false);
      
      // Provide more specific error messages
      if (err instanceof Error) {
        setError(`Speech generation failed: ${err.message}`);
      } else {
        setError("Failed to generate speech. Please try again.");
      }
      
      // Clean up any resources
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
        setAudioUrl(null);
      }
    }
  };
  
  const stopSpeaking = () => {
    // Stop ElevenLabs audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    // Stop browser speech synthesis if active
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    
    setIsSpeaking(false);
  };

  // Add this function before askQuestion
  const speakTextWithFallback = async (text: string) => {
    try {
      await speakText(text);
    } catch (err) {
      // If ElevenLabs fails, try browser's built-in speech synthesis
      console.log("Falling back to browser speech synthesis");
      
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => {
          setIsSpeaking(false);
          setError("Speech synthesis failed. Please try again.");
        };
        
        setIsSpeaking(true);
        window.speechSynthesis.speak(utterance);
      } else {
        setError("Text-to-speech is not supported in your browser.");
      }
    }
  };

  const askQuestion = async () => {
    if (!question.trim()) return;
    
    setLoading(true);
    setError("");
    
    // Add user message immediately
    const userMessage: Message = {
      type: 'user',
      content: question
    };
    setMessages(prev => [...prev, userMessage]);
    
    try {
      const res = await fetch("https://slateai-rag-python.onrender.com/ask", {
      // const res = await fetch("http://localhost:8000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          website_url: "https://www.newslate.co.uk",
          question: question 
        }),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Failed to get response');
      }
      
      const data = await res.json();
      // Add AI response
      const aiMessage: Message = {
        type: 'ai',
        content: data.answer
      };
      setMessages(prev => [...prev, aiMessage]);
      
      // Automatically speak the AI response
      // In the askQuestion function, replace:
      // speakText(data.answer);
      // with:
      speakTextWithFallback(data.answer);
      
      setQuestion(""); // Clear input after successful response
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message === "Failed to fetch" 
          ? "Cannot connect to AI server. Please make sure the server is running."
          : err.message);
      } else {
        setError("Failed to get answer. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-[#111] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 backdrop-blur-lg">
          {/* Chat Header */}
          <div className="bg-[#1a1a1a] p-4 border-b border-gray-800">
            <h2 className="text-xl font-semibold text-white">AI Assistant</h2>
            <p className="text-gray-400 text-sm">Ask me anything about SLATE AI</p>
          </div>

          {/* Chat Messages Area */}
          <div className="p-6 min-h-[400px] flex flex-col space-y-4 overflow-y-auto max-h-[600px]">
            {/* Welcome Message */}
            {messages.length === 0 && !error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-gray-400 mt-20"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Welcome to SLATE AI Chat</h3>
                <p>Ask a question to get started</p>
                <p className="mt-2 text-sm">You can type or use the microphone button to speak your question</p>
              </motion.div>
            )}

            {/* Chat Messages */}
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 rounded-l-lg rounded-br-lg' 
                    : 'bg-[#1a1a1a] rounded-r-lg rounded-bl-lg'
                } p-4 shadow-lg`}>
                  <div className="flex items-center gap-2 mb-2">
                    {message.type === 'ai' ? (
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                    {/* Add speak button for AI messages */}
                    {message.type === 'ai' && (
                      <button 
                        onClick={() => isSpeaking ? stopSpeaking() : speakTextWithFallback(message.content)}
                        className={`ml-auto p-1 rounded-full ${isSpeaking ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} transition-colors`}
                        title={isSpeaking ? "Stop speaking" : "Speak this response"}
                      >
                        {isSpeaking ? (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M6 11L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M9 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M15 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M18 11L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M12 11L12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        )}
                      </button>
                    )}
                  </div>
                  {message.type === 'ai' ? (
                    <div className="prose prose-invert max-w-none text-white [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="text-white leading-relaxed">{message.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-900/20 border border-red-800 rounded-lg p-4 text-red-400 text-sm"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              </motion.div>
            )}

            {/* Loading Indicator */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center items-center py-4"
              >
                <div className="animate-pulse flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-800 p-4 bg-[#1a1a1a]">
            <div className="flex gap-2">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && askQuestion()}
                className="flex-1 bg-[#222] text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder={isListening ? "Listening..." : "Type your question here..."}
                disabled={isListening}
              />
              
              {/* Microphone Button */}
              <button
                onClick={toggleListening}
                disabled={loading}
                className={`px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center ${
                  isListening
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-[#333] hover:bg-[#444]"
                } text-white`}
                title={isListening ? "Stop listening" : "Start voice input"}
              >
                {isListening ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" // X icon when listening
                    />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 11L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M9 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M15 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M18 11L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 11L12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                )}
              </button>
              
              {/* Send Button */}
              <button
                onClick={askQuestion}
                disabled={loading || (isListening && !question.trim())}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  loading || (isListening && !question.trim())
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
                } text-white`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Ask</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
