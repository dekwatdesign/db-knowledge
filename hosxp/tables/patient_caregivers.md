# `patient_caregivers`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_caregivers_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| caregiver_type_id | int(11) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| prefix | varchar(50) | YES |  | NULL |  |  |
| first_name | varchar(100) | YES |  | NULL |  |  |
| last_name | varchar(100) | YES |  | NULL |  |  |
| address1 | varchar(200) | YES |  | NULL |  |  |
| address2 | varchar(200) | YES |  | NULL |  |  |
| contact_number | varchar(100) | YES |  | NULL |  |  |
| date_of_birth | date | YES |  | NULL |  |  |
| caregiver_notes | text | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| PRIMARY | patient_caregivers_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
