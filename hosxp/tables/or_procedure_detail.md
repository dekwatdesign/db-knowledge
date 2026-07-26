# `or_procedure_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| or_procedure_detail_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| or_procedure_detail_text | text | YES |  | NULL |  |  |
| doctor | varchar(20) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| type_procedure | varchar(50) | YES |  | NULL |  |  |
| doctor_diagnosis | varchar(20) | YES |  | NULL |  |  |
| or_procedure_begin_date | date | YES |  | NULL |  |  |
| or_procedure_begin_time | time | YES |  | NULL |  |  |
| or_procedure_end_date | date | YES |  | NULL |  |  |
| or_procedure_end_time | time | YES |  | NULL |  |  |
| or_procedure_doctor | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | or_procedure_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
