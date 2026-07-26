# `medication_err`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| err_id | int(11) | NO | PRI | 0 |  |  |
| user_err | varchar(250) | YES |  | NULL |  |  |
| depart_code | char(3) | YES |  | NULL |  |  |
| err_date_report | date | YES |  | NULL |  |  |
| err_time_report | time | YES |  | NULL |  |  |
| err_date | date | YES |  | NULL |  |  |
| err_time | time | YES |  | NULL |  |  |
| patient_type | char(3) | YES |  | NULL |  |  |
| detail_err | varchar(250) | YES |  | NULL |  |  |
| prescrib_err | varchar(250) | YES |  | NULL |  |  |
| order_process_err | varchar(250) | YES |  | NULL |  |  |
| dispens_err | varchar(250) | YES |  | NULL |  |  |
| adminis_err | varchar(250) | YES |  | NULL |  |  |
| cause | varchar(250) | YES |  | NULL |  |  |
| level_code | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | err_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
