# `operation_blood`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_blood_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| blood_id | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| rh_id | int(11) | YES |  | NULL |  |  |
| blood_type_id | int(11) | YES |  | NULL |  |  |
| unit_cc | int(11) | YES |  | NULL |  |  |
| note | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| operation_blood_date | date | YES |  | NULL |  |  |
| operation_blood_time | time | YES |  | NULL |  |  |
| operation_blood_staff | varchar(50) | YES |  | NULL |  |  |
| operation_blood_entry_datetime | datetime | YES |  | NULL |  |  |
| operation_blood_update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| operation_id | operation_id | no | 1 |
| PRIMARY | operation_blood_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
