from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import uvicorn
from slateai import initialize_website_chatbot

app = FastAPI(title="RAG Chatbot API")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global variable to store the chatbot instance
chatbot = None

class WebsiteURL(BaseModel):
    url: str

class Question(BaseModel):
    question: str

@app.post("/initialize")
async def initialize_chatbot(website_data: WebsiteURL):
    try:
        global chatbot
        chatbot = initialize_website_chatbot(website_data.url)
        return {"message": "Chatbot initialized successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/chat")
async def chat(question_data: Question):
    try:
        if not chatbot:
            raise HTTPException(
                status_code=400, 
                detail="Chatbot not initialized. Please initialize first using /initialize endpoint"
            )
        
        response = chatbot.invoke(question_data.question)
        return {"answer": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("api:app", host="0.0.0.0", port=8000, reload=True)