# `patient_condition`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_condition_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| patient_condition_type_id | int(11) | YES |  | NULL |  |  |
| condition_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| PRIMARY | patient_condition_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
