
# Password Manager (Local Storage Version)

This is a simple **Password Manager** application built with **React** that allows users to securely store, edit, and delete passwords for different websites, using **local storage** instead of a backend database.

---

## Features
- **Add** passwords with website links, usernames, and passwords.
- **View** saved passwords in a table.
- **Edit** saved passwords.
- **Delete** passwords.
- **Password visibility toggle** for revealing/hiding passwords.
- **Copy** passwords and website URLs to clipboard.
- **Persist** data in local storage for offline usage.

---

## Technologies Used
- **Frontend**: React
- **Local Storage**: Browser's local storage for data persistence
- **Password Security**: Password visibility toggle

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/password-manager.git
   cd password-manager
   ```

2. Navigate to the `client` folder:
   ```bash
   cd client
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the frontend server:
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
6. The passwords are **saved to the local storage**, meaning data will persist even after the page is reloaded.

---

## Local Storage Structure
- The passwords are stored in the browser's local storage as a JSON object, with each password entry containing the website, username, and password information.

---
