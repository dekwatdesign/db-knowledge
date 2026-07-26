# `hospital_owner_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_owner_type_id | int(11) | NO | PRI | 0 |  |  |
| hospital_owner_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospital_owner_type_name | hospital_owner_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_owner_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "hospital_owner_type_id": 1,
    "hospital_owner_type_name": "โรงพยาบาลรัฐบาล",
    "hos_guid": null
  },
  {
    "hospital_owner_type_id": 2,
    "hospital_owner_type_name": "โรงพยาบาลเอกชน",
    "hos_guid": null
  }
]
```
