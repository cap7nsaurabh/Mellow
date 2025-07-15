# Mellow - Mood-Based Ambient Music Player 🎵

Mellow is a sophisticated web application that provides personalized ambient music experiences based on your current mood. Whether you're looking to focus, relax, or energize, Mellow creates the perfect soundscape for your emotional state.

## Features ✨

- **Mood-Based Music Selection**: Automatically curates ambient music based on your current mood
- **User Authentication**: Secure login and personalized experience for each user
- **Dynamic Interface**: Modern, responsive design built with Next.js
- **Personalized Dashboard**: Track your mood patterns and favorite ambient sounds
- **Session Management**: Seamless user session handling with NextAuth.js

## Tech Stack 🛠️

- **Frontend**: Next.js, React
- **Styling**: CSS Modules
- **Authentication**: NextAuth.js
- **Database**: MongoDB
- **Font**: Geist Sans and Geist Mono
- **Deployment**: [Platform details to be added]

## Getting Started 🚀

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB connection

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cap7nsaurabh/Mellow.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure 📁

```
mellow/
├── app/              # Next.js app directory
│   ├── api/         # API routes
│   ├── components/  # Reusable components
│   ├── dashboard/   # Dashboard page
│   ├── login/      # Login page
│   └── signup/     # Signup page
├── lib/             # Utility functions
├── models/          # Database models
└── public/          # Static assets
```

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

[License details to be added]

## Contact 📧

[Contact information to be added]

---

Made with ❤️ by [cap7nsaurabh]