# ✈️ TripZ

> **Plan intelligently. Travel better.**

TripZ is an AI-powered travel planning platform designed to make trip discovery, evaluation, and itinerary planning smarter and more personalized.

Instead of simply recommending destinations, TripZ aims to combine **AI-powered itinerary generation, weather intelligence, travel preferences, destination insights, and external travel APIs** into one platform.

The project is being developed as a **full-stack web application** with a React/TypeScript frontend and a backend currently under development.

---

## 🚧 Project Status

**TripZ is currently under active development.**

| Area                       | Status                           |
| -------------------------- | -------------------------------- |
| Frontend UI                | 🟢 ~70–80% complete              |
| Frontend routing & pages   | 🟢 Implemented                   |
| Responsive UI              | 🟢 In progress                   |
| Destination exploration    | 🟢 Implemented with sample data  |
| Trip Planner UI            | 🟢 Implemented                   |
| Trending destinations UI   | 🟢 Implemented                   |
| My Trips UI                | 🟢 Implemented                   |
| Authentication UI          | 🟡 Frontend implemented          |
| Backend                    | 🟡 Development phase             |
| Database integration       | 🔴 Planned                       |
| AI itinerary generation    | 🟡 Planned / backend integration |
| Weather API integration    | 🟡 Planned                       |
| Flight API integration     | 🟡 Planned                       |
| Hotel / accommodation APIs | 🟡 Planned                       |
| Real-time travel data      | 🔴 Planned                       |
| Production deployment      | 🔴 Upcoming                      |

> **Note:** Some features currently displayed in the frontend use mock/sample data and placeholder functionality. They will be connected to backend services and external APIs as development progresses.

---

# 🌍 What is TripZ?

TripZ is built around the idea that travel planning should be more than searching for a destination and manually assembling a list of places.

The platform is designed to help users:

* Discover destinations
* Evaluate whether a destination is suitable for a particular travel period
* Generate personalized itineraries
* Consider weather and seasonal conditions
* Explore trending destinations
* Manage saved and upcoming trips
* Eventually integrate live flight, hotel, weather and other travel information
* Adapt itineraries when conditions change

The long-term goal is to create a **personalized travel intelligence platform** rather than just another travel search website.

---

# 💡 Problem Statement

Planning a trip often requires switching between multiple platforms:

* Destination discovery websites
* Weather applications
* Flight booking platforms
* Hotel websites
* Maps
* Activity websites
* Travel blogs
* Itinerary planners

This makes travel planning fragmented and time-consuming.

TripZ aims to bring these pieces together into a single platform where users can provide their travel preferences and receive an intelligent, data-driven travel plan.

---

# ✨ Core Features

## 🧭 Destination Discovery

Explore curated destinations based on different travel categories and preferences.

The current frontend includes destination information such as:

* Destination name
* Country and region
* Description
* Travel categories
* Suitability score
* Best travel window
* Weather information
* Destination highlights
* Featured destinations
* Trending destinations

---

## 🤖 AI-Powered Trip Planning

The Trip Planner allows users to provide information such as:

* Destination
* Start date
* End date
* Number of travelers
* Budget level
* Interests
* Travel style

The system is designed to use this information to generate a personalized itinerary.

### Planned AI workflow

```text
User Preferences
       ↓
Destination Analysis
       ↓
Weather & Seasonal Data
       ↓
Travel / Flight Data
       ↓
Activity & Location Data
       ↓
AI Itinerary Generation
       ↓
Personalized Trip Plan
```

The generated itinerary is intended to include:

* Daily schedules
* Activities
* Timing
* Weather conditions
* Estimated costs
* Travel recommendations
* Alternative activities
* Weather-aware adjustments

---

## 🌦️ Weather-Aware Planning

One of TripZ's core concepts is that an itinerary should not remain static when weather conditions change.

For example:

```text
Original Plan
Beach Visit
     ↓
Rain Forecast
     ↓
AI Evaluation
     ↓
Indoor Alternative
     ↓
Museum / Market / Indoor Activity
```

The current frontend demonstrates this concept with weather-aware itinerary examples.

Future backend integration will connect this functionality to real weather data.

---

## 📊 Travel Suitability Score

TripZ is designed around a travel suitability score that evaluates whether a destination is a good choice for a particular period.

Potential factors include:

* 🌤️ Weather
* 🌡️ Temperature
* 🌧️ Rain probability
* 📅 Seasonal conditions
* 👥 Crowd conditions
* 💰 Cost
* 🏄 Activity availability

Example:

```text
Travel Suitability
       9.1 / 10

Weather          ██████████████████ 94
Temperature      █████████████████  91
Rain Risk        ████████████████   88
Season           ██████████████████ 97
Activities       ██████████████████ 96
```

The current UI uses representative/sample values. The final scoring system will be connected to real data and backend logic.

---

## 🔥 Trending Destinations

