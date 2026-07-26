# `ckup_out_lab_xray`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_out_lab_xray_id | int(11) | NO | PRI | 0 |  |  |
| ckup_out_lab_xray_name | varchar(255) | YES |  | NULL |  |  |
| ckup_out_lab_xray_result | varchar(255) | YES |  | NULL |  |  |
| ckup_out_lab_xray_date | date | YES |  | NULL |  |  |
| ckup_out_lab_xray_note | varchar(255) | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| ckup_medical_visit_id | int(11) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_medical_visit_id | ckup_medical_visit_id | no | 1 |
| PRIMARY | ckup_out_lab_xray_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
