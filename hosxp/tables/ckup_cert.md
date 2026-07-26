# `ckup_cert`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_cert_id | int(11) | NO | PRI | 0 |  |  |
| ckup_ovst_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| doctor_code | varchar(50) | YES |  | NULL |  |  |
| ckup_staff_entry | varchar(50) | YES |  | NULL |  |  |
| ckup_issue_date | date | YES |  | NULL |  |  |
| ckup_issue_date_time | datetime | YES |  | NULL |  |  |
| ckup_diagnosis | varchar(255) | YES |  | NULL |  |  |
| ckup_symptom | varchar(255) | YES |  | NULL |  |  |
| ckup_cert_system_test | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_cert_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