TripZ includes a dedicated trending destinations experience.

The current interface displays:

* Destination ranking
* Interest surge
* Destination category
* Best travel window
* Suitability score
* Weather information
* Destination descriptions

The long-term implementation can use external or internally collected travel-interest data to calculate destination trends dynamically.

---

## 🧳 My Trips

The My Trips section is designed to help users manage their travel plans.

It currently includes interfaces for:

* Upcoming trips
* Saved trip ideas
* Past journeys
* Saved itineraries
* Opening trips in the planner

Backend/database integration will eventually make these persistent for authenticated users.

---

## 🔐 Authentication

The frontend currently contains a login experience supporting:

* Email
* Password
* Remember me
* Forgot password interface
* Google authentication interface

The current authentication flow is a frontend placeholder and will be connected to backend authentication services.

---

# 🖥️ Current Frontend

The frontend is currently the most developed part of TripZ, with approximately **70–80% of the planned frontend experience implemented**.

### Current pages

| Route       | Purpose                        |
| ----------- | ------------------------------ |
| `/`         | Home / Landing page            |
| `/explore`  | Destination exploration        |
| `/trending` | Trending destinations          |
| `/planner`  | Trip planning interface        |
| `/my-trips` | Saved, upcoming and past trips |
| `/about`    | Product/platform information   |
| `/login`    | Authentication interface       |

---

# 🎨 Frontend Architecture

The frontend follows a component-based React architecture.

```text
FrontEnd/
│
├── public/
│   ├── hero-beaches.png
│   ├── hero-city.png
│   ├── hero-explore.png
│   ├── hero-mountains.png
│   └── icons.svg
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── HeroSlider.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Explore.tsx
│   │   ├── Trending.tsx
│   │   ├── Planner.tsx
│   │   ├── MyTrips.tsx
│   │   ├── Login.tsx
│   │   └── About.tsx
│   │
│   ├── data/
│   │   └── index.ts
│   │
│   ├── services/
│   │
│   ├── hooks/
│   │
│   ├── layouts/
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── utils/
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

# ⚙️ Technology Stack

## Frontend

* **React 19**
* **TypeScript**
* **Vite**
* **React Router**
* CSS
* Component-based architecture

## Backend — In Development

The backend is planned to handle:

* REST API endpoints
* Authentication
* User profiles
* Trip management
* Itinerary generation
* External API communication
* Weather data
* Flight information
* Hotel/accommodation information
* AI service integration
* Database operations

The exact backend stack and architecture will evolve during development.

---

# 🔌 Planned API Integrations

TripZ is being designed to work with multiple external APIs.

### 🌦️ Weather API

Used for:

* Current weather
* Forecasts
* Rain probability
* Temperature
* Weather conditions
* Weather-aware itinerary adjustments

---

### ✈️ Flight API

Planned functionality includes:

* Flight search
* Departure/arrival information
* Flight duration
* Airline information
* Pricing information
* Availability

---

### 🏨 Hotel / Accommodation APIs

Planned functionality includes:

* Accommodation search
* Price comparison
* Location
* Availability
* Ratings
* Amenities

---

### 📍 Maps / Places APIs

Potential use cases:

* Places of interest
* Restaurants
* Attractions
* Distance calculations
* Route planning
* Location-based activities

---

### 🤖 AI API / Model Integration

The backend will eventually connect to an AI model/service for:

* Personalized itinerary generation
* Activity recommendations
* Travel preference analysis
* Natural-language trip planning
* Itinerary optimization
* Weather-aware plan modification

---

# 🏗️ Planned Full-Stack Architecture

The planned architecture looks approximately like this:

```text
                    ┌─────────────────────┐
                    │      TripZ User     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │  TypeScript + Vite  │
                    └──────────┬──────────┘
                               │
                         REST / HTTP
                               │
                               ▼
                    ┌─────────────────────┐
                    │   TripZ Backend     │
                    │  API / Application  │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
       ┌────────────┐   ┌────────────┐   ┌────────────┐
       │  Database  │   │  AI Model  │   │ External   │
       │            │   │            │   │ Travel APIs│
       └────────────┘   └────────────┘   └─────┬──────┘
                                               │
                              ┌────────────────┼───────────────┐
                              ▼                ▼               ▼
                           Weather          Flights         Hotels
                              │                │               │
                              └────────────────┴───────────────┘
```

---

# 🔄 Example Trip Generation Flow

A future TripZ request could work like:

```text
1. User enters:
   Destination → Tokyo
   Dates → 5 days
   Budget → Moderate
   Interests → Culture + Food + Shopping
   Travel Style → Balanced

2. Frontend sends request to backend

3. Backend validates user input

4. Backend requests:
   ├── Weather data
   ├── Flight information
   ├── Places / activities
   └── Other travel information

5. Backend prepares relevant travel context

6. AI model generates itinerary

7. Backend processes and validates response

