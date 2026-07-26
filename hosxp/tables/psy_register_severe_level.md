# `psy_register_severe_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_register_severe_level_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_severe_level_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_register_severe_level_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "psy_register_severe_level_id": 1,
    "psy_register_severe_level_name": "ดูแลตัวเองได้",
    "hos_guid": null
  },
  {
    "psy_register_severe_level_id": 2,
    "psy_register_severe_level_name": "ดูแลตัวเองได้บ้าง / ต้องมีผู้ช่วยเหลือบางส่วน",
    "hos_guid": null
  },
  {
    "psy_register_severe_level_id": 3,
    "psy_register_severe_level_name": "ไม่สามารถดูแลตัวเองได้ / ต้องมีผู้ช่วยเหลือทั้งหมด",
    "hos_guid": null
  },
  {
    "psy_register_severe_level_id": 4,
    "psy_register_severe_level_name": "อาการไม่คงที่ต้องเฝ้าระวัง",
    "hos_guid": null
  }
]
```
