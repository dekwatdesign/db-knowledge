# `physic_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_physic_type_name | physic_type_name | yes | 1 |
| PRIMARY | physic_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "physic_type_id": 1,
    "physic_type_name": "ระบบกล้ามเนื้อกระดูกและข้อ",
    "hos_guid": null
  },
  {
    "physic_type_id": 2,
    "physic_type_name": "ระบบประสาท(เด็ก)",
    "hos_guid": null
  },
  {
    "physic_type_id": 3,
    "physic_type_name": "ระบบประสาท(ผู้ใหญ่)",
    "hos_guid": null
  },
  {
    "physic_type_id": 4,
    "physic_type_name": "ระบบทางเดินหายใจ",
    "hos_guid": null
  },
  {
    "physic_type_id": 5,
    "physic_type_name": "สุตินารีเวช",
    "hos_guid": null
  },
  {
    "physic_type_id": 6,
    "physic_type_name": "ผู้สูงอายุ",
    "hos_guid": null
  },
  {
    "physic_type_id": 7,
    "physic_type_name": "กระตุ้นพัฒนาการ",
    "hos_guid": null
  }
]
```
