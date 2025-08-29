#!/usr/bin/env bash
set -e

# Script to build, export, and deploy Next.js app to Firebase Hosting

echo "⚡ Commander: Starting deployment process..."

# Check if .env file exists
if [ ! -f ".env" ]; then
  echo "❌ Error: .env file not found. Ensure it exists in the project root."
  exit 1
fi

echo "⚡ Commander: Building Next.js app..."
npm run build

# Sanity check: make sure 'out/index.html' exists
if [ ! -f "out/index.html" ]; then
  echo "❌ Error: out/index.html not found. Did 'npm run build' fail to export the static site?"
  exit 1
fi

echo "⚡ Commander: Deploying to Firebase Hosting..."
firebase deploy --only hosting --project crypto-card-clash-hq3kj
