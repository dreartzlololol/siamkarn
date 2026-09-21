import os
import subprocess
import sys

def run(cmd):
    print(f"Running: {cmd}")
    subprocess.run(cmd, shell=True, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

# Install yt-dlp if not installed
try:
    import yt_dlp
except ImportError:
    run(f'"{sys.executable}" -m pip install yt-dlp')

# Ensure directory exists
out_dir = r"c:\Users\User\Downloads\เว็บประวัติ\public\videos"
os.makedirs(out_dir, exist_ok=True)

# Use English search terms to avoid Windows charmap encoding crashes
queries = {
    "sukhothai": "ytsearch1:sukhothai historical park drone 4k",
    "ayutthaya": "ytsearch1:ayutthaya historical park drone",
    "thonburi": "ytsearch1:wat arun temple of dawn bangkok drone",
    "rattanakosin": "ytsearch1:grand palace bangkok drone"
}

for era, query in queries.items():
    out_file = os.path.join(out_dir, f"{era}.mp4")
    # if it already exists, skip
    if os.path.exists(out_file):
        print(f"Already exists: {out_file}")
        continue
    
    # Download using yt-dlp
    cmd = f'yt-dlp -f "bestvideo[ext=mp4][height<=720]+bestaudio[ext=m4a]/best[ext=mp4][height<=720]" -o "{out_file}" "{query}"'
    print(f"Downloading {era}...")
    try:
        run(cmd)
    except Exception as e:
        print(f"Failed to download {era}: {e}")

print("All downloads finished!")
