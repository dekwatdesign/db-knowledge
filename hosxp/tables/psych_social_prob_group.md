# `psych_social_prob_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_social_prob_group_code | char(2) | NO | PRI |  |  |  |
| psych_social_prob_group_name | varchar(255) | YES |  | NULL |  |  |
| psych_social_prob_group_defin | text | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_social_prob_group_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psych_social_prob_group_code": "00",
    "psych_social_prob_group_name": "ไม่มีปัญหาทางสังคม (No Social Problem) หรือยังไม่พบปัญหาในวันที่เข้าเยี่ยมผู้ใช้บริการ",
    "psych_social_prob_group_defin": null,
    "active": null
  },
  {
    "psych_social_prob_group_code": "01",
    "psych_social_prob_group_name": "ปัญหาคู่สมรสและการครองเรือน",
    "psych_social_prob_group_defin": "คู่สมรสฝ่ายใดฝ่ายหนึ่งไม่ปฏิบัติตามบทบาทหน้าที่ความรับผิดชอบของตนเอง ทาให้เกิดภาระหรือปัญหาแก่อีกฝ่ายหนึ่งทั้งที่เจตนา หรือเกิดความเจ็บป่วย",
    "active": null
  },
  {
    "psych_social_prob_group_code": "02",
    "psych_social_prob_group_name": "ปัญหาระหว่างบิดา มารดา บุตร",
    "psych_social_prob_group_defin": "ปัญหาเรื่องการอบรมเลี้ยงดูบุตร และปัญหาสัมพันธภาพที่ทาให้เกิดความแตกแยก บาดหมางกัน ระหว่างบิดา มารดา บุตร",
    "active": null
  },
  {
    "psych_social_prob_group_code": "03",
    "psych_social_prob_group_name": "ปัญหาความแตกแยกในครอบครัว",
    "psych_social_prob_group_defin": "ปัญหาที่ทาให้สภาพของครอบครัวซึ่งหมายถึง บิดา มารดา บุตร เกิดการแยกกันอยู่ทั้งโดยยินยอมและไม่ยินยอม",
    "active": null
  },
  {
    "psych_social_prob_group_code": "04",
    "psych_social_prob_group_name": "ปัญหาความสัมพันธ์ระหว่างเครือญาติ",
    "psych_social_prob_group_defin": "ปัญหาความสัมพันธ์ที่เกิดขึ้นระหว่างพี่น้อง และวงศ์ญาติในครอบครัว แต่ไม่ใช่บิดา มารดา บุตร",
    "active": null
  },
  {
    "psych_social_prob_group_code": "05",
    "psych_social_prob_group_name": "ปัญหาความรัก",
    "psych_social_prob_group_defin": "ปัญหาที่เกิดจากความไม่สมหวังเรื่องความรัก เช่น ผิดหวัง / ขัดแย้งกับคนรัก / การสูญเสียพลัดพราก",
    "active": null
  },
  {
    "psych_social_prob_group_code": "06",
    "psych_social_prob_group_name": "ปัญหาทางเพศ",
    "psych_social_prob_group_defin": "ปัญหาเกี่ยวกับความผิดปกติหรือไม่เหมาะสมทางเพศ (ตัวบุคคล)",
    "active": null
  },
  {
    "psych_social_prob_group_code": "07",
    "psych_social_prob_group_name": "ปัญหาภาระในการดูแลผู้เจ็บป่วย / ผู้พิการ / ผู้สูงอายุในครอบครัว",
    "psych_social_prob_group_defin": "ปัญหาการเจ็บป่วยทางจิตที่เกิดจากการต้องรับภาระในการดูแลผู้เจ็บป่วย / ผู้พิการ / ผู้สูงอายุในครอบครัว",
    "active": null
  }
]
```
