# SmartTrip-AI : AI-Powered Travel Planner

SmartTrip-AI is an intelligent travel planning application that creates personalized itineraries using AI technology. Users can input their travel preferences, and the app generates customized trip plans with hotel recommendations and daily activity schedules.

##  Features

### For Users
- **AI-Powered Trip Planning**: Generate personalized travel itineraries based on your preferences
- **Smart Destination Search**: Autocomplete location search with real-time suggestions
- **Budget-Based Planning**: Choose from Cheap, Moderate, or Luxury budget options
- **Group Size Customization**: Plan for solo travel, couples, families, or friend groups
- **Hotel Recommendations**: Get curated hotel suggestions with pricing and ratings
- **Daily Itineraries**: Detailed day-by-day plans with places to visit, timings, and ticket prices
- **Trip Management**: Save and view all your planned trips in one place
- **Google Authentication**: Secure login with Google OAuth
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Key User Workflows
1. **Create Trip**: Enter destination, duration, budget, and group size
2. **AI Generation**: Get AI-generated itinerary with hotels and daily plans
3. **View Trip**: Access detailed trip information with maps and pricing
4. **Manage Trips**: View all saved trips in your personal dashboard

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Google Cloud Console account (for OAuth)
- Firebase account (for database)
- Gemini AI API key
- Geoapify API key (for location autocomplete)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/praveenguptaa/SmartTrip-AI.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_GOOGLE_AUTH_CLIENT_ID=your_google_oauth_client_id
   VITE_GEMINI_API_KEY=your_gemini_api_key
   VITE_GEOAPIFY_API_KEY=your_geoapify_api_key
   VITE_FIREBASE_API_KEY=your_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   ```

4. **Firebase Configuration**
   Update `src/service/firebaseConfig.jsx` with your Firebase project credentials:
   ```javascript
   const firebaseConfig = {
     apiKey: "your_api_key",
     authDomain: "your_project.firebaseapp.com",
     projectId: "your_project_id",
     // ... other config
   };
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Build for Production**
   ```bash
   npm run build
   ```

##  Technical Architecture

### Technology Stack
- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom components
- **Routing**: React Router DOM v7
- **State Management**: React Hooks (useState, useEffect)
- **Authentication**: Google OAuth 2.0
- **Database**: Firebase Firestore
- **AI Integration**: Google Gemini AI
- **Location Services**: Geoapify Geocoding API
- **Icons**: Lucide React & React Icons
- **Notifications**: Sonner toast library

### Project Structure
```
src/
├── components/
│   ├── custom/           # Custom application components
│   │   ├── Header.jsx    # Navigation header with auth
│   │   └── Hero.jsx      # Landing page hero section
│   ├── helper/           # Utility components
│   │   └── AddressAutocomplete.jsx  # Location search
│   └── ui/               # Reusable UI components
├── constants/
│   └── options.jsx       # Travel options and AI prompt
├── create-trip/          # Trip creation flow
├── my-trips/             # User trips dashboard
├── view-trip/            # Trip details view
│   └── components/       # Trip-specific components
├── service/              # External service integrations
│   ├── AIModel.jsx       # Gemini AI configuration
│   ├── firebaseConfig.jsx # Firebase setup
│   └── GlobalApi.jsx     # API utilities
└── lib/
    └── utils.js          # Utility functions
```

### Key Components

#### Trip Creation Flow (`src/create-trip/index.jsx`)
- Collects user preferences (destination, duration, budget, group size)
- Integrates with address autocomplete for destination selection
- Validates form data and handles user authentication
- Generates AI-powered itinerary using Gemini AI
- Saves trip data to Firebase Firestore

#### AI Integration (`src/service/AIModel.jsx`)
- Configures Google Gemini AI with specific parameters
- Uses structured prompts for consistent trip generation
- Returns JSON-formatted itineraries with hotels and daily plans

#### Authentication System (`src/components/custom/Header.jsx`)
- Google OAuth integration for secure user login
- Persistent user sessions with localStorage
- Protected routes for authenticated features

#### Location Services (`src/components/helper/AddressAutocomplete.jsx`)
- Real-time location search with Geoapify API
- Autocomplete suggestions with formatted addresses
- Handles user selection and form integration

### Database Schema (Firebase Firestore)

#### Trips Collection
```javascript
{
  id: "timestamp_string",
  userEmail: "user@example.com",
  userSelection: {
    location: "destination_name",
    noOfDays: "number_of_days",
    budget: "Cheap|Moderate|Luxury",
    traveller: "group_size"
  },
  tripData: {
    hotels: [...],
    itinerary: [...]
  }
}
```

### API Integrations

#### Google Gemini AI
- **Purpose**: Generate travel itineraries
- **Response Format**: Structured JSON with hotels and daily plans

#### Geoapify Geocoding
- **Purpose**: Location autocomplete and search
- **Endpoint**: `https://api.geoapify.com/v1/geocode/autocomplete`
- **Features**: Real-time suggestions, formatted addresses

#### Google OAuth 2.0
- **Purpose**: User authentication
- **Scopes**: Basic profile information
- **Storage**: User data in localStorage


## Configuration

### Environment Variables
- `VITE_GOOGLE_AUTH_CLIENT_ID`: Google OAuth client ID
- `VITE_GEMINI_API_KEY`: Google Gemini AI API key
- `VITE_GEOAPIFY_API_KEY`: Geoapify geocoding API key

### Firebase Setup
1. Create a Firebase project
2. Enable Firestore database
3. Configure authentication providers
4. Update firebaseConfig.jsx with your credentials

### Google Cloud Setup
1. Create a Google Cloud project
2. Enable Gemini AI API
3. Generate API key for Gemini
4. Set up OAuth 2.0 credentials

## Usage Examples

### Creating a Trip
1. Navigate to the home page
2. Click "Get Started, It's Free"
3. Fill in travel preferences:
   - Destination (with autocomplete)
   - Number of days (1-5)
   - Budget level
   - Group size
4. Sign in with Google when prompted
5. Wait for AI to generate your itinerary
6. View your personalized trip plan

### Viewing Trips
1. Click "My Trips" in the header
2. Browse your saved trips
3. Click on any trip to view details
4. See hotels, daily plans, and pricing information




## 🔗 Links

- **Repository**: https://github.com/praveenguptaa/SmartTrip-AI
- **Live Demo**: https://smarttrip-ai.onrender.com/
