# Mellow - Mood-Based Ambient Music Player 🎵

Mellow is an elegant web application that creates personalized ambient music experiences based on your emotional state. With its intuitive mood selection interface and beautiful gradient design, Mellow helps you find the perfect soundtrack for any moment.

## Features ✨

- **Interactive Mood Selection**: Beautiful, card-based interface with mood emojis and colors
- **Admin Dashboard**: Comprehensive admin hub with mood and music management
- **Music Metadata Management**: Upload and edit music details for each mood
- **User Authentication**: Secure login and signup with NextAuth.js
- **Responsive Design**: Fluid layout that works perfectly on all devices
- **Personalized Dashboard**: Dynamic welcome messages and mood tracking
- **Protected Routes**: Secure routes with session management
- **Beautiful UI**: Smooth animations and gradient backgrounds
- **Mood Management**: Full CRUD operations for admins to customize the mood collection

## Tech Stack 🛠️

- **Frontend**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS with custom gradients
- **Authentication**: NextAuth.js with session management
- **Database**: MongoDB with custom models
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **UI Components**: Custom components with Tailwind animations
- **TypeScript**: For type-safe development

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
   ADMIN_EMAIL=your_admin_email@example.com    # Email for admin access
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure 📁

```
mellow/
├── app/                    # Next.js 13+ app directory
│   ├── api/               # API routes
│   │   ├── auth/         # NextAuth authentication endpoints
│   │   └── signup/       # User registration endpoint
│   ├── components/       # Reusable components (NavBar)
│   ├── dashboard/        # Protected dashboard page
│   ├── login/           # User login page
│   └── signup/          # User registration page
├── lib/                  # Utility functions (MongoDB connection)
├── models/              # Database models (User)
├── types/              # TypeScript type definitions
└── public/             # Static assets and icons
```

## Key Features in Detail 🔍

### Dashboard
- Responsive grid layout with 1-3 columns based on screen size
- Interactive mood cards with hover animations
- Real-time loading states
- Protected route with session validation

### Admin Hub
- Secure admin-only access with tabbed interface
- **Mood Management Panel**:
  - Add new moods with custom emoji representations
  - Customize color schemes for mood cards
  - Define mood names
  - Delete existing moods
  - Real-time mood management
- **Music Metadata Panel**:
  - Upload music details
  - Edit music metadata
  - Associate music with specific moods
  - Manage music library
- Immediate reflection of changes in user dashboard
- Beautiful card-based admin interface with hover effects

### Authentication
- Secure user sessions with NextAuth.js
- Personalized welcome messages
- Automatic redirect for unauthenticated users
- Role-based access control for admin features

### UI/UX
- Beautiful gradient backgrounds (blue-purple-pink)
- Smooth hover animations on interactive elements
- Responsive design with Tailwind breakpoints
- Loading states for better user experience

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

[License details to be added]

## Contact 📧

[Contact information to be added]

---

Made with ❤️ by [cap7nsaurabh]