# `operation_room_procedure`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_room_procedure_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| icdcode | varchar(9) | YES |  | NULL |  |  |
| operation_name | varchar(250) | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| begin_time | time | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| end_time | time | YES |  | NULL |  |  |
| type_procedure | int(11) | YES |  | NULL |  |  |
| doctor | varchar(10) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| operation_item_id | int(11) | YES |  | NULL |  |  |
| operation_item_name | varchar(250) | YES |  | NULL |  |  |
| operation_clinical_term_id | int(11) | YES |  | NULL |  |  |
| clinical_term_name | varchar(250) | YES |  | NULL |  |  |
| doctor_diagnosis | varchar(10) | YES |  | NULL |  |  |
| ref_or_detail_id | int(11) | YES |  | NULL |  |  |
| diag_ext_type_id | int(11) | YES |  | NULL |  |  |
| ext_code | varchar(10) | YES |  | NULL |  |  |
| incision_date | date | YES |  | NULL |  |  |
| incision_time | time | YES |  | NULL |  |  |
| closure_date | date | YES |  | NULL |  |  |
| closure_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | operation_room_procedure_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
