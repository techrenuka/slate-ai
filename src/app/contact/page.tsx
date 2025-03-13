"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";

export default function ContactUs() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Form validation
        if (!firstName || !lastName || !email || !message) {
            alert('Please fill in all required fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        let form = {
            firstName,
            lastName,
            companyName,
            email,
            message
        }

        try {
            const rawResponse = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            
            const content = await rawResponse.json();
            
            if (!rawResponse.ok) {
                throw new Error(content.error || 'Failed to submit form');
            }
            
            if (content && content.success) {
                alert('Thank you for your message! We will get back to you soon.');
                // Reset the form fields
                setMessage('');
                setFirstName('');
                setLastName('');
                setCompanyName('');
                setEmail('');
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            alert('Error submitting form. Please try again.');
            console.error('Form submission error:', error);
        }
    }

    return (
        <div className="min-h-screen bg-[#111] py-24 px-6 flex items-center justify-center">
            <div className="w-full lg:max-w-7xl bg-[#1a1a1a] rounded-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Left side - Image */}
                    <div className="lg:w-1/2 relative h-[300px] md:h-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20" />
                        <img
                            src="/images/slate-ai-contact.png"
                            alt="Contact Us"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right side - Form */}
                    <div className="lg:w-1/2 p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Get in Touch
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full bg-[#222] border-none rounded-lg p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                                <input
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full bg-[#222] border-none rounded-lg p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    value={companyName}
                                    onChange={e => setCompanyName(e.target.value)}
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full bg-[#222] border-none rounded-lg p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-[#222] border-none rounded-lg p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </div>
                            <textarea
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                placeholder="Message"
                                rows={6}
                                className="w-full bg-[#222] border-none rounded-lg p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                            />
                            <button
                                type="submit"
                                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105"
                            >
                                Let's Connect
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
