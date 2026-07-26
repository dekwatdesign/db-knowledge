# `village_water_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_water_type_id | int(11) | NO | PRI | 0 |  |  |
| village_water_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_water_type_name | village_water_type_name | yes | 1 |
| PRIMARY | village_water_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "village_water_type_id": 1,
    "village_water_type_name": "กรมอนามัย",
    "hos_guid": null
  },
  {
    "village_water_type_id": 2,
    "village_water_type_name": "กรมทรัพยากรธรณี",
    "hos_guid": null
  },
  {
    "village_water_type_id": 3,
    "village_water_type_name": "กรมโยธาธิการ",
    "hos_guid": null
  },
  {
    "village_water_type_id": 8,
    "village_water_type_name": "ธรรมชาติ",
    "hos_guid": null
  },
  {
    "village_water_type_id": 9,
    "village_water_type_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
