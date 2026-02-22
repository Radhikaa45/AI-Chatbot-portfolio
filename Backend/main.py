from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, SessionLocal
from models import Base, ChatSession, ChatMessage
from ai_service import ask_ai

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables
Base.metadata.create_all(bind=engine)
def handle_small_talk(user_message: str):
    text = user_message.lower().strip()

    greetings = ["hi", "hello", "hey"]
    thanks = ["thank you", "thanks", "thankyou", "thx"]
    closing = ["bye", "goodbye", "see you", "okay", "ok","talk later"]
    appreciation = [
        "great", "impressive", "nice", "good job",
        "well done", "excellent", "amazing",
        "fantastic", "awesome", "brilliant"
    ]

    if any(word in text for word in greetings):
        return "Hello! 😊 I'm Radhika's AI assistant. Feel free to ask about her skills, projects, internships, or experience."

    if any(word in text for word in thanks):
        return "You're welcome! 😊 Let me know if you'd like to explore more about Radhika's work."
    if any(word in text for word in appreciation):
        return "Thank you so much! 😊 Radhika truly appreciates your kind words. If you'd like to know more about her projects or experience, I'm happy to help."

    if any(word in text for word in closing):
        return "It was great interacting with you! 👋 Have a wonderful day."

    return None

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

    # 🔥 1️⃣ Handle small talk BEFORE calling AI
    small_talk_response = handle_small_talk(user_message)

    if small_talk_response:
        response = small_talk_response
    else:
        # 🔥 2️⃣ Only call AI if not small talk
        response = ask_ai(user_message)

    # Save AI message
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


@app.get("/sessions")
def get_sessions():
    db = SessionLocal()
    sessions = db.query(ChatSession).all()
    db.close()
    return sessions


@app.get("/sessions/{session_id}")
def get_session_messages(session_id: int):
    db = SessionLocal()
    messages = db.query(ChatMessage).filter(
        ChatMessage.session_id == session_id
    ).all()
    db.close()
    return messages