# `nutri_consult_sub_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutri_consult_sub_type_id | int(11) | NO | PRI | 0 |  |  |
| nutri_consult_sub_type_name | varchar(100) | YES |  | NULL |  |  |
| nutri_consult_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refnutri_consult_type10 | nutri_consult_type_id | no | 1 |
| PRIMARY | nutri_consult_sub_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
