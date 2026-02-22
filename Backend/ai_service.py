from groq import Groq
import os
from dotenv import load_dotenv
from resume_context import RESUME_CONTEXT

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def ask_ai(user_message: str):
    try:
        prompt = f"""
        Resume:
        {RESUME_CONTEXT}

        Question:
        {user_message}
        """

        completion = client.chat.completions.create(
            model="llama-3.1-8b-instant",
             messages=[
        {
            "role": "system",
            "content": RESUME_CONTEXT
        },
        {
            "role": "user",
            "content": user_message
        }
    ],
            max_tokens=300,
            temperature=0.2
        )

        return completion.choices[0].message.content

    except Exception as e:
        print("Groq error:", e)
        return "AI service temporarily unavailable."

    