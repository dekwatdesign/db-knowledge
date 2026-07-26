# `sti_disease_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_disease_type_id | int(11) | NO | PRI | 0 |  |  |
| sti_disease_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sti_disease_type_name | sti_disease_type_name | yes | 1 |
| PRIMARY | sti_disease_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sti_disease_type_id": 1,
    "sti_disease_type_name": "เริม : ติดเชื้อครั้งแรก",
    "hos_guid": null
  },
  {
    "sti_disease_type_id": 2,
    "sti_disease_type_name": "เริม : เกิดโรคซ้ำ (Recurrent)",
    "hos_guid": null
  },
  {
    "sti_disease_type_id": 3,
    "sti_disease_type_name": "แผลซิฟิลิส*  (ซิฟิลิสระยะที่ 1, Primary syphilis)",
    "hos_guid": null
  },
  {
    "sti_disease_type_id": 4,
    "sti_disease_type_name": "ซิฟิลิส ระยะที่ 2",
    "hos_guid": null
  },
  {
    "sti_disease_type_id": 5,
    "sti_disease_type_name": "ซิฟิลิส ระยะแฝง (ติดเชื้อต่ำกว่า 2 ปี)",
    "hos_guid": null
  },
  {
    "sti_disease_type_id": 6,
    "sti_disease_type_name": "ซิฟิลิส ระยะแฝง (ติดเชื้อมากกว่า 2 ปี)",
    "hos_guid": null
  },
  {
    "sti_disease_type_id": 7,
    "sti_disease_type_name": "ซิฟิลิส ระยะแฝง (ไม่ทราบระยะเวลาติด)",
    "hos_guid": null
  },
  {
    "sti_disease_type_id": 8,
    "sti_disease_type_name": "แผลริมอ่อน *  (Chancroid)",
    "hos_guid": null
  }
]
```
