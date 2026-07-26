# `handicapped_patient_register_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_patient_register_list_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_patient_register_group | char(10) | YES |  | NULL |  |  |
| handicapped_patient_register_list_status_hhc | char(10) | YES |  | NULL |  |  |
| handicapped_patient_register_list_hhc_date | date | YES |  | NULL |  |  |
| handicapped_patient_register_list_hhc_time | time | YES |  | NULL |  |  |
| handicapped_patient_register_list_hhc_hospcode | char(10) | YES |  | NULL |  |  |
| handicapped_patient_register_list_refer | char(10) | YES |  | NULL |  |  |
| handicapped_patient_register_list_refer_date | date | YES |  | NULL |  |  |
| handicapped_patient_register_list_refer_time | time | YES |  | NULL |  |  |
| handicapped_patient_register_list_refer_hospcode | char(10) | YES |  | NULL |  |  |
| handicapped_patient_register_list_dischat | char(10) | YES |  | NULL |  |  |
| handicapped_patient_register_list_dischat_date | date | YES |  | NULL |  |  |
| hospcode | char(10) | YES |  | NULL |  |  |
| code | char(10) | YES |  | NULL |  |  |
| handicapped_patient_register_id | char(10) | YES |  | NULL |  |  |
| handicapped_patient_register_list_cause_id | char(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_patient_register_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
