#!/bin/bash

# Static CV Generator Script
# Generates static HTML pages from JSON data files using Python template processor

set -e  # Exit on any error

echo "🚀 Starting static CV generation..."

# Run the Python generator
python3 generate_static.py

echo ""
echo "🎉 Static CV generation complete!"
echo "📁 You can now serve the static versions from the root directory"
echo "   - English: en/index.html"
echo "   - Spanish: es/index.html"