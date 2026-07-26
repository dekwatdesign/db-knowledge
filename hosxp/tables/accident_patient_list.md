# `accident_patient_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| accident_patient_list_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| accident_list_id | int(11) | YES | MUL | NULL |  |  |
| accident_vehicle_list_id | int(11) | YES |  | NULL |  |  |
| accident_person_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ali | accident_list_id | no | 1 |
| PRIMARY | accident_patient_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
