# `doctor_medication_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_code | varchar(15) | NO | PRI |  |  |  |
| icode | varchar(7) | NO | PRI |  |  |  |
| qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_icode | doctor_code | no | 1 |
| PRIMARY | doctor_code | yes | 1 |
| PRIMARY | icode | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
