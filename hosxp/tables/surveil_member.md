# `surveil_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sv_number | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| code506 | int(11) | YES |  | NULL |  |  |
| addr | varchar(50) | YES |  | NULL |  |  |
| moo | char(2) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| organism | varchar(250) | YES |  | NULL |  |  |
| complication | varchar(250) | YES |  | NULL |  |  |
| ovstost | char(2) | YES |  | NULL |  |  |
| death_date | date | YES |  | NULL |  |  |
| pdx | varchar(9) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| ptstat | char(1) | YES |  | NULL |  |  |
| send_epidem | char(1) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| hospital | int(11) | YES |  | NULL |  |  |
| hserv | varchar(10) | YES |  | NULL |  |  |
| metropol | int(11) | YES |  | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| sv_guid | varchar(38) | YES | MUL | NULL |  |  |
| data_sync | char(1) | YES | MUL | NULL |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| school_class | varchar(20) | YES |  | NULL |  |  |
| school_name | varchar(50) | YES |  | NULL |  |  |
| intime | char(1) | YES |  | NULL |  |  |
| epi_group_code | char(2) | YES |  | NULL |  |  |
| house_lat | float | YES |  | NULL |  |  |
| house_long | float | YES |  | NULL |  |  |
| pat_addr | varchar(50) | YES |  | NULL |  |  |
| pat_moo | varchar(5) | YES |  | NULL |  |  |
| pat_road | varchar(50) | YES |  | NULL |  |  |
| pat_chwpart | varchar(2) | YES |  | NULL |  |  |
| pat_amppart | varchar(2) | YES |  | NULL |  |  |
| pat_tmbpart | varchar(2) | YES |  | NULL |  |  |
| pat_death | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| has_r507 | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| hospcode_e0 | int(11) | YES |  | NULL |  |  |
| hospcode_e1 | int(11) | YES |  | NULL |  |  |
| case_refer_out | char(1) | YES |  | NULL |  |  |
| dw_amp_approve | char(1) | YES |  | NULL |  |  |
| dw_amp_approve_staff | varchar(20) | YES |  | NULL |  |  |
| dw_amp_approve_date | date | YES |  | NULL |  |  |
| provis_nation_code | varchar(3) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| road | varchar(100) | YES |  | NULL |  |  |
| confirm_export | char(1) | YES |  | NULL |  |  |
| confirm_export_date | date | YES |  | NULL |  |  |
| send_notice | char(1) | YES |  | NULL |  |  |
| epidem_covid_cluster_type_id | int(11) | YES |  | NULL |  |  |
| cluster_latitude | float | YES |  | NULL |  |  |
| cluster_longitude | float | YES |  | NULL |  |  |
| epidem_covid_cluster_id | int(11) | YES |  | NULL |  |  |
| treated_hospital_code | varchar(9) | YES |  | NULL |  |  |
| isolate_chwpart | char(2) | YES |  | NULL |  |  |
| respirator_status | char(1) | YES |  | NULL |  |  |
| send_506_prd_status | char(1) | YES |  | NULL |  |  |
| send_506_uat_status | char(1) | YES |  | NULL |  |  |
| response_message_506 | text | YES |  | NULL |  |  |
| send_506_datetime | datetime | YES |  | NULL |  |  |
| cdeath | varchar(200) | YES |  | NULL |  |  |
| diagnosis_date | date | YES |  | NULL |  |  |
| work_place_name | varchar(250) | YES |  | NULL |  |  |
| work_place_type_id | int(11) | YES |  | NULL |  |  |
| work_place_chwpart | varchar(2) | YES |  | NULL |  |  |
| work_place_amppart | varchar(2) | YES |  | NULL |  |  |
| nationality_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_data_sync | data_sync | no | 1 |
| ix_last_update | last_update | no | 1 |
| ix_sv_guid | sv_guid | no | 1 |
| pdx | pdx | no | 1 |
| PRIMARY | sv_number | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
