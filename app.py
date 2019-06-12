import firebase_admin
from firebase_admin import credentials
path = "./global-sun-203907-firebase-adminsdk-382mf-d90e8af2e8.json"
cred = credentials.Certificate(path)
default_app = firebase_admin.initialize_app(cred)