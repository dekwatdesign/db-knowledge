# `opd_monitor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| monitor_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| monitor_criteria_id | int(11) | YES | MUL | NULL |  |  |
| result_count | int(11) | YES |  | NULL |  |  |
| consult_ok | char(1) | YES | MUL | NULL |  |  |
| consult_note | varchar(250) | YES |  | NULL |  |  |
| consult_date_time | datetime | YES | MUL | NULL |  |  |
| consult_doctor | varchar(7) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| consult_date_time | consult_date_time | no | 1 |
| consult_doctor | consult_doctor | no | 1 |
| consult_ok | consult_ok | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| monitor_criteria_id | monitor_criteria_id | no | 1 |
| PRIMARY | monitor_id | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
