# Firebase Realtime Database Starter Project

This project demonstrates how to connect a modern Web application to **Firebase Realtime Database** using the Firebase v11 Modular JS SDK.

## 🚀 How to Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add your Firebase credentials**:
   Open `firebaseConfig.js` and replace the placeholder values with your credentials from the [Firebase Console](https://console.firebase.google.com/).

3. **Start the local server**:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## 📚 Key Concepts Included
- `initializeApp`: Initializes Firebase in your app.
- `getDatabase`: Acquires reference to your Realtime Database.
- `push`: Creates unique sequential keys for list items.
- `set`: Writes or replaces data at a specified path.
- `onValue`: Realtime listener that updates UI automatically whenever data changes in Firebase.
- `update`: Modifies specific fields without overwriting the entire node.
- `remove`: Deletes a database node.
