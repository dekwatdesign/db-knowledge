# `psychia_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychia_type_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychia_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psychia_type_id": 1,
    "name": "โรคจิต",
    "hos_guid": null
  },
  {
    "psychia_type_id": 2,
    "name": "โรคจิตเภท",
    "hos_guid": null
  },
  {
    "psychia_type_id": 3,
    "name": "โรควิตกกังวล",
    "hos_guid": null
  },
  {
    "psychia_type_id": 4,
    "name": "โรคซึมเศร้า",
    "hos_guid": null
  },
  {
    "psychia_type_id": 5,
    "name": "ปัญญาอ่อน",
    "hos_guid": null
  },
  {
    "psychia_type_id": 6,
    "name": "ลมชัก",
    "hos_guid": null
  },
  {
    "psychia_type_id": 7,
    "name": "ผู้ติดยาและสารเสพติด",
    "hos_guid": null
  },
  {
    "psychia_type_id": 8,
    "name": "ปัญหาสุขภาพจิดอื่นๆ",
    "hos_guid": null
  }
]
```
