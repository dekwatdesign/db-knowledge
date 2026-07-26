# `pe_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pe_temp_id | int(11) | NO | PRI | 0 |  |  |
| pe_name | varchar(150) | YES | MUL | NULL |  |  |
| pe_text | longtext | YES |  | NULL |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_pe_name | pe_name | no | 1 |
| PRIMARY | pe_temp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pe_temp_id": 3,
    "pe_name": "1",
    "pe_text": "[MASKED_FULLNAME]",
    "doctor": "187",
    "hos_guid": null
  },
  {
    "pe_temp_id": 1,
    "pe_name": "ซนไม่นิ่ง ดีขึ้น",
    "pe_text": "ซนไม่นิ่ง ดีขึ้น",
    "doctor": "187",
    "hos_guid": null
  },
  {
    "pe_temp_id": 2,
    "pe_name": "EEG ตรวจคลื่นไฟฟ้าสมอง",
    "pe_text": "ตรวจคลื่นสมอง",
    "doctor": "145",
    "hos_guid": null
  },
  {
    "pe_temp_id": 4,
    "pe_name": "psychi",
    "pe_text": "cc: jdskf;ldf\r\nPI : akldf sd;kljf\r\nPE : fjsdjfkl\r\nMSE",
    "doctor": "318",
    "hos_guid": null
  },
  {
    "pe_temp_id": 5,
    "pe_name": "learning problem",
    "pe_text": "ปัญหาการเรียน อ่านเขียนไม่คล่อง",
    "doctor": "318",
    "hos_guid": null
  },
  {
    "pe_temp_id": 6,
    "pe_name": "learning d/o",
    "pe_text": "cc: ปัญหาการเรียน อ่านเขียนไม่คล่อง\r\nPI : ปัญหาการเรียน อ่านเขียนไม่คล่อง\r\nPE : WNL\r\nMSE : Read & Write < ป.1",
    "doctor": "318",
    "hos_guid": null
  },
  {
    "pe_temp_id": 7,
    "pe_name": "aggressive",
    "pe_text": "cc: พฤติกรรมก้าวร้าว \r\nPI : 9เดือน พฤติกรรมก้าวร้าว\r\nPE : WNL\r\nMSE : fidget, mild irritable",
    "doctor": "318",
    "hos_guid": null
  },
  {
    "pe_temp_id": 8,
    "pe_name": "adhd",
    "pe_text": "cc: ซน อยู่ไม่นิ่ง 6 ปี\r\nPI :6 ปี ซน อยู่ไม่นิ่ง พูดเก่ง พูดแทรก \r\nทำอะไรนานๆไม่ได้ หุนหันพลันแล่น ใจร้อน \r\nว่อกแว่กง่าย ขี้ลืม\r\nPE : WNL\r\nMSE : DF 4/7  DB 3/5  ",
    "doctor": "318",
    "hos_guid": null
  }
]
```
