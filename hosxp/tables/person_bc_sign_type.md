# `person_bc_sign_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bc_sign_type_id | int(11) | NO | PRI | 0 |  |  |
| person_bc_sign_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_bc_sign_type_name | person_bc_sign_type_name | yes | 1 |
| PRIMARY | person_bc_sign_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_bc_sign_type_id": 1,
    "person_bc_sign_type_name": "มีน้ำเหลืองหรือเลือดออกจากหัวนม",
    "hos_guid": null
  },
  {
    "person_bc_sign_type_id": 2,
    "person_bc_sign_type_name": "ขนาดของเต้านมแตกต่างกันอย่างผิดปกติ",
    "hos_guid": null
  },
  {
    "person_bc_sign_type_id": 3,
    "person_bc_sign_type_name": "มีอาการเจ็บที่เต้านม",
    "hos_guid": null
  },
  {
    "person_bc_sign_type_id": 4,
    "person_bc_sign_type_name": "บริเวณหัวนมถูกดึงรั้ง หรือมีสีผิดปกติ",
    "hos_guid": null
  },
  {
    "person_bc_sign_type_id": 5,
    "person_bc_sign_type_name": "ผิวหนังเต้านมมีรอยบุ๋ม/หรือผิวหนังแตกเป็นแผล",
    "hos_guid": null
  },
  {
    "person_bc_sign_type_id": 6,
    "person_bc_sign_type_name": "พบก้อนที่เต้านมเป็นไตผิดปกติ",
    "hos_guid": null
  },
  {
    "person_bc_sign_type_id": 7,
    "person_bc_sign_type_name": "เต้านมบวมแดงจากการอักเสบ",
    "hos_guid": null
  },
  {
    "person_bc_sign_type_id": 8,
    "person_bc_sign_type_name": "ไม่พบสิ่งผิดปกติจากการตรวจร่างกาย แต่พบจากการ U/S หรือ Mammogram",
    "hos_guid": null
  }
]
```
