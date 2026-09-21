import os
import requests
import time

os.makedirs('public/images/eras', exist_ok=True)

images = {
    'sukhothai': 'https://upload.wikimedia.org/wikipedia/commons/4/49/Wat_Mahathat_Sukhothai_Historical_Park_2.jpg',
    'ayutthaya': 'https://upload.wikimedia.org/wikipedia/commons/7/77/Wat_Chaiwatthanaram_005.jpg',
    'thonburi': 'https://upload.wikimedia.org/wikipedia/commons/5/52/Wat_Arun%2C_Bangkok%2C_Thailand.jpg',
    'rattanakosin': 'https://upload.wikimedia.org/wikipedia/commons/2/23/Grand_Palace%2C_Bangkok.jpg'
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

for name, url in images.items():
    filepath = f'public/images/eras/{name}.jpg'
    if not os.path.exists(filepath):
        print(f"Downloading {name}...")
        try:
            resp = requests.get(url, headers=headers, timeout=10)
            if resp.status_code == 200:
                with open(filepath, 'wb') as f:
                    f.write(resp.content)
                print(f"Success: {name}")
            else:
                print(f"Failed to download {name}: Status {resp.status_code}")
        except Exception as e:
            print(f"Error downloading {name}: {e}")
        time.sleep(1)
    else:
        print(f"Already exists: {name}")
