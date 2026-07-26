# `icd10_cross_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icd10_cross_check_id | int(11) | NO | PRI | 0 |  |  |
| code1 | varchar(20) | YES | MUL | NULL |  |  |
| code2 | varchar(20) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_code12 | code1 | yes | 1 |
| ix_code12 | code2 | yes | 2 |
| PRIMARY | icd10_cross_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
