# `ckup_ear_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_ear_head_id | int(11) | NO | PRI | 0 |  |  |
| ckup_ear_head_result | varchar(250) | YES |  | NULL |  |  |
| ckup_ear_head_note | text | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| ckup_medical_visit_id | int(11) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| ckup_prog_id | int(11) | YES | MUL | NULL |  |  |
| ckup_ear_head_left_result | char(1) | YES |  | NULL |  |  |
| ckup_ear_head_right_result | char(1) | YES |  | NULL |  |  |
| ckup_ear_abnormal_type_id | int(11) | YES | MUL | NULL |  |  |
| ckup_ear_abnor_left_type_id | int(11) | YES | MUL | NULL |  |  |
| ckup_ear_abnor_right_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_ear_abnormal_type_id | ckup_ear_abnormal_type_id | no | 1 |
| ix_ckup_ear_abnor_left_type_id | ckup_ear_abnor_left_type_id | no | 1 |
| ix_ckup_ear_abnor_right_type_id | ckup_ear_abnor_right_type_id | no | 1 |
| ix_ckup_medical_visit_id | ckup_medical_visit_id | no | 1 |
| ix_ckup_prog_id | ckup_prog_id | no | 1 |
| PRIMARY | ckup_ear_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
