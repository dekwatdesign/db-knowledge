# `elder_patient_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_patient_register_id | int(11) | NO | PRI | 0 |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| elder_patient_register_date | date | YES |  | NULL |  |  |
| elder_patient_register_no | varchar(15) | YES |  | NULL |  |  |
| elder_hhc_no | varchar(15) | YES |  | NULL |  |  |
| budget_year | varchar(4) | YES |  | NULL |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| elder_type_id | char(1) | YES |  | NULL |  |  |
| elder_discharge_status | char(1) | YES |  | NULL |  |  |
| elder_active_status | char(1) | YES |  | NULL |  |  |
| elder_discharge_date | date | YES |  | NULL |  |  |
| elder_cause_discharge | char(1) | YES |  | NULL |  |  |
| elder_hv_status | char(1) | YES |  | NULL |  |  |
| elder_update_name | char(15) | YES |  | NULL |  |  |
| online_elder_patient_register_check | char(1) | YES |  | NULL |  |  |
| online_elder_patient_register_id | int(11) | YES |  | NULL |  |  |
| elder_last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_patient_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
