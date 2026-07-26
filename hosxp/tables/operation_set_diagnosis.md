# `operation_set_diagnosis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_set_diagnosis_id | int(11) | NO | PRI | 0 |  |  |
| operation_set_id | int(11) | YES | MUL | NULL |  |  |
| icd10 | varchar(10) | YES |  | NULL |  |  |
| operation_icd10_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_set_id | operation_set_id | no | 1 |
| PRIMARY | operation_set_diagnosis_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
