# `ckup_medical_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_medical_service_id | int(11) | NO | PRI | 0 |  |  |
| nondrug_icode | varchar(10) | YES |  | NULL |  |  |
| ckup_med_serv_result | varchar(200) | YES |  | NULL |  |  |
| ckup_med_serv_note | varchar(200) | YES |  | NULL |  |  |
| ckup_prog_id | int(11) | YES | MUL | NULL |  |  |
| ckup_prog_detail_type_id | int(11) | YES | MUL | NULL |  |  |
| ckup_medical_visit_id | int(11) | YES | MUL | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(200) | YES |  | NULL |  |  |
| nondrug_group_icode | varchar(10) | YES |  | NULL |  |  |
| ckup_med_serv_result_date | date | YES |  | NULL |  |  |
| ckup_med_serv_items_code | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_medical_visit_id | ckup_medical_visit_id | no | 1 |
| ix_ckup_prog_detail_type_id | ckup_prog_detail_type_id | no | 1 |
| ix_ckup_prog_id | ckup_prog_id | no | 1 |
| PRIMARY | ckup_medical_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
