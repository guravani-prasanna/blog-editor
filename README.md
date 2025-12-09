# Blog Editor Project

A user-friendly blog creation platform featuring a rich text editor, image uploads, auto-save, notifications, preview mode, and post search functionality.

## Table of Contents
1. Project Overview
   This project is a user-friendly blog creation platform built with React. It allows users to write, format, and manage blog posts efficiently. Key features include a rich text editor, media uploads with progress feedback, auto-saving drafts, live preview mode, tag assignment, and a searchable post list. The primary goal is to provide a seamless and intuitive content creation experience.
2. Setup Instructions
   1. Install Node.js
      Download and install Node.js from https://nodejs.org
.  2.Clone the repository
      git clone guravani-prasanna
      cd blog-editor
   3. Install dependencies
      npm install
   4. Start the development server
      npm start
   5. Open http://localhost:3000 in your browser to use the editor.
3. Project Architecture
   Components:
        App.js — main component containing editor, preview, and post management.
        EditorContent — TipTap editor for rich text formatting.
        ToastContainer — displays notifications.
   State Management:
        Component-level state using React useState and useEffect.
        Drafts and posts are persisted in localStorage.
   Extensions:
        StarterKit — basic editor features (bold, italic, lists, headings).
        Image — for image uploads.
        Link — for inserting hyperlinks.
4. Live Demo
   http://localhost:3000
5. Feature
   1. Rich text editor
   2. Image and media uploads
   3. Draft saving and auto-save
   4. Responsive design
