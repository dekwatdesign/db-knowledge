# `thalassaemia_location_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| thalassaemia_location_type_id | int(11) | NO | PRI | 0 |  |  |
| thalassaemia_location_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_thalassaemia_location_type_name | thalassaemia_location_type_name | yes | 1 |
| PRIMARY | thalassaemia_location_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "thalassaemia_location_type_id": 1,
    "thalassaemia_location_type_name": "ที่นี่",
    "hos_guid": null
  },
  {
    "thalassaemia_location_type_id": 2,
    "thalassaemia_location_type_name": "ที่อื่น",
    "hos_guid": null
  }
]
```
