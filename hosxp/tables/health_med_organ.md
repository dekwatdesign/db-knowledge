# `health_med_organ`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_organ_id | int(11) | NO | PRI | 0 |  |  |
| health_med_organ_name | varchar(150) | YES | UNI | NULL |  |  |
| health_med_organ_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_organ_name | health_med_organ_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_organ_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "health_med_organ_id": 1,
    "health_med_organ_name": "ศรีษะ",
    "health_med_organ_code": "100",
    "hos_guid": null
  },
  {
    "health_med_organ_id": 2,
    "health_med_organ_name": "ใบหน้า",
    "health_med_organ_code": "154",
    "hos_guid": null
  },
  {
    "health_med_organ_id": 3,
    "health_med_organ_name": "กระดูกขากรรไกรบน",
    "health_med_organ_code": "159",
    "hos_guid": null
  },
  {
    "health_med_organ_id": 4,
    "health_med_organ_name": "กระดูกขากรรไกรล่าง",
    "health_med_organ_code": "160",
    "hos_guid": null
  },
  {
    "health_med_organ_id": 5,
    "health_med_organ_name": "ข้อต่อขากรรไกร",
    "health_med_organ_code": "162",
    "hos_guid": null
  },
  {
    "health_med_organ_id": 6,
    "health_med_organ_name": "หนังตา",
    "health_med_organ_code": "163",
    "hos_guid": null
  },
  {
    "health_med_organ_id": 7,
    "health_med_organ_name": "ใบหู",
    "health_med_organ_code": "178",
    "hos_guid": null
  },
  {
    "health_med_organ_id": 8,
    "health_med_organ_name": "รูหู",
    "health_med_organ_code": "179",
    "hos_guid": null
  }
]
```
