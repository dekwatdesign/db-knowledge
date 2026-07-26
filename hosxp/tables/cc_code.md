# `cc_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cc_code_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(10) | YES | MUL | NULL |  |  |
| name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_doctor_code_name | doctor_code | yes | 1 |
| ix_doctor_code_name | name | yes | 2 |
| PRIMARY | cc_code_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
