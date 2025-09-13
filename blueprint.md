
# Project Blueprint: CollaboAI

## Overview

CollaboAI is a web application that allows users to collaborate with an AI assistant and their team in real-time. It's designed for brainstorming, project planning, and other collaborative tasks. The application is built with Next.js and utilizes Firebase for real-time data synchronization.

## Features & Design

### Core Features:
- **Real-time Chat:** Users can chat with an AI and other collaborators in a shared chat interface.
- **AI Assistant:** The AI is powered by the Gemini API and can provide context-aware responses and assistance.
- **Collaboration:** Users can invite others to join their chat sessions.
- **Authentication:** Users can sign up and log in to the application.

### Design:
- **Modern UI:** The application features a modern and intuitive user interface with a clean and visually balanced layout.
- **Responsive Design:** The application is responsive and works on both desktop and mobile devices.
- **Color Palette:** The color palette is vibrant and energetic, with a range of hues and concentrations.
- **Typography:** Expressive typography is used to create a clear visual hierarchy.
- **Iconography:** Icons are used to enhance understanding and navigation.
- **Interactivity:** Interactive elements have a "glow" effect and provide visual feedback to the user.

## Current Task: Integrate Login, Signup, and Chat Pages

### Plan:
1.  **Update Landing Page (`pages/index.tsx`):**
    -   Redirect "Get Started" buttons to the login page (`/login`).
2.  **Create Signup Page (`pages/signup/page.tsx`):**
    -   Create a new signup page with a form for email and password.
    -   Add a link to the login page for users who already have an account.
3.  **Update Login Page (`pages/login/page.tsx`):**
    -   Update the "Sign up" link to point to the new signup page (`/signup`).
4.  **Verify Component Installation:**
    -   Run `npm install` to ensure all dependencies are correctly installed.
    -   Run `npm run lint -- --fix` to check for and fix any linting issues.
