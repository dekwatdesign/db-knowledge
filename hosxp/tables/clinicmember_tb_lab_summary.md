# `clinicmember_tb_lab_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_tb_lab_summary_id | int(11) | NO | PRI | 0 |  |  |
| month_number | int(11) | YES |  | NULL |  |  |
| visit_date | date | YES |  | NULL |  |  |
| spot_result | varchar(100) | YES |  | NULL |  |  |
| collect_result | varchar(100) | YES |  | NULL |  |  |
| culture_result | varchar(100) | YES |  | NULL |  |  |
| lab_serial_number | varchar(100) | YES |  | NULL |  |  |
| clinicmember_id | int(11) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| test1_result_text | varchar(100) | YES |  | NULL |  |  |
| test1_lab_result_type_id | int(11) | YES |  | NULL |  |  |
| test2_result_text | varchar(100) | YES |  | NULL |  |  |
| test2_lab_result_type_id | int(11) | YES |  | NULL |  |  |
| test3_result_text | varchar(100) | YES |  | NULL |  |  |
| test3_lab_result_type_id | int(11) | YES |  | NULL |  |  |
| note | varchar(250) | YES |  | NULL |  |  |
| test1_date | date | YES |  | NULL |  |  |
| test2_date | date | YES |  | NULL |  |  |
| test3_date | date | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| modify_datetime | datetime | YES |  | NULL |  |  |
| modify_staff | varchar(50) | YES |  | NULL |  |  |
| clinicmember_tb_lab_specimen_type_id | int(11) | YES |  | NULL |  |  |
| test1_lab_culture_type_id | int(11) | YES |  | NULL |  |  |
| test2_lab_culture_type_id | int(11) | YES |  | NULL |  |  |
| test3_lab_culture_type_id | int(11) | YES |  | NULL |  |  |
| test1_culture_technique_type_id | int(11) | YES |  | NULL |  |  |
| test2_culture_technique_type_id | int(11) | YES |  | NULL |  |  |
| test3_culture_technique_type_id | int(11) | YES |  | NULL |  |  |
| test1_culture_identify_type_id | int(11) | YES |  | NULL |  |  |
| test2_culture_identify_type_id | int(11) | YES |  | NULL |  |  |
| test3_culture_identify_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_id | clinicmember_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_month_clinicmember_id_unique | clinicmember_id | yes | 1 |
| ix_month_clinicmember_id_unique | month_number | yes | 2 |
| ix_vn | vn | no | 1 |
| PRIMARY | clinicmember_tb_lab_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
