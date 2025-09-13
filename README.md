# CollaboAI 🚀

Welcome to **CollaboAI**, a real-time, collaborative chat application that integrates the power of Google's Gemini AI to assist and supercharge your team's brainstorming and problem-solving sessions.

This application is built with a modern tech stack, leveraging Next.js for the frontend and Firebase for backend services, providing a seamless and responsive user experience.

## ✨ Features

- **Real-time Chat:** Engage in dynamic conversations with both AI and team members.
- **AI Integration:** Leverage the power of Google's Gemini for intelligent responses and creative ideas.
- **User Authentication:** Secure login and user management powered by Firebase Authentication.
- **Collaborator Presence:** See who's online and part of the chat session.
- **Markdown Support:** Format your messages with markdown for clear and structured communication.
- **Theming:** Switch between light and dark modes for your visual comfort.
- **Responsive Design:** A fully responsive interface that works on desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Backend & DB:** [Firebase](https://firebase.google.com/) (Authentication, Firestore, Hosting)
- **AI:** [Google Gemini](https://ai.google/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/)
- **Firebase Hooks:** [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks)

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A Firebase project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/collabo-ai.git
cd collabo-ai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root of your project and add your Firebase and Gemini API credentials:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-auth-domain"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"

# Gemini API Key
GEMINI_API_KEY="your-gemini-api-key"
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## ☁️ Deployment

This application is configured for easy deployment to [Firebase Hosting](https://firebase.google.com/docs/hosting).

### 1. Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. Login to Firebase

```bash
firebase login
```

### 3. Deploy

```bash
firebase deploy --only hosting
```

After deployment, you will be provided with a live URL for your application.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
