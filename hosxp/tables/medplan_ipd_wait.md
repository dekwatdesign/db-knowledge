# `medplan_ipd_wait`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_plan_number | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| offdate | date | YES |  | NULL |  |  |
| orderdate | date | YES |  | NULL |  |  |
| orderstatus | char(1) | YES |  | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| sp_use | varchar(7) | YES |  | NULL |  |  |
| frequency | int(11) | YES |  | NULL |  |  |
| first_dose_date_time | datetime | YES |  | NULL |  |  |
| icode_type | char(1) | YES |  | NULL |  |  |
| med_interval_type_id | int(11) | YES |  | NULL |  |  |
| off_staff | varchar(25) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| transfer | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | med_plan_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
