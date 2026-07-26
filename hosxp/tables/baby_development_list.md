# `baby_development_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| min_month | int(11) | YES |  | NULL |  |  |
| max_month | int(11) | YES | MUL | NULL |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_max_month | max_month | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "min_month": 0,
    "max_month": 0,
    "name": "มองหน้า สบตา",
    "hos_guid": null
  },
  {
    "id": 2,
    "min_month": 0,
    "max_month": 0,
    "name": "ตอบสนองต่อเสียงพูด,ทำเสียงในคอ",
    "hos_guid": null
  },
  {
    "id": 3,
    "min_month": 1,
    "max_month": 2,
    "name": "สนใจและมองหาเสียง ทำเสียงอูอาโต้ตอบ",
    "hos_guid": null
  },
  {
    "id": 4,
    "min_month": 1,
    "max_month": 2,
    "name": "มองตามสิ่งที่ เคลื่อนไหว",
    "hos_guid": null
  },
  {
    "id": 5,
    "min_month": 1,
    "max_month": 2,
    "name": "ชันคอในท่าคว่ำ",
    "hos_guid": null
  },
  {
    "id": 6,
    "min_month": 3,
    "max_month": 4,
    "name": "หันหาเสียง",
    "hos_guid": null
  },
  {
    "id": 7,
    "min_month": 3,
    "max_month": 4,
    "name": "หัวเราะได้",
    "hos_guid": null
  },
  {
    "id": 8,
    "min_month": 3,
    "max_month": 4,
    "name": "ส่งเสียงอ้อแอ้โต้ตอบ",
    "hos_guid": null
  }
]
```
