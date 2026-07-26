# `doctor_no_appointment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_no_app_id | int(11) | NO | PRI | 0 |  |  |
| doctor | varchar(10) | YES | MUL | NULL |  |  |
| app_date | date | YES | MUL | NULL |  |  |
| app_time1 | time | YES |  | NULL |  |  |
| app_time2 | time | YES |  | NULL |  |  |
| remark | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_app_date | app_date | no | 1 |
| ix_doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_no_app_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
