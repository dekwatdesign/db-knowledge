# `patient_coc_visit_medication`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_coc_visit_medication_id | int(11) | NO | PRI | 0 |  |  |
| patient_coc_visit_id | int(11) | YES | MUL | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| qty | double(15,3) | YES |  | NULL |  |  |
| unit_price | double(15,3) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| medication_name | varchar(200) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vi | patient_coc_visit_id | no | 1 |
| PRIMARY | patient_coc_visit_medication_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
