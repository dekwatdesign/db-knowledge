# `nutri_consult_deny`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutri_consult_deny_id | int(11) | NO | PRI | 0 |  |  |
| nutri_consult_deny_note | varchar(100) | YES |  | NULL |  |  |
| nutri_consult_deny_date | date | YES |  | NULL |  |  |
| nutri_consult_deny_time | time | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| nutri_consult_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdoctor35 | doctor_code | no | 1 |
| ix_Refnutri_consult27 | nutri_consult_id | no | 1 |
| PRIMARY | nutri_consult_deny_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
