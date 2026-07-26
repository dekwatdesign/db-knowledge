# `infant_fluid_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| infant_fluid_type_id | int(11) | NO | PRI | 0 |  |  |
| infant_fluid_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_infant_fluid_type_name | infant_fluid_type_name | yes | 1 |
| PRIMARY | infant_fluid_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "infant_fluid_type_id": 1,
    "infant_fluid_type_name": "ไม่เห็นน้ำ",
    "hos_guid": null
  },
  {
    "infant_fluid_type_id": 2,
    "infant_fluid_type_name": "Clear",
    "hos_guid": null
  },
  {
    "infant_fluid_type_id": 3,
    "infant_fluid_type_name": "Mild mec.",
    "hos_guid": null
  },
  {
    "infant_fluid_type_id": 4,
    "infant_fluid_type_name": "Moderate mec.",
    "hos_guid": null
  },
  {
    "infant_fluid_type_id": 5,
    "infant_fluid_type_name": "Thick mec.",
    "hos_guid": null
  }
]
```
