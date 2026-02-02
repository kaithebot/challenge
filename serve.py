#!/usr/bin/env python3
"""
Simple HTTP server to serve the furniture website locally
"""

import http.server
import socketserver
import os
import webbrowser
from threading import Timer

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def open_browser():
    """Open the browser after a short delay"""
    Timer(1.5, lambda: webbrowser.open(f'http://localhost:{PORT}')).start()

def main():
    """Main function to start the server"""
    print(f"🪑 Starting New Era Furniture website server...")
    print(f"📁 Serving files from: {DIRECTORY}")
    print(f"🌐 Server starting at: http://localhost:{PORT}")
    print(f"🔗 WhatsApp links will redirect to phone: 1234567890")
    print(f"⏹️  Press Ctrl+C to stop the server")
    print("=" * 50)
    
    # Open browser automatically
    open_browser()
    
    try:
        with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except Exception as e:
        print(f"❌ Error starting server: {e}")

if __name__ == "__main__":
    main()