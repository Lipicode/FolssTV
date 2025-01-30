import os
import json
import base64
import hashlib
import time
import shutil
import random
import string
import pickle
import secrets
import threading
import zipfile
from cryptography.fernet import Fernet
from collections import Counter
from datetime import datetime
from itertools import cycle
from functools import lru_cache

# Global storage file
STORAGE_FILE = "daskle_storage.json"

# Generate or load an encryption key
KEY_FILE = "daskle.key"
if os.path.exists(KEY_FILE):
    with open(KEY_FILE, "rb") as f:
        KEY = f.read()
else:
    KEY = Fernet.generate_key()
    with open(KEY_FILE, "wb") as f:
        f.write(KEY)
cipher = Fernet(KEY)

# Load or initialize storage
if os.path.exists(STORAGE_FILE):
    with open(STORAGE_FILE, "r") as f:
        STORAGE = json.load(f)
else:
    STORAGE = {}

# Function to encrypt data
def encrypt_data(data):
    return cipher.encrypt(data.encode()).decode()

# Function to decrypt data
def decrypt_data(data):
    return cipher.decrypt(data.encode()).decode()

# Save storage
def save_storage():
    with open(STORAGE_FILE, "w") as f:
        json.dump(STORAGE, f, indent=2)

# Custom Command Handlers
def stor
