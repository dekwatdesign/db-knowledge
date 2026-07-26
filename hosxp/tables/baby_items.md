# `baby_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| baby_code | int(11) | NO | PRI | 0 |  |  |
| baby_group | int(11) | YES |  | NULL |  |  |
| service_code | varchar(7) | YES |  | NULL |  |  |
| baby_name | varchar(200) | YES | MUL | NULL |  |  |
| vaccine_code | varchar(15) | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |
| export_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| baby_name | baby_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | baby_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "baby_code": 1,
    "baby_group": 1,
    "service_code": null,
    "baby_name": "ดูแลทารก ครั้งที่ 1",
    "vaccine_code": null,
    "display_order": null,
    "export_code": null,
    "hos_guid": null
  },
  {
    "baby_code": 2,
    "baby_group": 1,
    "service_code": null,
    "baby_name": "ดูแลทารก ครั้งที่ 2",
    "vaccine_code": null,
    "display_order": null,
    "export_code": null,
    "hos_guid": null
  },
  {
    "baby_code": 3,
    "baby_group": 1,
    "service_code": null,
    "baby_name": "ดูแลทารก ครั้งที่ 3",
    "vaccine_code": null,
    "display_order": null,
    "export_code": null,
    "hos_guid": null
  },
  {
    "baby_code": 4,
    "baby_group": 2,
    "service_code": null,
    "baby_name": "ให้ BCG ต่ำกว่า 1 ปี",
    "vaccine_code": null,
    "display_order": null,
    "export_code": null,
    "hos_guid": null
  },
  {
    "baby_code": 5,
    "baby_group": 2,
    "service_code": null,
    "baby_name": "ให้ BCG 1 ปี ขึ้นไป",
    "vaccine_code": null,
    "display_order": null,
    "export_code": null,
    "hos_guid": null
  },
  {
    "baby_code": 6,
    "baby_group": 3,
    "service_code": null,
    "baby_name": "ให้วัคซีน ตับอักเสบ บี เข็มที่ 1 ก่อน 7 วัน",
    "vaccine_code": null,
    "display_order": null,
    "export_code": null,
    "hos_guid": null
  },
  {
    "baby_code": 7,
    "baby_group": 3,
    "service_code": null,
    "baby_name": "ให้วัคซีน ตับอักเสบ บี เข็มที่ 1    7 วัน ขึ้นไป",
    "vaccine_code": null,
    "display_order": null,
    "export_code": null,
    "hos_guid": null
  },
  {
    "baby_code": 8,
    "baby_group": 3,
    "service_code": null,
    "baby_name": "ให้วัคซีน ตับอักเสบ บี เข็มที่ 2 ต่ำกว่า 1 ปี",
    "vaccine_code": null,
    "display_order": null,
    "export_code": null,
    "hos_guid": null
  }
]
```
