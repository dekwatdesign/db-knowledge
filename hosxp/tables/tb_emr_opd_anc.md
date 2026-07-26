# `tb_emr_opd_anc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(15) | NO | PRI |  |  |  |
| hn | varchar(10) | NO | PRI |  |  |  |
| vstdate | date | YES |  | NULL |  |  |
| emr_opd_anc_pregnancy_number | int(2) | YES |  | NULL |  |  |
| emr_opd_anc_bps | varchar(50) | YES |  | NULL |  |  |
| emr_opd_anc_nipple | varchar(50) | YES |  | NULL |  |  |
| emr_opd_anc_uterus | varchar(50) | YES |  | NULL |  |  |
| emr_opd_anc_posture | varchar(50) | YES |  | NULL |  |  |
| emr_opd_anc_heart_sound | varchar(50) | YES |  | NULL |  |  |
| emr_opd_anc_squirm | varchar(50) | YES |  | NULL |  |  |
| emr_opd_anc_pregnancy_age | int(5) | YES |  | NULL |  |  |
| emr_opd_anc_pe | varchar(255) | YES |  | NULL |  |  |
| emr_opd_anc_diagnosis | varchar(255) | YES |  | NULL |  |  |
| emr_opd_anc_log_user | varchar(255) | YES |  | NULL |  |  |
| emr_opd_anc_log_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| emr_opd_anc_status | char(2) | NO | PRI |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | vn | yes | 1 |
| PRIMARY | hn | yes | 2 |
| PRIMARY | emr_opd_anc_log_datetime | yes | 3 |
| PRIMARY | emr_opd_anc_status | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
