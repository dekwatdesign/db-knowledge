# `patient_cancer_order_3dcrt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_order_3dcrt_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(20) | YES |  | NULL |  |  |
| hn | varchar(20) | YES |  | NULL |  |  |
| ct_sim_oapp_status | varchar(1) | YES |  | NULL |  |  |
| iv_contrust_status | varchar(1) | YES |  | NULL |  |  |
| oral_contrust_status | varchar(1) | YES |  | NULL |  |  |
| bun_cr_status | varchar(1) | YES |  | NULL |  |  |
| no_food_status | varchar(1) | YES |  | NULL |  |  |
| no_contrust_status | varchar(1) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| order_datetime | datetime | YES |  | NULL |  |  |
| receive_staff_code | varchar(15) | YES |  | NULL |  |  |
| receive_datetime | datetime | YES |  | NULL |  |  |
| action_staff_code | varchar(10) | YES |  | NULL |  |  |
| action_time | time | YES |  | NULL |  |  |
| patient_cancer_order_3dcrt_status_id | int(11) | YES |  | NULL |  |  |
| order_detail | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_order_3dcrt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
