# `organ_donate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| organ_donate_id | int(11) | NO | PRI | 0 |  |  |
| an | char(9) | YES |  | NULL |  |  |
| hn | char(9) | YES |  | NULL |  |  |
| organ_donate_type | int(11) | YES |  | NULL |  |  |
| potential_organ_donate | varchar(1) | YES |  | NULL |  |  |
| notified_from_ward_to_tc | varchar(1) | YES |  | NULL |  |  |
| negotiation_received | varchar(1) | YES |  | NULL |  |  |
| negotiation_status | varchar(1) | YES |  | NULL |  |  |
| eye_donation_status | varchar(1) | YES |  | NULL |  |  |
| eye_collected_count | char(1) | YES |  | NULL |  |  |
| negotiate_doctor | varchar(7) | YES |  | NULL |  |  |
| keep_doctor | varchar(7) | YES |  | NULL |  |  |
| keep_date | date | YES |  | NULL |  |  |
| keep_time | time | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| patient_consent_id | int(11) | YES |  | NULL |  |  |
| negotiation_failed_type_id | int(11) | YES |  | NULL |  |  |
| eye_reason_type_id | int(11) | YES |  | NULL |  |  |
| pkpt | varchar(50) | YES |  | NULL |  |  |
| chkpotential | varchar(1) | YES |  | NULL |  |  |
| potential_eye_donor_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | organ_donate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
