# `elder_get_information`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_get_information_id | int(11) | NO | PRI | 0 |  |  |
| elder_get_information_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_get_information_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "elder_get_information_id": 1,
    "elder_get_information_name": "หอกระจายข่าว",
    "hos_guid": null
  },
  {
    "elder_get_information_id": 2,
    "elder_get_information_name": "วิทยุ",
    "hos_guid": null
  },
  {
    "elder_get_information_id": 3,
    "elder_get_information_name": "โทรทัศน์",
    "hos_guid": null
  },
  {
    "elder_get_information_id": 4,
    "elder_get_information_name": "หนังสือพิมพ์/นิตยสาร",
    "hos_guid": null
  },
  {
    "elder_get_information_id": 5,
    "elder_get_information_name": "แผ่นพับ/ใบปลิว",
    "hos_guid": null
  },
  {
    "elder_get_information_id": 6,
    "elder_get_information_name": "ป้ายประกาศ/โปสเตอร์",
    "hos_guid": null
  },
  {
    "elder_get_information_id": 7,
    "elder_get_information_name": "คอมพิวเตอร์/internet",
    "hos_guid": null
  },
  {
    "elder_get_information_id": 8,
    "elder_get_information_name": "ผู้นำชุมชน/ญาติ/เพื่อน",
    "hos_guid": null
  }
]
```
