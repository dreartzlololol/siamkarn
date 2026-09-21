import os
import requests
import json
import time
from duckduckgo_search import DDGS

# Ensure directory exists
os.makedirs('public/images/food', exist_ok=True)

eras = {
  "sukhothai": [
    "ร้านอาหารไม้กลางกรุง สุโขทัย",
    "ตาปุ้ย ก๋วยเตี๋ยวสุโขทัย",
    "ครัวสุโข สุโขทัย",
    "เจ๊แฮ ก๋วยเตี๋ยวสุโขทัย",
    "ร้านอาหารลุงพุฒ สุโขทัย",
    "ร้านเฟื่องฟ้า สุโขทัย",
    "ข้าวเปิ๊บ ยายเครื่อง สุโขทัย",
    "ร้านอาหารสินวนา สุโขทัย",
    "สิบสองหน่วยตัด สุโขทัย",
    "ร้านลมเย็น สุโขทัย"
  ],
  "ayutthaya": [
    "ตลาดกลาง อยุธยา กุ้งเผา",
    "เรือนไทยกุ้งเผา อยุธยา",
    "โรตีสายไหม อาบีดีน อยุธยา",
    "ผัดไทย 100 ปี อยุธยา",
    "ก๋วยเตี๋ยวเรือ ป้าเล็ก อยุธยา",
    "ร้านมองดูน้ำ อยุธยา",
    "แกรนด์เจ้าพระยา อยุธยา",
    "ศาลาอยุธยา",
    "ร้านขนมจีนประโดก อยุธยา",
    "เรือนหมูหัน อยุธยา"
  ],
  "thonburi": [
    "สุณี ข้าวหมูแดง ตลาดพลู",
    "ขนมกุยช่าย ตลาดพลู",
    "กระเพาะปลา ตลาดพลู",
    "บะหมี่ตงเล้ง ตลาดพลู",
    "เจ๊เอ็ง กระเพาะปลา ตลาดพลู",
    "หมี่กรอบจีนหลี ตลาดพลู",
    "เจริญพานิช ตลาดพลู",
    "ทับทิมกรอบ วงเวียนใหญ่",
    "ราดหน้ายอดผัก ตลาดพลู",
    "เต้าฮวยน้ำขิง ตลาดพลู"
  ],
  "rattanakosin": [
    "ผัดไทยประตูผี ทิพย์สมัย",
    "เจ๊ไฝ กรุงเทพ",
    "มนต์นมสด เสาชิงช้า",
    "โกปี๊เฮี้ยะไถ่กี่",
    "ออนล๊อกหยุ่น",
    "เย็นตาโฟ นายอ้วน เสาชิงช้า",
    "หอยทอด นายหมง",
    "ขาหมูตรอกซุง",
    "เป็ดย่าง ประจักษ์",
    "ข้าวเหนียวมะม่วง ก.พานิช"
  ]
}

ddgs = DDGS()

for era, places in eras.items():
    for i, place in enumerate(places):
        filename = f"{era}_{i}.jpg"
        filepath = os.path.join('public/images/food', filename)
        
        if os.path.exists(filepath):
            continue
            
        print(f"Searching for {place}...")
        try:
            results = ddgs.images(f"{place} อาหาร", max_results=5)
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
                        print(f"Downloaded {place}")
                        break
                except Exception as e:
                    pass
            if not success:
                print(f"Failed to download image for {place}")
        except Exception as e:
            print(f"Error searching {place}: {e}")
            
        time.sleep(1) # Be nice to DDG