8. Frontend displays:
   ├── Daily itinerary
   ├── Weather
   ├── Activities
   ├── Estimated cost
   └── Recommendations
```

---

# 🗄️ Planned Backend Responsibilities

The backend will eventually manage resources such as:

```text
Users
Trips
Itineraries
Destinations
Activities
Flights
Hotels
Weather
Saved Trips
Travel Preferences
```

Possible API structure:

```text
/api
│
├── /auth
│   ├── POST /login
│   ├── POST /register
│   └── POST /logout
│
├── /users
│   └── GET /profile
│
├── /destinations
│   ├── GET /
│   └── GET /:id
│
├── /trips
│   ├── GET /
│   ├── POST /
│   ├── GET /:id
│   ├── PUT /:id
│   └── DELETE /:id
│
├── /planner
│   └── POST /generate
│
├── /weather
│   └── GET /:destination
│
├── /flights
│   └── GET /search
│
└── /hotels
    └── GET /search
```

> These endpoints represent the planned backend architecture and are not all implemented yet.

---

# 📈 Development Roadmap

## Phase 1 — Frontend Foundation ✅

* [x] Project setup
* [x] React + TypeScript
* [x] Vite configuration
* [x] React Router
* [x] Navigation
* [x] Footer
* [x] Global styling
* [x] Responsive layouts
* [x] Destination data structures

## Phase 2 — Frontend Experience 🟢

* [x] Home page
* [x] Explore page
* [x] Trending page
* [x] Trip Planner UI
* [x] My Trips UI
* [x] Login UI
* [x] About page
* [x] Hero slider
* [x] Destination cards
* [x] Suitability score UI
* [x] Weather-aware itinerary UI

## Phase 3 — Backend 🟡

* [ ] Backend project setup
* [ ] REST API architecture
* [ ] Database setup
* [ ] User authentication
* [ ] User profiles
* [ ] Trip CRUD APIs
* [ ] Saved trips
* [ ] Itinerary storage

## Phase 4 — External APIs 🟡

* [ ] Weather API
* [ ] Flight API
* [ ] Hotel API
* [ ] Places / Maps API
* [ ] API error handling
* [ ] API caching / optimization

## Phase 5 — AI Integration 🟡

* [ ] AI itinerary generation
* [ ] User preference processing
* [ ] Destination suitability calculation
* [ ] Weather-aware itinerary adaptation
* [ ] Cost-aware planning
* [ ] Personalized recommendations

## Phase 6 — Production 🔴

* [ ] Frontend deployment
* [ ] Backend deployment
* [ ] Database hosting
* [ ] Environment variable configuration
* [ ] Security hardening
* [ ] Performance optimization
* [ ] Monitoring
* [ ] Production testing

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

* Node.js
* npm

## Clone the repository

```bash
git clone <repository-url>
cd TripZ
```

## Frontend setup

```bash
cd FrontEnd
npm install
```

## Start development server

```bash
npm run dev
```

The Vite development server will provide the local URL in the terminal.

---

# 🛠️ Available Scripts

Inside the `FrontEnd` directory:

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run lint
```

Runs Oxlint.

```bash
npm run preview
```

Previews the production build locally.

---

# 🔐 Environment Variables

Once backend and external API integrations are implemented, sensitive credentials will be stored using environment variables rather than being committed to the repository.

Example:

```env
VITE_API_BASE_URL=
WEATHER_API_KEY=
FLIGHT_API_KEY=
HOTEL_API_KEY=
AI_API_KEY=
DATABASE_URL=
JWT_SECRET=
```

> **Never commit API keys, database credentials, JWT secrets, or other sensitive values to GitHub.**

---

# 👥 Team

TripZ is being developed collaboratively by:

### Somya Garg

**Frontend / Full-Stack Development**

### Shlok Modi

**Frontend / Full-Stack Development**

Both contributors are working together on the design, development, architecture, and implementation of the project.

---

# 🎯 Vision

TripZ aims to evolve into an intelligent travel assistant that understands not only **where a user wants to go**, but also:

> **When should they go?
> What should they do?
> How much will it cost?
> What happens if the weather changes?
> And how can the entire journey be optimized around their preferences?**

The long-term vision is to combine **AI + real-time travel data + personalization** into a single travel planning experience.

---

# 📌 Current Disclaimer

TripZ is currently a **work in progress / development project**.

The frontend is approximately **70–80% complete**, while backend development and real-world API integrations are currently being worked on.

Some information and interactions currently shown in the frontend are based on **mock/sample data** and are intended to demonstrate the planned product experience.

As development continues, these components will be replaced or connected with:

* Backend services
* Database persistence
* Real-time weather APIs
* Flight APIs
* Accommodation APIs
* Places/Maps APIs
* AI-powered itinerary generation

---

## ⭐ Project Goal

**TripZ — From destination discovery to a complete, intelligent journey.**
