# Home Listings Application

A full-stack application for displaying property listings with data from CSV file imported into MongoDB.

## Project Structure

```
Day-11/
├── backend/          # Node.js + Express + MongoDB backend
├── frontend/         # React + Vite frontend
└── Data/            # CSV data file
```

## Features

- Display property listings from MongoDB database
- Responsive card layout with property details
- Modal view for detailed property information
- Property amenities (WiFi, Laundry)
- Location and pricing information
- Dynamic data loading from backend API

## Backend Setup

### Prerequisites

- Node.js installed
- MongoDB running (localhost:27017)
- MongoDB user credentials configured

### Installation

1. Navigate to backend directory:

   ```powershell
   cd backend
   ```

2. Install dependencies:

   ```powershell
   npm install
   ```

3. Configure environment variables (already set in `.env`):
   ```
   MONGO_URI=mongodb://mongouser:mongouser@localhost:27017/homelistingsdb?authSource=admin&retrywrites=true&w=majority
   PORT=3000
   ```

### Import CSV Data

Run the data import script to load listings from CSV into MongoDB:

```powershell
node importData.js
```

This will:

- Clear existing listings in the database
- Parse the CSV file from `Data/homelistingsdb.listings.csv`
- Import all listings into MongoDB

### Start Backend Server

```powershell
node app.js
```

Server will run on http://localhost:3000

### Backend API Endpoints

- `GET /api/v1/listings` - Get all listings
- `GET /api/v1/listings/:id` - Get single listing by ID
- `POST /api/v1/listings` - Create new listing
- `GET /api/v1/listings/search` - Search listings by query params

## Frontend Setup

### Installation

1. Navigate to frontend directory:

   ```powershell
   cd frontend
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

### Start Development Server

```powershell
npm run dev
```

Frontend will run on http://localhost:5173 (or another port if 5173 is busy)

## Database Schema

The listing model includes:

- `name` - Property name (required)
- `city` - City location
- `state` - State location
- `photo` - Image URL
- `availableUnits` - Number of available units
- `wifi` - WiFi availability (boolean)
- `laundry` - Laundry availability (boolean)
- `location` - Full address
- `price` - Property price

## Usage

1. Start MongoDB (if not already running)
2. Start backend server: `cd backend && node app.js`
3. Import data (first time only): `node backend/importData.js`
4. Start frontend: `cd frontend && npm run dev`
5. Open browser to http://localhost:5173

## Technologies Used

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment variables

### Frontend

- React
- Vite
- TailwindCSS + DaisyUI
- Fetch API for HTTP requests

## Notes

- CORS is enabled for all origins in development
- The backend uses DTO (Data Transfer Object) pattern for consistent API responses
- Frontend includes loading states and error handling
- Modal component for detailed property views
