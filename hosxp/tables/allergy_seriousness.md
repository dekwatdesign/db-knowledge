# `allergy_seriousness`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| seriousness_id | int(11) | NO | PRI | 0 |  |  |
| seiousness_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_seiousness_name | seiousness_name | yes | 1 |
| PRIMARY | seriousness_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "seriousness_id": 1,
    "seiousness_name": "ไม่ร้ายแรง",
    "hos_guid": null
  },
  {
    "seriousness_id": 2,
    "seiousness_name": "ร้ายแรง - เสียชีวิต",
    "hos_guid": null
  },
  {
    "seriousness_id": 3,
    "seiousness_name": "ร้ายแรง - อันตรายถึงชีวิต",
    "hos_guid": null
  },
  {
    "seriousness_id": 4,
    "seiousness_name": "ร้ายแรง - ต้องเข้ารับการรักษาในโรงพยาบาล",
    "hos_guid": null
  }
]
```
