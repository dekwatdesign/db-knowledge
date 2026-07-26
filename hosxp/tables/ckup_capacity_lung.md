# `ckup_capacity_lung`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_capacity_lung_id | int(11) | NO | PRI | 0 |  |  |
| ckup_capacity_lung_fvc | double(13,3) | YES |  | NULL |  |  |
| ckup_capacity_lung_percent | double(13,3) | YES |  | NULL |  |  |
| ckup_capacity_lung_result | char(1) | YES |  | NULL |  |  |
| ckup_capacity_lung_note | varchar(255) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| ckup_medical_visit_id | int(11) | YES | MUL | NULL |  |  |
| ckup_prog_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| ckup_result_normal | char(1) | YES |  | NULL |  |  |
| ckup_result_restriction | char(1) | YES |  | NULL |  |  |
| ckup_result_restriction_list | varchar(20) | YES |  | NULL |  |  |
| ckup_result_obstruction | char(1) | YES |  | NULL |  |  |
| ckup_result_obst_list | varchar(20) | YES |  | NULL |  |  |
| ckup_result_mixed | char(1) | YES |  | NULL |  |  |
| ckup_recom_doctor | char(1) | YES |  | NULL |  |  |
| ckup_recom_other | char(1) | YES |  | NULL |  |  |
| ckup_recom_other_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_medical_visit_id | ckup_medical_visit_id | no | 1 |
| ix_ckup_prog_id | ckup_prog_id | no | 1 |
| PRIMARY | ckup_capacity_lung_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
