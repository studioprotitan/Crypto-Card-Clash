# Crypto Card Clash - Firebase & Pixel Streaming

This project integrates a Firebase/Genkit backend with an Unreal Engine Pixel Streaming frontend.

## Project Structure

/
├── src/
│   ├── ai/               # Genkit AI flows
│   ├── signalling/       # Pixel Streaming Signalling Server
│   ├── web/              # Web frontend (player page)
│   └── game/             # Unreal Engine project root
├── infra/
│   └── edgegap/
│       └── docker-compose.yml  # Docker configuration for all service

## Quickstart

### 1. Setup Backend & AI

bash
npm install
npm run dev

### 2. Setup Pixel Streaming

Follow the instructions in `src/signalling/README.md` to copy the UE signalling server files.

### 3. Run all services with Docker

From the project root, run docker-compose:
bash
docker compose up --build
