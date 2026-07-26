# `risk_report`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_id | int(11) | NO | PRI | 0 |  |  |
| report_date_time | datetime | YES | MUL | NULL |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| subject | varchar(250) | YES | MUL | NULL |  |  |
| risk_level | varchar(200) | YES |  | NULL |  |  |
| relation_program | varchar(50) | YES |  | NULL |  |  |
| risk_detail | longtext | YES |  | NULL |  |  |
| report_user | varchar(25) | YES |  | NULL |  |  |
| review_status | char(1) | YES |  | NULL |  |  |
| review_date_time | datetime | YES |  | NULL |  |  |
| review_staff | varchar(25) | YES |  | NULL |  |  |
| review_detail | longtext | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| department_id | department_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_id | yes | 1 |
| report_date_time | report_date_time | no | 1 |
| subject | subject | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
