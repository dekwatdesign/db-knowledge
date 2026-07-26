# `patient_consent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_consent_id | int(11) | NO | PRI | 0 |  |  |
| patient_consent_date | date | YES |  | NULL |  |  |
| patient_consent_time | time | YES |  | NULL |  |  |
| patient_consent_accept | char(1) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| hn | varchar(13) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(13) | YES |  | NULL |  |  |
| pname | varchar(15) | YES |  | NULL |  |  |
| fname | varchar(30) | YES |  | NULL |  |  |
| lname | varchar(30) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| birthday | date | YES |  | NULL |  |  |
| status_patient | char(1) | YES |  | NULL |  |  |
| officer_id | int(11) | YES | MUL | NULL |  |  |
| patient_consent_form_id | int(11) | YES | MUL | NULL |  |  |
| patient_relation_type_id | int(11) | YES |  | NULL |  |  |
| scan_id | int(11) | YES |  | NULL |  |  |
| status_specify | char(1) | YES |  | NULL |  |  |
| officer_staff | varchar(250) | YES |  | NULL |  |  |
| smartcard_staff | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_refofficer14 | officer_id | no | 1 |
| ix_refpatient_consent_form21 | patient_consent_form_id | no | 1 |
| PRIMARY | patient_consent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
