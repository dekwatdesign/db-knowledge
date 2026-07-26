# `ds_opdscreen_clinic_anonymous`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ds_opdscreen_clinic_anonymous_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| screen_date | date | YES |  | NULL |  |  |
| screen_time | time | YES |  | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| purpose_test | int(1) | YES |  | NULL |  |  |
| purpose_test_note | varchar(150) | YES |  | NULL |  |  |
| risk_test | int(1) | YES |  | NULL |  |  |
| risk_test_note | varchar(150) | YES |  | NULL |  |  |
| decision_test | int(1) | YES |  | NULL |  |  |
| hn | varchar(12) | YES |  | NULL |  |  |
| code_cn | varchar(10) | YES |  | NULL |  |  |
| now | int(1) | YES |  | NULL |  |  |
| now_time | time | YES |  | NULL |  |  |
| now_date | date | YES |  | NULL |  |  |
| blood_more | int(1) | YES |  | NULL |  |  |
| blood_note | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | ds_opdscreen_clinic_anonymous_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
