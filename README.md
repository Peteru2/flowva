# Flowva Rewards Page – Technical Assessment

This project recreates the Rewards page of FlowvaHub as part of a React Full-Stack Developer technical assessment.

## Tech Stack
- React
- Supabase (Auth, Database, Queries)
- Tailwind CSS

## Features Implemented
- User authentication with Supabase
- Rewards dashboard UI recreation
- Daily points claiming logic
- Proper loading and empty states
- Supabase-driven data handling

## Setup Instructions
1. Clone the repository
2. Install dependencies:
   npm install
3. Create a `.env` file and add:
   VITE_SUPABASE_URL=your_supabase_url  
   VITE_SUPABASE_ANON_KEY=your_anon_key
4. Run the app:
   npm run dev

## Assumptions & Trade-offs
- Focus was placed on core Rewards functionality and UI accuracy
- Error handling prioritizes user experience over edge-case verbosity
- Supabase is used directly without additional backend abstraction
