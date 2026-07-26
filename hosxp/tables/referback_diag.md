# `referback_diag`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rec_no | int(11) | NO | PRI | 0 |  |  |
| refer_no | varchar(20) | NO | PRI |  |  |  |
| icd10 | varchar(7) | YES | MUL | NULL |  |  |
| diagtype_id | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icd10 | icd10 | no | 1 |
| PRIMARY | rec_no | yes | 1 |
| PRIMARY | refer_no | yes | 2 |
| refer_no | refer_no | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
