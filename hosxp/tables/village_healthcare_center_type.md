# `village_healthcare_center_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_healthcare_center_type_id | int(11) | NO | PRI | 0 |  |  |
| village_healthcare_center_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_healthcare_center_type_name | village_healthcare_center_type_name | yes | 1 |
| PRIMARY | village_healthcare_center_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "village_healthcare_center_type_id": 1,
    "village_healthcare_center_type_name": "คลินิก",
    "hos_guid": null
  },
  {
    "village_healthcare_center_type_id": 2,
    "village_healthcare_center_type_name": "สถานพยาบาล",
    "hos_guid": null
  },
  {
    "village_healthcare_center_type_id": 3,
    "village_healthcare_center_type_name": "โรงพยาบาล",
    "hos_guid": null
  },
  {
    "village_healthcare_center_type_id": 4,
    "village_healthcare_center_type_name": "โพลีคลินิก",
    "hos_guid": null
  }
]
```
