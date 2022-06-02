#!/bin/bash

# Local development server script for the CV project
# Usage: ./serve.sh [port]
# Default port: 8000

PORT=${1:-8000}

echo "🚀 Starting local server for CV project..."
echo "📁 Serving files from: $(pwd)"
echo "🌐 Access at: http://localhost:$PORT"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "🐍 Using Python 3"
    cd "$(dirname "$0")"
    python3 -m http.server "$PORT"
# Fallback to Python 2
elif command -v python &> /dev/null; then
    echo "🐍 Using Python 2"
    cd "$(dirname "$0")"
    python -m http.server "$PORT"
else
    echo "❌ Error: Python not found on this system."
    echo ""
    echo "🔧 Alternative options:"
    echo "1. Install Python: https://www.python.org/downloads/"
    echo "2. Use Node.js http-server:"
    echo "   npm install -g http-server"
    echo "   http-server -p $PORT"
    echo "3. Use live-server (if installed):"
    echo "   npx live-server --port=$PORT"
    exit 1
fi