# `infowork_cor_com`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| COR_COM_ID | int | NO | PRI | NULL | auto_increment |  |
| COR_COM_NAME | varchar(600) | YES |  | NULL |  |  |
| COR_COM_DETAIL | varchar(600) | YES |  | NULL |  |  |
| ACTIVE | enum('True','Fales') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | COR_COM_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "COR_COM_ID": 1,
    "COR_COM_NAME": "การมุ่งผลสัมฤทธิ์ (Achievement Motivation Achievement Motivation)",
    "COR_COM_DETAIL": "ความมุ่งที่จะปฏิบัติหน้าที่ราชการให้ดีหรือให้เกินมาตรฐานที่มีอยู่ การสร้างพัฒนาผลงานหรือกระบวนการปฏิบัติงานตามเป้าหมายที่ยาก และท้าทาย ชนิดที่อาจไม่เคยมีผู้ใดสามารถกระทําให้มาก่อน",
    "ACTIVE": "True",
    "updated_at": "2020-09-27 17:04:17",
    "created_at": "2020-09-27 16:57:22"
  },
  {
    "COR_COM_ID": 2,
    "COR_COM_NAME": "บริการที่ดี (Service Mind)",
    "COR_COM_DETAIL": "ความตั้งใจและความพยายามในการให้บริการต่อประชาชน ข้าราชการ หรือหน่วยงานอื่น ๆ ที่เกี่ยวข้อง (ผู้มาขอรับบริการจากงานในหน้าที่ ราชการของตน) ที่ตนเองสามารถจะให้บริการได้ เป็นการให้บริการใน หลายรูปแบบ จากจิตสํานึกของผู้ให้ บริการและการเป็นข้าราชการที่ดี",
    "ACTIVE": "True",
    "updated_at": "2020-09-27 17:04:03",
    "created_at": "2020-09-27 17:04:03"
  },
  {
    "COR_COM_ID": 3,
    "COR_COM_NAME": "การสั่งสมความเชี่ยวชาญในงานอาชีพ (Expertise)",
    "COR_COM_DETAIL": "ความสนใจใฝ่รู้ สั่งสมความรู้ ความสามารถของตนในการปฏิบัติหน้าที่ราชการด้วยการศึกษาค้นคว้าและพัฒนาตนเองอย่างต่อเนื่องจนสามารถประยุกต์ใชความรู้เชิงวิชาการ และเทคโนโลยีต่าง ๆ เข้ากับการปฏิบัติราชการให้เกิดผลสมฤทธิ์",
    "ACTIVE": "True",
    "updated_at": "2020-09-27 17:07:51",
    "created_at": "2020-09-27 17:07:51"
  },
  {
    "COR_COM_ID": 4,
    "COR_COM_NAME": "การยึดมั่นในความถูกต้องชอบธรรม และจริยธรรม (Integrity)",
    "COR_COM_DETAIL": "การดํารงตนและประพฤติปฏิบัติอย่างถูกต้องเหมาะสมทั้งตามกฎหมาย คุณธรรม จรรยาบรรณแห่งวิชาชีพและจรรยาบรรณบุคลากร มหาวิทยาลัยเชียงใหม่",
    "ACTIVE": "True",
    "updated_at": "2020-09-27 17:09:23",
    "created_at": "2020-09-27 17:09:23"
  },
  {
    "COR_COM_ID": 5,
    "COR_COM_NAME": "การทํางานเป็นทีม (Teamwork)",
    "COR_COM_DETAIL": "ความตั้งใจที่จะทํางานร่วมกับผู้อื่นเป็นส่วนหนึ่งของทีมงาน หน่วยงานหรือสถาบัน รวมทั้งความสามารถในการสร้างและ รักษาสัมพันธ์ภาพกับสมาชิกในทีม",
    "ACTIVE": "True",
    "updated_at": "2020-09-27 17:10:24",
    "created_at": "2020-09-27 17:10:24"
  }
]
```
