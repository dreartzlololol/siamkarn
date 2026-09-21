const fs = require('fs');

const images = [
  'https://images.unsplash.com/photo-1559314809-0d155014e29e',
  'https://images.unsplash.com/photo-1626804475297-41609ea004eb',
  'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0',
  'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7',
  'https://images.unsplash.com/photo-1541592102781-c1f9fd60b0e3',
  'https://images.unsplash.com/photo-1559742811-822873691fc8',
  'https://images.unsplash.com/photo-1626804475147-3801f94d13fa',
  'https://images.unsplash.com/photo-1547517172-11119c48834c',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
  'https://images.unsplash.com/photo-1589302168068-964664d93cb0',
  'https://images.unsplash.com/photo-1548943487-a2e4e43b4859',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
];

const getImage = (idx) => `${images[idx % images.length]}?auto=format&fit=crop&w=800&q=80`;

const genericMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9!2d100.478!3d13.722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2s!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth';

const foodNames = {
  sukhothai: ["ไม้กลางกรุง", "ตาปุ้ย ก๋วยเตี๋ยวสุโขทัย", "ครัวสุโข", "เจ๊แฮ ก๋วยเตี๋ยวสุโขทัย", "ลุงพุฒ", "เฟื่องฟ้า", "ข้าวเปิ๊บ ยายเครื่อง", "ร้านอาหารสินวนา", "สิบสองหน่วยตัด", "ร้านลมเย็น", "ขนมจีนบ้านนา"],
  ayutthaya: ["กุ้งเผาตลาดกลาง", "เรือนไทยกุ้งเผา", "โรตีสายไหม อาบีดีน", "ผัดไทย 100 ปี", "ก๋วยเตี๋ยวเรือ ป้าเล็ก", "มองดูน้ำ", "แกรนด์เจ้าพระยา", "ศาลาอยุธยา", "มองดูเล", "ขนมจีนประโดก", "เรือนหมูหัน"],
  thonburi: ["สุณี ข้าวหมูแดง", "กุยช่าย ตลาดพลู", "กะเพาะปลา ตลาดพลู", "บะหมี่ตงเล้ง", "เจ๊เอ็ง กระเพาะปลา", "หมี่กรอบจีนหลี (เต็กเฮง)", "เจริญพานิช", "ทับทิมกรอบ วงเวียนใหญ่", "ลาดหน้ายอดผัก", "เต้าฮวยน้ำขิง", "น้ำแข็งใส ตลาดพลู"],
  rattanakosin: ["ผัดไทยประตูผี", "เจ๊ไฝ", "มนต์นมสด", "โกปี๊เฮี้ยะไถ่กี่", "ออนล๊อกหยุ่น", "เย็นตาโฟ นายอ้วน", "หอยทอด นายหมง", "ขาหมูตรอกซุง", "ข้าวต้มเป็ด อ้วน", "เป็ดย่าง ประจักษ์", "ข้าวเหนียวมะม่วง ก.พานิช"]
};

let tsContent = `export interface Place {
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

export const erasData: Record<string, EraData> = {
`;

