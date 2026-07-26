# `clinicmember_psy_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_psy_screen_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_id | int(11) | YES |  | NULL |  |  |
| cnm_psy_screen_type_id | int(11) | YES |  | NULL |  |  |
| psy_screen_date | date | YES |  | NULL |  |  |
| psy_screen_time | time | YES |  | NULL |  |  |
| psy_screen_hospcode | varchar(9) | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |
| screen_note | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | clinicmember_psy_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
