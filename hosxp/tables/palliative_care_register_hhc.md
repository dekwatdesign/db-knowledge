# `palliative_care_register_hhc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_register_hhc_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| palliative_care_register_hhc_date | date | YES |  | NULL |  |  |
| palliative_care_register_hhc_no | varchar(10) | YES |  | NULL |  |  |
| palliative_care_register_hhc_from_pc_registration | char(1) | YES |  | NULL |  |  |
| palliative_care_register_hhc_discharge | char(1) | YES |  | NULL |  |  |
| palliative_care_register_hhc_discharge_date | date | YES |  | NULL |  |  |
| palliative_care_patient_register_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_register_hhc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
