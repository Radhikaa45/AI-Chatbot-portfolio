from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, SessionLocal
from models import Base, ChatSession, ChatMessage
from ai_service import ask_ai

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Later restrict to Vercel domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Create tables on startup (NOT at import time)
@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)


# 🔹 Small Talk Handler
def handle_small_talk(user_message: str):
    text = user_message.lower().strip()

    greetings = ["hi", "hello", "hey"]
    thanks = ["thank you", "thanks", "thankyou", "thx"]
    closing = ["bye", "goodbye", "see you", "okay", "ok", "talk later"]
    appreciation = [
        "great", "impressive", "nice", "good job",
        "well done", "excellent", "amazing",
        "fantastic", "awesome", "brilliant"
    ]

    if text in greetings:
        return "Hello! 😊 I'm Radhika's AI assistant. Feel free to ask about her skills, projects, internships, or experience."

    if any(word in text for word in thanks):
        return "You're welcome! 😊 Let me know if you'd like to explore more about Radhika's work."

    if any(word in text for word in appreciation):
        return "Thank you so much! 😊 Radhika truly appreciates your kind words. If you'd like to know more about her projects or experience, I'm happy to help."

    if any(word in text for word in closing):
        return "It was great interacting with you! 👋 Have a wonderful day."

  
        # Internship / Experience Intent
    if text in ["internship", "intern"]:
                return """
        ## Professional Experience

            -- Web Developer – National Informatics Centre (NIC)
            -- Frontend Developer Intern – GoBuild
            -- Intern – DRDO Developed an AI-based chatbot using LLMs
            -- Web Development Intern – ShadowFox
            -- Frontend Development Intern – Ladybird Web Solution


       
        """
    return None

# 🔹 Chat Endpoint
@app.post("/chat")
async def chat(data: dict):
    user_message = data["message"]
    session_id = data.get("session_id")

    db = SessionLocal()

    # Create new session if none exists
    if not session_id:
        new_session = ChatSession()
        db.add(new_session)
        db.commit()
        db.refresh(new_session)
        session_id = new_session.id

    # Save user message
    user_msg = ChatMessage(
        session_id=session_id,
        role="user",
        content=user_message
    )
    db.add(user_msg)

    # Handle small talk first
    small_talk_response = handle_small_talk(user_message)

    if small_talk_response:
        response = small_talk_response
    else:
        response = ask_ai(user_message)

    # Save AI response
    ai_msg = ChatMessage(
        session_id=session_id,
        role="ai",
        content=response
    )
    db.add(ai_msg)

    db.commit()
    db.close()

    return {
        "response": response,
        "session_id": session_id
    }


# 🔹 Get All Sessions
@app.get("/sessions")
def get_sessions():
    db = SessionLocal()
    sessions = db.query(ChatSession).all()
    db.close()
    return sessions


# 🔹 Get Messages of a Session
@app.get("/sessions/{session_id}")
def get_session_messages(session_id: int):
    db = SessionLocal()
    messages = db.query(ChatMessage).filter(
        ChatMessage.session_id == session_id
    ).all()
    db.close()
    return messages


# 🔹 Health Check Route (Important for Render)
@app.get("/")
def root():
    return {"status": "Backend running successfully 🚀"}