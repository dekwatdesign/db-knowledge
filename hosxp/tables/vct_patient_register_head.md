# `vct_patient_register_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vct_patient_register_head_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vct_patient_register_date | date | YES |  | NULL |  |  |
| vct_patient_register_time | time | YES |  | NULL |  |  |
| sti_patient_type_id | int(11) | YES |  | NULL |  |  |
| sti_patient_msm_type_id | int(11) | YES |  | NULL |  |  |
| sti_patient_hostess_type_id | int(11) | YES |  | NULL |  |  |
| vct_patient_register_doctor_code | varchar(10) | YES |  | NULL |  |  |
| sti_patient_register_status_type_id | int(11) | YES |  | NULL |  |  |
| sti_screen_transfer | char(1) | YES |  | NULL |  |  |
| sti_screen_transfer_organization_name | varchar(200) | YES |  | NULL |  |  |
| nap_id | varchar(20) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vct_patient_register_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
