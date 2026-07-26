# `cgd_cscode`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cgd_cscode | varchar(15) | NO | PRI |  |  |  |
| name | varchar(500) | YES | MUL | NULL |  |  |
| unit_name | varchar(50) | YES |  | NULL |  |  |
| price | double(15,2) | YES |  | NULL |  |  |
| remark | varchar(1000) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_name | name | no | 1 |
| PRIMARY | cgd_cscode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cgd_cscode": "20700",
    "name": "สายให้อาหารผ่านระจมูกสู่กระเพาะอาหาร (Nasogastric tube) ระยะสั้น",
    "unit_name": "เส้นละ",
    "price": 15.0,
    "remark": "รายการค่าวัสดุสิ้นเปลืองทางการแพทย์ที่สามารถเบิกจ่ายได้ในกรณีที่สถานพยาบาลสั่งจ่ายให้ผู้ป่วยนอก เพื่อนำกลับไปใช้ที่บ้าน ตามหนังสือกรมบัญชีกลางด่วนที่สุด ที่ กค 0422.2/ว 118 ลว. 29 มี.ค.54"
  },
  {
    "cgd_cscode": "21101",
    "name": "เตียงสามัญ",
    "unit_name": "วัน",
    "price": 400.0,
    "remark": "เบิกได้ร่วมกับค่าอาหารในราคาไม่เกิน 400 บาท ตามหนังสือกรมบัญชีกลาง ด่วนที่สุด ที่ กค 0422.2/พิเศษ ว 2 ลว. 4 ธ.ค.56"
  },
  {
    "cgd_cscode": "21201",
    "name": "ห้องพิเศษ",
    "unit_name": "วัน",
    "price": 1000.0,
    "remark": "เบิกได้ร่วมกับค่าอาหารในราคาไม่เกิน 1,000 บาท ตามหนังสือกรมบัญชีกลาง ด่วนที่สุด ที่ กค 0422.2/พิเศษ ว 2 ลว. 4 ธ.ค.56"
  },
  {
    "cgd_cscode": "21301",
    "name": "เตียงสังเกตอาการ/ Ambulatory, one day treatment (รวมค่าการพยาบาล)",
    "unit_name": "ครั้ง/วัน",
    "price": 100.0,
    "remark": "- สำหรับผู้ป่วยนอกที่มาให้ยาเคมีบำบัด หัตถการที่ไม่จำเป็น ต้องนอนโรงพยาบาล แต่ต้องสังเกตอาการตั้งแต่ 2 ชั่วโมงขึ้นไป ตามหนังสือกรมบัญชีลกางด่วนที่สุด ที่ กค 0417/ว 177 ลว. 24 พ.ย.49"
  },
  {
    "cgd_cscode": "22101",
    "name": "Antibody identification - Tube method",
    "unit_name": "Test",
    "price": 240.0,
    "remark": "ตามหนังสือกรมบัญชีกลาง ที่ กค 0416.2/ว 393 ลว. 10 ต.ค.60 มีผลใช้บังคับสำหรับการรักษา ตั้งแต่วันที่ 1 ม.ค.61 เป็นต้นไป"
  },
  {
    "cgd_cscode": "22102",
    "name": "Antibody identification - Gel method",
    "unit_name": "Test",
    "price": 400.0,
    "remark": "ตามหนังสือกรมบัญชีกลาง ที่ กค 0416.2/ว 393 ลว. 10 ต.ค.60 มีผลใช้บังคับสำหรับการรักษา ตั้งแต่วันที่ 1 ม.ค.61 เป็นต้นไป"
  },
  {
    "cgd_cscode": "22103",
    "name": "Antibody screening (Indirect antiglobulin test) - Tube method",
    "unit_name": "Test",
    "price": 60.0,
    "remark": "ตามหนังสือกรมบัญชีกลาง ที่ กค 0416.2/ว 393 ลว. 10 ต.ค.60 มีผลใช้บังคับสำหรับการรักษา ตั้งแต่วันที่ 1 ม.ค.61 เป็นต้นไป"
  },
  {
    "cgd_cscode": "22104",
    "name": "Antibody screening, (Indirect antiglobulin test)  - Gel method",
    "unit_name": "Test",
    "price": 120.0,
    "remark": "ตามหนังสือกรมบัญชีกลาง ที่ กค 0416.2/ว 393 ลว. 10 ต.ค.60 มีผลใช้บังคับสำหรับการรักษา ตั้งแต่วันที่ 1 ม.ค.61 เป็นต้นไป"
  }
]
```
