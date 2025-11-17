#!/bin/bash
echo "🚀 Starting Vercel build..."
echo "📦 Installing client dependencies..."
cd client
npm install
echo "🔨 Building React app..."
npm run build
echo "✅ Build completed!"