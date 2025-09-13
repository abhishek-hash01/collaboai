
# Project Blueprint: CollaboAI

## Overview

CollaboAI is a web application that allows users to collaborate with an AI assistant and their team in real-time. It's designed for brainstorming, project planning, and other collaborative tasks. The application is built with Next.js and utilizes Firebase for real-time data synchronization.

## Features & Design

### Core Features:
- **Real-time Chat:** Users can chat with an AI and other collaborators in a shared chat interface.
- **AI Assistant:** The AI is powered by the Gemini API and can provide context-aware responses and assistance.
- **Collaboration:** Users can invite others to join their chat sessions.
- **Authentication:** Users can sign up and log in to the application.
- **Loading Animations:** The application displays loading indicators during data fetching and other asynchronous operations to provide a smooth and responsive user experience.
- **Dynamic Chat Rooms:** The application supports dynamic chat rooms, allowing for multiple, separate chat sessions.
- **Seamless Invitation Flow:** When a user is invited to a chat, they are automatically redirected to the correct chat room after logging in or signing up.

### Design:
- **Modern UI:** The application features a modern and intuitive user interface with a clean and visually balanced layout.
- **Responsive Design:** The application is responsive and works on both desktop and mobile devices.
- **Color Palette:** The color palette is vibrant and energetic, with a range of hues and concentrations.
- **Typography:** Expressive typography is used to create a clear visual hierarchy.
- **Iconography:** Icons are used to enhance understanding and navigation.
- **Interactivity:** Interactive elements have a "glow" effect and provide visual feedback to the user.

## Current Task: Fix Gemini API Error

### Plan:
1.  **Update `app/api/chat/route.ts`:**
    -   Modified the `POST` function to correctly format the chat history before sending it to the Gemini API.
    -   The `history` array is now mapped to a new array that only includes the `role` and `parts` fields, which are the fields the API expects.
