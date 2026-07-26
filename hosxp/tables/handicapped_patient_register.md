# `handicapped_patient_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_patient_register_id | int(11) | NO | PRI | 0 |  |  |
| hospcode | int(11) | YES |  | NULL |  |  |
| doctorcode | int(11) | YES |  | NULL |  |  |
| online_handicapped_patient_register_id | int(11) | YES |  | NULL |  |  |
| online_handicapped_patient_register_check | char(1) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| status_active | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_patient_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
