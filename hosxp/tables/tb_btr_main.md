# `tb_btr_main`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| btr_id | varchar(20) | NO | PRI |  |  |  |
| vn | varchar(15) | YES | MUL | NULL |  |  |
| an | varchar(10) | YES | MUL | NULL |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| visit_type | varchar(5) | YES |  | NULL |  |  |
| department | varchar(5) | YES |  | NULL |  |  |
| department_name | varchar(100) | YES |  | NULL |  |  |
| bi_gr | varchar(5) | YES |  | NULL |  |  |
| rh | varchar(5) | YES |  | NULL |  |  |
| donor_no | varchar(50) | YES | MUL | NULL |  |  |
| donor_bi_gr | varchar(5) | YES |  | NULL |  |  |
| donor_rh | varchar(5) | YES |  | NULL |  |  |
| transfusion_start_date | date | YES |  | NULL |  |  |
| transfusion_start_time | time | YES |  | NULL |  |  |
| symptom_start_date | date | YES |  | NULL |  |  |
| symptom_start_time | time | YES |  | NULL |  |  |
| temperature_before_transfusion | double(11,2) | YES |  | NULL |  |  |
| temperature_after_transfusion | double(11,2) | YES |  | NULL |  |  |
| transfusion_blood_volume | double(11,2) | YES |  | NULL |  |  |
| btr_note | varchar(255) | YES |  | NULL |  |  |
| lab_receive_status | char(2) | YES |  | NULL |  |  |
| lab_receive_user | varchar(50) | YES |  | NULL |  |  |
| lab_receive_datetime | datetime | YES |  | NULL |  |  |
| lab_cross_matching_status | char(2) | YES |  | NULL |  |  |
| lab_cross_matching_user | varchar(50) | YES |  | NULL |  |  |
| lab_cross_matching_datetime | datetime | YES |  | NULL |  |  |
| btr_user_log | varchar(50) | YES |  | NULL |  |  |
| btr_user_datetime | datetime | YES |  | NULL |  |  |
| btr_edit_user_log | varchar(50) | YES |  | NULL |  |  |
| btr_edit_user_datetime | datetime | YES |  | NULL |  |  |
| btr_delete_user_log | varchar(50) | YES |  | NULL |  |  |
| btr_delete_user_datetime | datetime | YES |  | NULL |  |  |
| btr_status | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| donor_no | donor_no | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | btr_id | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
