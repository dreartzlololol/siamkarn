import os
import requests
import time
from duckduckgo_search import DDGS

os.makedirs('public/images/eras', exist_ok=True)

queries = {
    'sukhothai': 'Sukhothai Historical Park high resolution photography',
    'ayutthaya': 'Ayutthaya Historical Park high resolution photography',
    'thonburi': 'Wat Arun sunset high resolution photography',
    'rattanakosin': 'Grand Palace Bangkok high resolution photography'
}

ddgs = DDGS()

for name, query in queries.items():
    filepath = f'public/images/eras/{name}.jpg'
    if os.path.exists(filepath):
        print(f"Already exists: {name}")
        continue
        
    print(f"Searching for {name}...")
    try:
        results = ddgs.images(query, max_results=5)
        success = False
        for r in results:
            img_url = r.get('image')
            if not img_url: continue
            try:
                resp = requests.get(img_url, timeout=5)
                if resp.status_code == 200:
                    with open(filepath, 'wb') as f:
                        f.write(resp.content)
                    success = True
                    print(f"Downloaded {name}")
                    break
            except Exception:
                pass
        if not success:
            print(f"Failed to download image for {name}")
    except Exception as e:
        print(f"Error searching {name}: {e}")
        
    time.sleep(2)
