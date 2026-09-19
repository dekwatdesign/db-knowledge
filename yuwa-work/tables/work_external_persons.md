# `work_external_persons`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| full_name | varchar(500) | NO | MUL | NULL |  | ชื่อ-นามสกุล บุคคลภายนอก |
| phone | varchar(50) | YES |  | NULL |  | เบอร์โทรศัพท์ |
| email | varchar(255) | YES |  | NULL |  | อีเมล |
| organization | varchar(500) | YES |  | NULL |  | หน่วยงาน / องค์กร ที่สังกัด |
| note | text | YES |  | NULL |  | หมายเหตุ |
| created_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_full_name | full_name | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "full_name": "[MASKED_FULLNAME]",
    "phone": null,
    "email": null,
    "organization": null,
    "note": null,
    "created_at": "2026-03-23 11:08:27",
    "updated_at": "2026-03-23 11:08:27"
  },
  {
    "id": 2,
    "full_name": "[MASKED_FULLNAME]",
    "phone": null,
    "email": null,
    "organization": null,
    "note": null,
    "created_at": "2026-03-23 11:11:14",
    "updated_at": "2026-03-23 11:11:14"
  },
  {
    "id": 3,
    "full_name": "[MASKED_FULLNAME]",
    "phone": null,
    "email": null,
    "organization": null,
    "note": null,
    "created_at": "2026-03-23 11:11:14",
    "updated_at": "2026-03-23 11:11:14"
  },
  {
    "id": 4,
    "full_name": "[MASKED_FULLNAME]",
    "phone": null,
    "email": null,
    "organization": null,
    "note": null,
    "created_at": "2026-03-23 11:11:14",
    "updated_at": "2026-03-23 11:11:14"
  },
  {
    "id": 5,
    "full_name": "[MASKED_FULLNAME]",
    "phone": null,
    "email": null,
    "organization": null,
    "note": null,
    "created_at": "2026-03-23 11:11:14",
    "updated_at": "2026-03-23 11:11:14"
  },
  {
    "id": 6,
    "full_name": "[MASKED_FULLNAME]",
    "phone": null,
    "email": null,
    "organization": null,
    "note": null,
    "created_at": "2026-03-23 11:12:26",
    "updated_at": "2026-03-23 11:12:26"
  },
  {
    "id": 7,
    "full_name": "[MASKED_FULLNAME]",
    "phone": null,
    "email": null,
    "organization": null,
    "note": null,
    "created_at": "2026-03-23 11:12:26",
    "updated_at": "2026-03-23 11:12:26"
  },
  {
    "id": 8,
    "full_name": "[MASKED_FULLNAME]",
    "phone": null,
    "email": null,
    "organization": null,
    "note": null,
    "created_at": "2026-03-23 14:25:39",
    "updated_at": "2026-03-23 14:25:39"
  }
]
```
