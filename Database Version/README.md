
# Password Manager

This is a simple **Password Manager** application built with **React** (frontend) and **Express.js** with **MongoDB** (backend). The app allows users to securely store, edit, and delete passwords for different websites.

---

## Features
- **Add** passwords with website links, usernames, and passwords.
- **View** saved passwords in a table.
- **Edit** saved passwords.
- **Delete** passwords.
- **Password visibility toggle** for revealing/hiding passwords.
- **Copy** passwords and website URLs to clipboard.

---

## Technologies Used
- **Frontend**: React
- **Backend**: Express.js
- **Database**: MongoDB
- **API Calls**: Fetch API
- **Password Security**: Password visibility toggle

---

## Installation

### Backend Setup (Express + MongoDB)
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/password-manager.git
   cd password-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:
   ```
   MONGO_URI=mongodb://localhost:27017
   DB_NAME=PassMan
   PORT=3000
   ```

4. Start the backend server:
   ```bash
   node server/index.js
   ```

   The server should now be running on `http://localhost:3000`.

### Frontend Setup (React)
1. Navigate to the `client` folder:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend server:
   ```bash
   npm start
   ```

   The frontend should now be running on `http://localhost:3001`.

---

## Usage

1. Open the frontend in your browser at `http://localhost:3001`.
2. Add a new password by entering the website URL, username, and password, then click "Save".
3. The saved passwords will appear in a table. You can **edit** or **delete** any password.
4. You can toggle the visibility of passwords by clicking the eye icon.
5. Passwords and website URLs can be copied to the clipboard by clicking the copy icon.

---

## API Endpoints

### GET `/`
- Returns a list of all saved passwords.

### POST `/`
- Adds a new password entry to the database.

### PUT `/id`
- Edits a password entry with the given `id`.

### DELETE `/id`
- Deletes a password entry with the given `id`.

---
