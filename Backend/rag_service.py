import faiss
import numpy as np
from sentence_transformers import SentenceTransformer
from pypdf import PdfReader

model = SentenceTransformer("all-MiniLM-L6-v2")

# Global storage (simple version)
documents = []
index = None


def load_pdf(file_path):
    global documents, index

    reader = PdfReader(file_path)
    text = ""

    for page in reader.pages:
        text += page.extract_text()

    # Split into chunks
    chunks = text.split("\n")

    documents = chunks

    embeddings = model.encode(chunks)

    dimension = embeddings.shape[1]
    index = faiss.IndexFlatL2(dimension)
    index.add(np.array(embeddings))

    return "Resume loaded successfully."


def retrieve_context(query):
    global documents, index

    if index is None:
        return ""

    query_vector = model.encode([query])
    distances, indices = index.search(np.array(query_vector), k=5)

    relevant_chunks = [documents[i] for i in indices[0]]

    return "\n".join(relevant_chunks)