const eras = [
  {
    id: 'sukhothai',
    name: 'สุโขทัย',
    period: 'พ.ศ. 1792 - 1981',
    description: 'อาณาจักรสุโขทัยได้รับการยกย่องให้เป็นราชธานีแห่งแรกของไทย โดดเด่นด้วยศิลปกรรมที่งดงาม เช่น พระพุทธรูปปางลีลา และเจดีย์ทรงพุ่มข้าวบิณฑ์ ตลอดจนการประดิษฐ์ลายสือไทยโดยพ่อขุนรามคำแหงมหาราช แวะชมอุทยานประวัติศาสตร์สุโขทัยที่ได้รับการขึ้นทะเบียนเป็นมรดกโลกโดย UNESCO',
    color: 'var(--color-sukhothai)',
    heroImage: 'https://images.unsplash.com/photo-1598970428581-2856417f73db?auto=format&fit=crop&q=80',
    videoEmbed: 'https://www.youtube.com/embed/n4y2p1_s4yU'
  },
  {
    id: 'ayutthaya',
    name: 'อยุธยา',
    period: 'พ.ศ. 1893 - 2310',
    description: 'ศูนย์กลางการค้าที่รุ่งเรืองที่สุดในภูมิภาคเอเชียตะวันออกเฉียงใต้ เป็นเมืองหลวงยาวนานถึง 417 ปี สัมผัสร่องรอยความยิ่งใหญ่ผ่านสถาปัตยกรรมที่วิจิตรตระการตา และวัดวาอารามที่งดงามตระการตา',
    color: 'var(--color-ayutthaya)',
    heroImage: 'https://images.unsplash.com/photo-1582035974443-424d9c79e6bc?auto=format&fit=crop&q=80',
    videoEmbed: 'https://www.youtube.com/embed/5U_Mh_O8Ecw'
  },
  {
    id: 'thonburi',
    name: 'ธนบุรี',
    period: 'พ.ศ. 2310 - 2325',
    description: 'แม้จะเป็นราชธานีเพียง 15 ปี แต่มีความสำคัญยิ่งในการกอบกู้เอกราชของชาติ กรุงธนบุรีตั้งอยู่บริเวณปากแม่น้ำเจ้าพระยา มีการค้าขายกับต่างชาติและมีการผสมผสานวัฒนธรรมที่หลากหลาย',
    color: 'var(--color-thonburi)',
    heroImage: 'https://images.unsplash.com/photo-1577742186718-6c84c6001fa3?auto=format&fit=crop&q=80',
    videoEmbed: 'https://www.youtube.com/embed/XXXXX'
  },
  {
    id: 'rattanakosin',
    name: 'รัตนโกสินทร์',
    period: 'พ.ศ. 2325 - ปัจจุบัน',
    description: 'ยุคแห่งการสร้างบ้านแปงเมืองให้เป็น "กรุงเทพมหานคร" ศูนย์รวมความเจริญ สถาปัตยกรรม ศิลปกรรม และวัฒนธรรมที่สืบทอดและพัฒนามาจนถึงปัจจุบัน ผสมผสานความเป็นไทยกับความเป็นสากลได้อย่างลงตัว',
    color: 'var(--color-rattanakosin)',
    heroImage: 'https://images.unsplash.com/photo-1571295982821-2e63574c8100?auto=format&fit=crop&q=80',
    videoEmbed: 'https://www.youtube.com/embed/YYYYY'
  }
];

eras.forEach((era, idx) => {
  tsContent += \`  \${era.id}: {
    id: '\${era.id}',
    name: '\${era.name}',
    period: '\${era.period}',
    description: '\${era.description}',
    color: '\${era.color}',
    heroImage: '\${era.heroImage}',
    videoEmbed: '\${era.videoEmbed}',
    places: [
      {
        name: 'วัดมหาธาตุ / สถานที่สำคัญ',
        desc: 'แหล่งประวัติศาสตร์สำคัญที่คุณไม่ควรพลาด สัมผัสความงามที่แท้จริง',
        type: 'historical',
        mapIframe: '\${genericMap}'
      },\n\`;

  let foodList = foodNames[era.id];
  for (let i = 0; i < 10; i++) {
    tsContent += \`      {
        name: '\${foodList[i] || 'ร้านอร่อย ' + i}',
        desc: 'ร้านอาหารแนะนำระดับตำนาน รสชาติกลมกล่อม ต้องมาลองด้วยตัวเอง',
        type: 'food',
        image: '\${getImage(idx * 10 + i)}',
        mapIframe: '\${genericMap}'
      },\n\`;
  }
  tsContent += \`    ]\n  },\n\`;
});

tsContent += '};\n';

fs.writeFileSync('src/data/eras.ts', tsContent);
console.log('Successfully generated eras.ts with 10+ foods per era.');
