export interface Place {
  name: string;
  desc: string;
  mapIframe: string;
  streetViewIframe?: string;
  type: 'historical' | 'food' | 'attraction';
  image?: string;
}

export interface EraData {
  id: string;
  name: string;
  period: string;
  description: string;
  color: string;
  heroImage: string;
  videoEmbed: string;
  places: Place[];
}

const getMap = (query: string) => `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

const LOCAL_IMAGES = {
  noodle_soup: '/images/food/noodles.png',
  pad_thai: '/images/food/padthai.png',
  rice_meat: '/images/food/ricemeat.png',
  seafood: '/images/food/seafood.png',
  shrimp: '/images/food/seafood.png',
  dessert: '/images/food/dessert.png',
  curry: '/images/food/seafood.png',
  dimsum: '/images/food/padthai.png',
  general: '/images/food/ricemeat.png',
  toast: '/images/food/dessert.png',
  breakfast: '/images/food/ricemeat.png'
};

const getImg = (key: keyof typeof LOCAL_IMAGES) => LOCAL_IMAGES[key];

export const erasData: Record<string, EraData> = {
  sukhothai: {
    id: 'sukhothai',
    name: 'สุโขทัย',
    period: 'พ.ศ. 1792 - 1981',
    description: 'อาณาจักรสุโขทัยได้รับการยกย่องให้เป็นราชธานีแห่งแรกของไทย โดดเด่นด้วยศิลปกรรมที่งดงาม ตลอดจนการประดิษฐ์ลายสือไทยโดยพ่อขุนรามคำแหงมหาราช แวะชมอุทยานประวัติศาสตร์สุโขทัยที่ได้รับการขึ้นทะเบียนเป็นมรดกโลก',
    color: 'var(--color-sukhothai)',
    heroImage: 'https://images.unsplash.com/photo-1598970428581-2856417f73db?auto=format&fit=crop&q=80',
    videoEmbed: 'https://www.youtube.com/embed/n4y2p1_s4yU',
    places: [
      { name: 'วัดมหาธาตุ (อุทยานประวัติศาสตร์สุโขทัย)', desc: 'วัดที่สำคัญที่สุดในอุทยานประวัติศาสตร์สุโขทัย', type: 'historical', mapIframe: getMap('วัดมหาธาตุ อุทยานประวัติศาสตร์สุโขทัย'), streetViewIframe: 'https://www.google.com/maps/embed?pb=!4v1700000000000!6m8!1m7!1sCAoSLEFGMVFpcE03LWpWZmRjZGkxNjh0NnpNZEF6WkM1MjUyUmtKZXBaYmF1Wmps!2m2!1d17.017772!2d99.703668!3f240.23!4f-5.11!5f0.7820865974627469' },
      { name: 'ร้านอาหารไม้กลางกรุง', desc: 'ร้านอาหารไทยดั้งเดิมบรรยากาศดี', type: 'food', image: getImg('general'), mapIframe: getMap('ร้านอาหารไม้กลางกรุง สุโขทัย') },
      { name: 'ตาปุ้ย ก๋วยเตี๋ยวสุโขทัย', desc: 'ก๋วยเตี๋ยวสูตรดั้งเดิม หอมมะนาวแท้', type: 'food', image: getImg('pad_thai'), mapIframe: getMap('ตาปุ้ย ก๋วยเตี๋ยวสุโขทัย') },
      { name: 'ครัวสุโข', desc: 'อาหารไทยบรรยากาศดี รสชาติจัดจ้าน', type: 'food', image: getImg('general'), mapIframe: getMap('ครัวสุโข สุโขทัย') },
      { name: 'เจ๊แฮ ก๋วยเตี๋ยวสุโขทัย', desc: 'ร้านดังคู่เมืองสุโขทัย', type: 'food', image: getImg('pad_thai'), mapIframe: getMap('เจ๊แฮ ก๋วยเตี๋ยวสุโขทัย') },
      { name: 'ร้านอาหารลุงพุฒ', desc: 'อาหารป่าและอาหารพื้นบ้าน', type: 'food', image: getImg('rice_meat'), mapIframe: getMap('ร้านอาหารลุงพุฒ สุโขทัย') },
      { name: 'ร้านเฟื่องฟ้า', desc: 'คาเฟ่และร้านอาหารไทยร่วมสมัย', type: 'food', image: getImg('general'), mapIframe: getMap('ร้านเฟื่องฟ้า สุโขทัย') },
      { name: 'ข้าวเปิ๊บ ยายเครื่อง', desc: 'เมนูพื้นเมืองสุโขทัย แป้งนุ่ม น้ำซุปกลมกล่อม', type: 'food', image: getImg('noodle_soup'), mapIframe: getMap('ข้าวเปิ๊บ ยายเครื่อง สุโขทัย') },
      { name: 'ร้านอาหารสินวนา', desc: 'อาหารปลาแม่น้ำสดใหม่', type: 'food', image: getImg('seafood'), mapIframe: getMap('ร้านอาหารสินวนา สุโขทัย') },
      { name: 'สิบสองหน่วยตัด', desc: 'ร้านขนมไทยโบราณ', type: 'food', image: getImg('dessert'), mapIframe: getMap('สิบสองหน่วยตัด สุโขทัย') },
      { name: 'ร้านลมเย็น', desc: 'ร้านอาหารบรรยากาศริมน้ำ', type: 'food', image: getImg('general'), mapIframe: getMap('ร้านลมเย็น สุโขทัย') }
    ]
  },
  ayutthaya: {
    id: 'ayutthaya',
    name: 'อยุธยา',
    period: 'พ.ศ. 1893 - 2310',
    description: 'ศูนย์กลางการค้าที่รุ่งเรืองที่สุดในภูมิภาคเอเชียตะวันออกเฉียงใต้ เป็นเมืองหลวงยาวนานถึง 417 ปี สัมผัสร่องรอยความยิ่งใหญ่ผ่านสถาปัตยกรรมที่วิจิตรตระการตา และวัดวาอารามที่งดงามตระการตา',
    color: 'var(--color-ayutthaya)',
    heroImage: 'https://images.unsplash.com/photo-1582035974443-424d9c79e6bc?auto=format&fit=crop&q=80',
    videoEmbed: 'https://www.youtube.com/embed/5U_Mh_O8Ecw',
    places: [
      { name: 'วัดไชยวัฒนาราม', desc: 'วัดเก่าแก่สมัยอยุธยาตอนปลาย', type: 'historical', mapIframe: getMap('วัดไชยวัฒนาราม'), streetViewIframe: 'https://www.google.com/maps/embed?pb=!4v1700000000000!6m8!1m7!1sCAoSLEFGMVFpcE03LWpWZmRjZGkxNjh0NnpNZEF6WkM1MjUyUmtKZXBaYmF1Wmps!2m2!1d14.34336!2d100.5280!3f320!4f10!5f0.7' },
      { name: 'กุ้งเผาตลาดกลาง', desc: 'กุ้งแม่น้ำเผาตัวโตๆ เนื้อแน่นๆ', type: 'food', image: getImg('shrimp'), mapIframe: getMap('ตลาดกลาง อยุธยา กุ้งเผา') },
      { name: 'เรือนไทยกุ้งเผา', desc: 'ร้านกุ้งเผาริมน้ำบรรยากาศดี', type: 'food', image: getImg('shrimp'), mapIframe: getMap('เรือนไทยกุ้งเผา อยุธยา') },
      { name: 'โรตีสายไหม อาบีดีน-ประนอม', desc: 'โรตีสายไหมเจ้าดัง แป้งนุ่มเหนียว', type: 'food', image: getImg('dessert'), mapIframe: getMap('โรตีสายไหม อาบีดีน อยุธยา') },
      { name: 'ผัดไทย 100 ปี (หน้าอำเภอ)', desc: 'ตำนานผัดไทยอยุธยา', type: 'food', image: getImg('pad_thai'), mapIframe: getMap('ผัดไทย 100 ปี อยุธยา') },
      { name: 'ก๋วยเตี๋ยวเรือ ป้าเล็ก', desc: 'ก๋วยเตี๋ยวเรืออยุธยาแท้ๆ', type: 'food', image: getImg('noodle_soup'), mapIframe: getMap('ก๋วยเตี๋ยวเรือ ป้าเล็ก อยุธยา') },
      { name: 'ร้านมองดูน้ำ', desc: 'อาหารทะเลและปลาแม่น้ำ', type: 'food', image: getImg('seafood'), mapIframe: getMap('ร้านมองดูน้ำ อยุธยา') },
      { name: 'แกรนด์เจ้าพระยา', desc: 'อาหารไทยระดับพรีเมียม', type: 'food', image: getImg('general'), mapIframe: getMap('แกรนด์เจ้าพระยา อยุธยา') },
      { name: 'ศาลาอยุธยา', desc: 'คาเฟ่และร้านอาหารบรรยากาศชิคๆ', type: 'food', image: getImg('general'), mapIframe: getMap('ศาลาอยุธยา') },
      { name: 'ร้านขนมจีนประโดก', desc: 'ขนมจีนน้ำยาปลาช่อนอร่อยเด็ด', type: 'food', image: getImg('curry'), mapIframe: getMap('ร้านขนมจีนประโดก อยุธยา') },
      { name: 'เรือนหมูหัน', desc: 'หมูหันหนังกรอบเนื้อนุ่ม', type: 'food', image: getImg('rice_meat'), mapIframe: getMap('เรือนหมูหัน อยุธยา') }
    ]
  },
  thonburi: {
    id: 'thonburi',
    name: 'ธนบุรี',
    period: 'พ.ศ. 2310 - 2325',
    description: 'แม้จะเป็นราชธานีเพียง 15 ปี แต่มีความสำคัญยิ่งในการกอบกู้เอกราชของชาติ กรุงธนบุรีตั้งอยู่บริเวณปากแม่น้ำเจ้าพระยา',
    color: 'var(--color-thonburi)',
    heroImage: 'https://images.unsplash.com/photo-1577742186718-6c84c6001fa3?auto=format&fit=crop&q=80',
    videoEmbed: 'https://www.youtube.com/embed/n4y2p1_s4yU',
    places: [
      { name: 'พระราชวังเดิม (ใกล้พระปรางค์วัดอรุณ)', desc: 'พระราชวังที่ประทับของสมเด็จพระเจ้าตากสิน', type: 'historical', mapIframe: getMap('พระราชวังเดิม กรุงเทพ'), streetViewIframe: 'https://www.google.com/maps/embed?pb=!4v1700000000000!6m8!1m7!1sCAoSLEFGMVFpcE03LWpWZmRjZGkxNjh0NnpNZEF6WkM1MjUyUmtKZXBaYmF1Wmps!2m2!1d13.7436!2d100.4889!3f0!4f0!5f0.7' },
      { name: 'สุณี ข้าวหมูแดง ตลาดพลู', desc: 'ข้าวหมูแดงเก่าแก่ชื่อดังย่านตลาดพลู', type: 'food', image: getImg('rice_meat'), mapIframe: getMap('สุณี ข้าวหมูแดง ตลาดพลู') },
      { name: 'ขนมกุยช่าย ตลาดพลู', desc: 'กุยช่ายเจ้าดัง แป้งบางไส้แน่น', type: 'food', image: getImg('dimsum'), mapIframe: getMap('ขนมกุยช่าย ตลาดพลู') },
      { name: 'กระเพาะปลา ตลาดพลู', desc: 'กระเพาะปลาแท้ๆ น้ำซุปกลมกล่อม', type: 'food', image: getImg('noodle_soup'), mapIframe: getMap('กระเพาะปลา ตลาดพลู') },
      { name: 'บะหมี่ตงเล้ง', desc: 'บะหมี่เกี๊ยวทำเอง เส้นเหนียวนุ่ม', type: 'food', image: getImg('pad_thai'), mapIframe: getMap('บะหมี่ตงเล้ง ตลาดพลู') },
      { name: 'เจ๊เอ็ง กระเพาะปลา', desc: 'เครื่องแน่น รสชาติเข้มข้น', type: 'food', image: getImg('noodle_soup'), mapIframe: getMap('เจ๊เอ็ง กระเพาะปลา ตลาดพลู') },
      { name: 'หมี่กรอบจีนหลี', desc: 'หมี่กรอบสูตรโบราณ ร.5', type: 'food', image: getImg('pad_thai'), mapIframe: getMap('หมี่กรอบจีนหลี ตลาดพลู') },
      { name: 'เจริญพานิช', desc: 'น้ำแข็งไสและขนมหวานเย็นชื่นใจ', type: 'food', image: getImg('dessert'), mapIframe: getMap('เจริญพานิช ตลาดพลู') },
      { name: 'ทับทิมกรอบ วงเวียนใหญ่', desc: 'ทับทิมกรอบน้ำกะทิหอมมัน', type: 'food', image: getImg('dessert'), mapIframe: getMap('ทับทิมกรอบ วงเวียนใหญ่') },
      { name: 'ราดหน้ายอดผัก ตลาดพลู', desc: 'หมูนุ่ม ผักกรอบ', type: 'food', image: getImg('pad_thai'), mapIframe: getMap('ราดหน้ายอดผัก ตลาดพลู') },
      { name: 'เต้าฮวยน้ำขิง', desc: 'เต้าฮวยร้อนๆ ซดคล่องคอ', type: 'food', image: getImg('dessert'), mapIframe: getMap('เต้าฮวยน้ำขิง ตลาดพลู') }
    ]
  },
  rattanakosin: {
    id: 'rattanakosin',
    name: 'รัตนโกสินทร์',
    period: 'พ.ศ. 2325 - ปัจจุบัน',
    description: 'ยุคแห่งการสร้างบ้านแปงเมืองให้เป็น "กรุงเทพมหานคร" ศูนย์รวมความเจริญ สถาปัตยกรรม ศิลปกรรม',
    color: 'var(--color-rattanakosin)',
    heroImage: 'https://images.unsplash.com/photo-1571295982821-2e63574c8100?auto=format&fit=crop&q=80',
    videoEmbed: 'https://www.youtube.com/embed/5U_Mh_O8Ecw',
    places: [
      { name: 'วัดพระแก้ว', desc: 'วัดคู่บ้านคู่เมืองของไทย', type: 'historical', mapIframe: getMap('วัดพระแก้ว กรุงเทพ'), streetViewIframe: 'https://www.google.com/maps/embed?pb=!4v1700000000000!6m8!1m7!1sCAoSLEFGMVFpcE03LWpWZmRjZGkxNjh0NnpNZEF6WkM1MjUyUmtKZXBaYmF1Wmps!2m2!1d13.751!2d100.492!3f180!4f0!5f0.7' },
      { name: 'ผัดไทยประตูผี (ทิพย์สมัย)', desc: 'ผัดไทยชื่อดังระดับโลก', type: 'food', image: getImg('pad_thai'), mapIframe: getMap('ผัดไทยประตูผี ทิพย์สมัย') },
      { name: 'เจ๊ไฝ (Jay Fai)', desc: 'สตรีทฟู้ดระดับมิชลินสตาร์', type: 'food', image: getImg('seafood'), mapIframe: getMap('เจ๊ไฝ กรุงเทพ') },
      { name: 'มนต์นมสด (เสาชิงช้า)', desc: 'ร้านขนมปังปิ้งและนมสดเก่าแก่', type: 'food', image: getImg('toast'), mapIframe: getMap('มนต์นมสด เสาชิงช้า') },
      { name: 'โกปี๊เฮี้ยะไถ่กี่', desc: 'ร้านกาแฟโบราณบรรยากาศย้อนยุค', type: 'food', image: getImg('breakfast'), mapIframe: getMap('โกปี๊เฮี้ยะไถ่กี่') },
      { name: 'ออนล๊อกหยุ่น', desc: 'อาหารเช้าสไตล์ฝรั่งผสมจีน', type: 'food', image: getImg('breakfast'), mapIframe: getMap('ออนล๊อกหยุ่น') },
      { name: 'เย็นตาโฟ นายอ้วน (เสาชิงช้า)', desc: 'เย็นตาโฟรสเด็ด เครื่องแน่นลูกชิ้นปลาทำเอง', type: 'food', image: getImg('noodle_soup'), mapIframe: getMap('เย็นตาโฟ นายอ้วน เสาชิงช้า') },
      { name: 'หอยทอด นายหมง', desc: 'หอยทอดกรอบนอกนุ่มใน หอยนางรมตัวโต', type: 'food', image: getImg('seafood'), mapIframe: getMap('หอยทอด นายหมง') },
      { name: 'ขาหมูตรอกซุง', desc: 'ข้าวขาหมูสูตรดั้งเดิม เนื้อนุ่มละลายในปาก', type: 'food', image: getImg('rice_meat'), mapIframe: getMap('ขาหมูตรอกซุง') },
      { name: 'เป็ดย่าง ประจักษ์', desc: 'เป็ดย่างหนังกรอบ น้ำราดรสเลิศ', type: 'food', image: getImg('rice_meat'), mapIframe: getMap('เป็ดย่าง ประจักษ์') },
      { name: 'ข้าวเหนียวมะม่วง ก.พานิช', desc: 'ข้าวเหนียวมูนหอมมันคู่มะม่วงสุกหวานฉ่ำ', type: 'food', image: getImg('dessert'), mapIframe: getMap('ข้าวเหนียวมะม่วง ก.พานิช') }
    ]
  }
};
