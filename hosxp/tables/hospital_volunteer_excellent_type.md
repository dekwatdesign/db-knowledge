# `hospital_volunteer_excellent_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_volunteer_excellent_type_id | int(11) | NO | PRI | 0 |  |  |
| hospital_volunteer_excellent_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hospital_volunteer_excellent_type_name | hospital_volunteer_excellent_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_volunteer_excellent_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "hospital_volunteer_excellent_type_id": 1,
    "hospital_volunteer_excellent_type_name": "ระดับตำบล",
    "hos_guid": "{53052D32-E5D8-11DF-BBCF-F3CA1C2D0000}",
    "hospcode": null
  }
]
```
