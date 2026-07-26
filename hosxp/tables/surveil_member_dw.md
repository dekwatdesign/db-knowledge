# `surveil_member_dw`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sv_guid | varchar(38) | NO | PRI |  |  |  |
| sv_number | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| code506 | char(2) | YES |  | NULL |  |  |
| addr | varchar(25) | YES |  | NULL |  |  |
| moo | char(2) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| organism | varchar(250) | YES |  | NULL |  |  |
| complication | varchar(250) | YES |  | NULL |  |  |
| ovstost | char(2) | YES |  | NULL |  |  |
| death_date | date | YES |  | NULL |  |  |
| pdx | varchar(6) | YES | MUL | NULL |  |  |
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
| hospcode | varchar(9) | YES | MUL | NULL |  |  |
| hn_guid | varchar(38) | YES | MUL | NULL |  |  |
| vn_guid | varchar(38) | YES | MUL | NULL |  |  |
| data_sync | char(1) | YES |  | NULL |  |  |
| sv_senddatetime | datetime | YES |  | NULL |  |  |
| surveil_process_status_id | int(11) | YES |  | NULL |  |  |
| occupation_guid | varchar(38) | YES |  | NULL |  |  |
| patient_name | varchar(200) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| age_y | int(11) | YES |  | NULL |  |  |
| age_m | int(11) | YES |  | NULL |  |  |
| age_d | int(11) | YES |  | NULL |  |  |
| marrystatus | char(1) | YES |  | NULL |  |  |
| occupation_506 | varchar(3) | YES |  | NULL |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| school_class | varchar(20) | YES |  | NULL |  |  |
| school_name | varchar(50) | YES |  | NULL |  |  |
| intime | char(1) | YES |  | NULL |  |  |
| epi_group_code | int(11) | YES |  | NULL |  |  |
| house_lat | varchar(50) | YES |  | NULL |  |  |
| house_long | varchar(50) | YES |  | NULL |  |  |
| amp_approve | char(1) | YES |  | NULL |  |  |
| amp_approve_staff | varchar(50) | YES |  | NULL |  |  |
| amp_approve_date | date | YES |  | NULL |  |  |
| pat_addr | varchar(50) | YES |  | NULL |  |  |
| pat_moo | varchar(5) | YES |  | NULL |  |  |
| pat_road | varchar(50) | YES |  | NULL |  |  |
| pat_chwpart | varchar(2) | YES |  | NULL |  |  |
| pat_amppart | varchar(2) | YES |  | NULL |  |  |
| pat_tmbpart | varchar(2) | YES |  | NULL |  |  |
| pat_death | char(1) | YES |  | NULL |  |  |
| dw_export | char(1) | YES | MUL | NULL |  |  |
| dw_export_datetime | datetime | YES |  | NULL |  |  |
| report_in24hr | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dw_export | dw_export | no | 1 |
| ix_hn_guid | hn_guid | no | 1 |
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_pdx | pdx | no | 1 |
| ix_sv_number | sv_number | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vn_guid | vn_guid | no | 1 |
| PRIMARY | sv_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
