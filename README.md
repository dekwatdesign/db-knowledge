# DB Knowledge Generator (Windows Desktop App & CLI)

ระบบแปลงโครงสร้างฐานข้อมูล MySQL / MariaDB ให้เป็นเอกสาร Markdown สำหรับ LLM และ AI Agents พร้อมใช้งานทั้งในรูปแบบ **Windows Desktop App (Tauri v2 + React)** และ **Python CLI** โดยใช้คำสั่ง `SELECT` แบบ Read-only เท่านั้น ไม่แก้ไขข้อมูลหรือ schema ของฐานข้อมูล

---

## 🚀 ฟีเจอร์หลักของ Windows App

1. **Tech Stack & ดีไซน์ทันสมัย**:
   - พัฒนาด้วย **Tauri v2 + Rust Backend** (ประสิทธิภาพสูง ไบนารีขนาดเล็ก ปลอดภัย)
   - ฟอนต์ทางการภาษาไทย **LINE Seed Sans TH** ([seed.line.me](https://seed.line.me/index_th.html)) สวยงาม คมชัด อ่านง่าย
   - ส่วนติดต่อผู้ใช้สไตล์ **[Lucian UX/UI Prompt](https://github.com/Seokwoooo/lucian-uxui-prompt)** (Liquid glass button, Glow card, Spring animation, Dark/Light mode)
2. **รองรับหลาย Connection (Multi-Connection Selection)**:
   - เพิ่ม ลบ แก้ไข คัดลอก และทดสอบ Connection (MySQL / MariaDB) ได้ไม่จำกัด
   - สามารถ **เลือกหลาย Connection พร้อมกัน** ด้วย Checkbox เพื่อสั่ง Generate รวดเดียว
   - มีปุ่มทดสอบการเชื่อมต่อ (Ping latency, เวอร์ชั่น MySQL, จำนวนตาราง)
3. **เลือกปลายทางบันทึกไฟล์ได้อิสระ (Destination Folder Selector)**:
   - มีปุ่มเลือกโฟลเดอร์ผ่านหน้าต่าง Windows Native Folder Dialog
   - มีปุ่มเปิดโฟลเดอร์ใน Windows File Explorer ทันทีหลังสร้างเสร็จ
   - แต่ละฐานข้อมูลจะถูกแยกเก็บในโฟลเดอร์ย่อยตามชื่อฐานข้อมูลหรือชื่อที่กำหนด
4. **ความปลอดภัย & การ Mask ข้อมูลส่วนบุคคล (Thai PII Masking)**:
   - สกัดเฉพาะ Metadata และสุ่มตัวอย่าง (Sample Rows 5–10 แถว)
   - ฟิลด์ BLOB/Binary แสดงเฉพาะขนาด Byte ไม่ดึงข้อมูลไบนารีออกมา
   - มีตัวเลือกเปิด-ปิด **PII Masking**: เซ็นเซอร์เลขบัตรประชาชน (CID 13 หลัก), ชื่อ-นามสกุลผู้ป่วย/บุคลากรทางการแพทย์, และรูปภาพ
5. **AI Service กลางสำหรับวิเคราะห์บริบทฐานข้อมูล (`AI_CONTEXT.md`)**:
   - รองรับ **Ollama** (Local LLM), **OpenAI-compatible / Gateway**, **Anthropic Claude**, และ **Google Gemini**
   - มีตัวเลือกปิด AI เพื่อใช้ Metadata Fallback ล้วนๆ (ประหยัด Token และทำงานเร็วที่สุด)
6. **ตัวดูเอกสารในตัว (Built-in Markdown Viewer)**:
   - เปิดดูเนื้อหา `README.md`, `AI_CONTEXT.md`, `relationships.md`, และ `tables/*.md` ได้ทันทีในแอป
   - มีช่องค้นหารายชื่อตาราง และปุ่มคัดลอก Markdown ได้สะดวกรวดเร็ว

---

## 💻 วิธีเปิดใช้งาน Windows App

### วิธีที่ 1: รันโปรแกรมทันที (Portable / Standalone)
ดับเบิลคลิกไฟล์:
```
db-knowledge-app.exe
```
หรือรันผ่านแบตช์ไฟล์:
```powershell
.\run_app.bat
```

### วิธีที่ 2: ติดตั้งผ่าน Windows Installer Package
- ตัวติดตั้งแบบ NSIS: `src-tauri\target\release\bundle\nsis\db-knowledge-app_1.0.0_x64-setup.exe` (ขนาดเพียง 3.9 MB)
- ตัวติดตั้งแบบ MSI: `src-tauri\target\release\bundle\msi\db-knowledge-app_1.0.0_x64_en-US.msi` (ขนาด 5.6 MB)

### วิธีที่ 3: รันในโหมดพัฒนา (Development Mode with Hot-reload)
```powershell
.\run_dev.bat
```
หรือรันคำสั่ง:
```powershell
bun run dev
cargo tauri dev
```

---

## 🐍 การใช้งานแบบเดิมผ่าน Python CLI

หากต้องการรันแบบสคริปต์อัตโนมัติบนเซิร์ฟเวอร์หรือ CLI:

### 1. ติดตั้ง Dependencies
```powershell
cd D:\Projects\db-knowledge
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
```

### 2. กำหนดค่าใน `.env`
```dotenv
DB_HOST=192.168.10.213
DB_PORT=3306
DB_NAME=hdbms
DB_USER=scan
DB_PASSWORD=gotowin
OUTPUT_DIR=generated
SAMPLE_ROWS=8
SAMPLE_MAX_CHARS=1000

AI_API_TYPE=ollama
AI_BASE_URL=http://127.0.0.1:11434
AI_MODEL=qwen2.5-coder:7b
AI_ALLOW_REMOTE=false
```

### 3. รันสร้างเอกสาร
```powershell
python generate_context.py
```
หรือระบุไฟล์คอนฟิก:
```powershell
python generate_context.py --env-file .env
```

---

## 📂 โครงสร้างผลลัพธ์ในแต่ละโฟลเดอร์ฐานข้อมูล

เมื่อสร้างเสร็จ ในแต่ละโฟลเดอร์ย่อยจะประกอบด้วย:
- `README.md`: รายชื่อและสารบัญตารางทั้งหมด พร้อมคำอธิบาย
- `AI_CONTEXT.md`: สรุปภาพรวม วัตถุประสงค์ คีย์สำคัญ และแนวทางการคิวรีสำหรับ LLM Agent
- `relationships.md`: ตาราง Foreign Keys และความสัมพันธ์ระหว่างตาราง
- `tables/<table>.md`: คอลัมน์, ชนิดข้อมูล, Null, คีย์, Default, Index, Foreign Keys และตัวอย่าง Sample Rows (JSON)
- `SUMMARY.md`: (เมื่อเลือก generate หลายฐานข้อมูล) สรุปภาพรวมทุกฐานข้อมูลที่สร้างขึ้นในรอบนั้น

---

## 🛡️ มาตรการความปลอดภัย

1. **Read-only เท่านั้น**: แอปพลิเคชันไม่มีคำสั่ง `INSERT`, `UPDATE`, `DELETE`, `DROP` หรือ `ALTER` ใดๆ ทั้งสิ้น
2. **การปกป้องข้อมูลคนไข้และข้อมูลสุขภาพ (PDPA)**:
   - ข้อมูลโรงพยาบาล (เช่น HOSxP) ต้องเก็บ sample rows ไว้ในเครื่อง ห้ามส่งออกโดยไม่ได้รับอนุญาต
   - มีระบบ Thai PII Masking อัตโนมัติสำหรับฟิลด์ CID และชื่อบุคคล
3. **การส่งข้อมูลไป AI**: ส่งเฉพาะชื่อฐานข้อมูล ตาราง คอลัมน์ และ Foreign keys (ไม่มีการส่ง Sample rows ไปยัง API ภายนอก)
