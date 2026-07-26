# `accident_place_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| accident_place_type_id | int(11) | NO | PRI | 0 |  |  |
| accident_place_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| export_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_accident_place_type_name | accident_place_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | accident_place_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "accident_place_type_id": 1,
    "accident_place_type_name": "ที่บ้าน หรืออาคารที่พัก",
    "hos_guid": null,
    "export_code": null
  },
  {
    "accident_place_type_id": 2,
    "accident_place_type_name": "ในสถานที่ทำงาน ยกเว้นโรงงานหรือก่อสร้าง",
    "hos_guid": null,
    "export_code": null
  },
  {
    "accident_place_type_id": 3,
    "accident_place_type_name": "ในโรงงานอุตสาหกรรม หรือบริเวณก่อสร้าง",
    "hos_guid": null,
    "export_code": null
  },
  {
    "accident_place_type_id": 4,
    "accident_place_type_name": "ภายในอาคารอื่นๆ",
    "hos_guid": null,
    "export_code": null
  },
  {
    "accident_place_type_id": 5,
    "accident_place_type_name": "ในสถานที่สาธารณะ",
    "hos_guid": null,
    "export_code": null
  },
  {
    "accident_place_type_id": 6,
    "accident_place_type_name": "ในชุมชนและไร่นา",
    "hos_guid": null,
    "export_code": null
  },
  {
    "accident_place_type_id": 7,
    "accident_place_type_name": "บนถนนสายหลัก",
    "hos_guid": null,
    "export_code": null
  },
  {
    "accident_place_type_id": 8,
    "accident_place_type_name": "บนถนนสายรอง",
    "hos_guid": null,
    "export_code": null
  }
]
```
