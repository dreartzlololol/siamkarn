$ErrorActionPreference = "Stop"

$python = "C:\Program Files\Python310\python.exe"

Write-Host "Downloading Sukhothai..."
& $python -m yt_dlp -f "bestvideo[ext=mp4][height<=720]+bestaudio[ext=m4a]/best[ext=mp4][height<=720]" -o "c:\Users\User\Downloads\เว็บประวัติ\public\videos\sukhothai.mp4" "ytsearch1:sukhothai historical park drone" --force-overwrites

Write-Host "Downloading Ayutthaya..."
& $python -m yt_dlp -f "bestvideo[ext=mp4][height<=720]+bestaudio[ext=m4a]/best[ext=mp4][height<=720]" -o "c:\Users\User\Downloads\เว็บประวัติ\public\videos\ayutthaya.mp4" "ytsearch1:ayutthaya historical park drone" --force-overwrites

Write-Host "Downloading Thonburi..."
& $python -m yt_dlp -f "bestvideo[ext=mp4][height<=720]+bestaudio[ext=m4a]/best[ext=mp4][height<=720]" -o "c:\Users\User\Downloads\เว็บประวัติ\public\videos\thonburi.mp4" "ytsearch1:wat arun temple of dawn bangkok drone" --force-overwrites

Write-Host "Downloading Rattanakosin..."
& $python -m yt_dlp -f "bestvideo[ext=mp4][height<=720]+bestaudio[ext=m4a]/best[ext=mp4][height<=720]" -o "c:\Users\User\Downloads\เว็บประวัติ\public\videos\rattanakosin.mp4" "ytsearch1:grand palace bangkok drone" --force-overwrites

Write-Host "Done!"
