# `palliative_care_hhc_sent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_hhc_sent_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_hhc_sent_hospcode_refer | varchar(9) | YES |  | NULL |  |  |
| palliative_care_hhc_sent_hospcode_receive | varchar(9) | YES |  | NULL |  |  |
| palliative_care_hhc_sent_no | varchar(10) | YES |  | NULL |  |  |
| palliative_care_hhc_sent_date | date | YES |  | NULL |  |  |
| palliative_care_hhc_sent_visit_status | char(1) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| palliative_care_patient_register_id | int(11) | YES |  | NULL |  |  |
| palliative_care_patient_status_id | int(11) | YES |  | NULL |  |  |
| doctor_code | char(6) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_hhc_sent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
