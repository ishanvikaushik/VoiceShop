
```markdown
# 🛍️ VoiceShop

A voice-assisted React web application using Firebase for authentication and product search.

---

## 🚀 Features

- ✅ Google Authentication (Firebase)
- ✅ Product search via voice assistant
- ✅ Shared cart & collaboration (in progress)
- ✅ Built using Vite + React + Tailwind CSS

---

## 📁 Project Structure

```

frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   ├── firebase.js
│   ├── ...
├── index.html
├── package.json
├── vite.config.js
├── .env (excluded from Git)
├── .gitignore

````

---
Follow the steps below to clone, set up, and run the project locally.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/voiceshop.git
cd voiceshop/frontend
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure Firebase Environment Variables

Create a `.env` file in the `frontend/` folder with the following:

```env
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
VITE_MEASUREMENT_ID=your_measurement_id
```

> 📌 **Note**: This file is ignored in version control. Do not share `.env` publicly.

### 4️⃣ Run the development server

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔧 Tech Stack

* ⚡ [Vite](https://vitejs.dev/)
* ⚛️ [React](https://reactjs.org/)
* 🌬️ [Tailwind CSS](https://tailwindcss.com/)
* 🔐 [Firebase Auth](https://firebase.google.com/)

---

## 🤝 Contributing Guidelines

1. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:

   ```bash
   git add .
   git commit -m "Add: your message here"
   ```

3. Push your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

4. Open a Pull Request on GitHub.

---

## 📄 License

This project is open-source and free to use for educational and non-commercial purposes.

---

## 👥 Contributors

* [@ishanvikaushik](https://github.com/ishanvikaushik)
  



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
