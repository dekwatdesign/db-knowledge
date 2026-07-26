# `drugitems_ned_reason`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_ned_reason_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| doctor_reason | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_icode | icode | no | 1 |
| PRIMARY | drugitems_ned_reason_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drugitems_ned_reason_id": 1,
    "icode": "1000099",
    "doctor_reason": "เกิด stigma ผู้ป่วยไม่ร่วมมือในการใช้ยา",
    "hos_guid": null
  },
  {
    "drugitems_ned_reason_id": 2,
    "icode": "1000015",
    "doctor_reason": "ไม่ตอบสนองต่อการใช้ยาในบัญชียาหลักแห่งชาติ",
    "hos_guid": null
  },
  {
    "drugitems_ned_reason_id": 3,
    "icode": "1000015",
    "doctor_reason": "แพ้ยาหรือเกิดผลข้างเคียงที่รบกวนคุณภาพชีวิตจากยาในบัญชียาหลักแห่งชาติ",
    "hos_guid": null
  },
  {
    "drugitems_ned_reason_id": 4,
    "icode": "1000015",
    "doctor_reason": "มีโอกาสจะเกิดผลข้างเคียงได้มากถ้าใช้ยาในกลุ่มอื่นหรือมีปัญหาเรื่อง drug interaction",
    "hos_guid": null
  },
  {
    "drugitems_ned_reason_id": 5,
    "icode": "1000015",
    "doctor_reason": "มีโรคร่วมหรือภาวะการเจ็บป่วยที่เป็นข้อห้ามใช้ยาในบัญชียาหลักแห่งชาติ",
    "hos_guid": null
  },
  {
    "drugitems_ned_reason_id": 6,
    "icode": "1000014",
    "doctor_reason": "ไม่ตอบสนองต่อการใช้ยาในบัญชียาหลักแห่งชาติ",
    "hos_guid": null
  },
  {
    "drugitems_ned_reason_id": 7,
    "icode": "1000014",
    "doctor_reason": "แพ้ยาหรือเกิดผลข้างเคียงที่รบกวนคุณภาพชีวิตจากยาในบัญชียาหลักแห่งชาติ",
    "hos_guid": null
  },
  {
    "drugitems_ned_reason_id": 8,
    "icode": "1000014",
    "doctor_reason": "มีโอกาสที่จะเกิดผลข้างเคียงได้มากถ้าใช้ยาในกลุ่มอื่นหรือมีปัญหาเรื่อง drug interaction",
    "hos_guid": null
  }
]
```
