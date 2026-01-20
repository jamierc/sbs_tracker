#!/usr/bin/env python3
"""
Simple HTTP server to test the SBS Tracker app.
Run this script and open the URL in your browser or phone (on the same wifi network).
"""

import http.server
import socketserver
import socket

PORT = 8000

def get_ip():
    """Get the local IP address"""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "localhost"

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    ip = get_ip()
    print("=" * 60)
    print("SBS Tracker Server Running")
    print("=" * 60)
    print(f"\nOn this computer, open:")
    print(f"  http://localhost:{PORT}/sbs-tracker.html")
    print(f"\nOn your phone (same wifi), open:")
    print(f"  http://{ip}:{PORT}/sbs-tracker.html")
    print(f"\nPress Ctrl+C to stop the server\n")
    print("=" * 60)

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
