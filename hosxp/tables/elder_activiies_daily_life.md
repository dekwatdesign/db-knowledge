# `elder_activiies_daily_life`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_activiies_daily_life_id | int(11) | NO | PRI | 0 |  |  |
| elder_activiies_daily_life_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_activiies_daily_life_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "elder_activiies_daily_life_id": 1,
    "elder_activiies_daily_life_name": "ช่วยตัวเองได้ดี",
    "hos_guid": null
  },
  {
    "elder_activiies_daily_life_id": 2,
    "elder_activiies_daily_life_name": "ช่วยตัวเองไม่ได้แต่มีความลำบากบ้าง",
    "hos_guid": null
  },
  {
    "elder_activiies_daily_life_id": 3,
    "elder_activiies_daily_life_name": "ต้องช่วยเหลือบ้าง(ติดบ้าน)",
    "hos_guid": null
  },
  {
    "elder_activiies_daily_life_id": 4,
    "elder_activiies_daily_life_name": "ต้องช่วยเหลืออย่างมาก(ติดบ้าน)",
    "hos_guid": null
  },
  {
    "elder_activiies_daily_life_id": 5,
    "elder_activiies_daily_life_name": "ช่วยตัวเองไม่ได้อย่างสิ้นเชิง(ติดเตียง)",
    "hos_guid": null
  }
]
```
