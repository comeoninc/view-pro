# แอพพลิเคชั่น วิว-ดี(โปร)
# เฟรมเวิคแอพฯวิว ปรับปรุงรูปแบบการเผยแพร่.html

# สิ่งที่เพิ่มเข้ามากับแพคเกจ โปร
- เพิ่ม PWA ผสานเว็บไซต์ กับเบราเซอร์ เพื่อการใช้งานเว็บแอพที่สมบูรณ์
- เพิ่ม SW บริการฟังชั่นอัตโนมัติ ใช้ทำงานร่วมกับ PWA Manifest 
- เพิ่มฟังชั่น การผสานเว็บไซต์เข้ากับอุปกรณ์พกพา ทัชอย่างไม่สะดุด บนระบบแอนดรอยด์


แอพฯ ปรับรูปแบบโครงสร้างฐานรากอย่างง่าย เพื่อการเผยแพร่เนื้อหาในรูปแบบ " เว็บแอพ "

รองรับอุปกรณ์ " ระบบปฎิบัติการแอนดรอยด์ " ระบบปฏิบัติการ หรือแพลตฟอร์มอื่นๆ ยังไม่รองรับชุดคำสั่งนี้ ทำให้ไม่สามารถแสดงผลเนื้อหาบางส่วนของแอพฯได้

ชุดคำสั่ง typescript ขั้นตอนการทำงาน ใช้งาน CustomElement ทำหน้าที่กรอง และปรับปรุงเนื้อหาไฟล์ .html ที่รากของโดเมน การร้องขอ .html จะถูกเรียกผ่าน Element ทุกครั้ง เพื่อผ่านการปรับปรุงรูปแบบ .html ให้สามารถเผยแพร่ได้ตามรูปแบบที่ต้องการ.

C'mon inc.,ขอขอบคุณ

ผู้พัฒนาโครงการต้นแบบ -Angular -ionic -stencil -NativeScript
 
