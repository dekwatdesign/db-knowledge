# `ckup_medical_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_medical_visit_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| ckup_medical_visit_price | double(13,3) | YES |  | NULL |  |  |
| ckup_medical_visit_date | datetime | YES |  | NULL |  |  |
| ckup_medical_visit_program | char(1) | YES |  | NULL |  |  |
| ckup_prog_id | int(11) | YES | MUL | NULL |  |  |
| ckup_medical_icode | varchar(10) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_prog_id | ckup_prog_id | no | 1 |
| PRIMARY | ckup_medical_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
