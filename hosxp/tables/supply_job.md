# `supply_job`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_job_id | int(11) | NO | PRI | 0 |  |  |
| supply_job_date | date | YES |  | NULL |  |  |
| supply_job_staff | varchar(60) | YES |  | NULL |  |  |
| supply_job_remark | varchar(200) | YES |  | NULL |  |  |
| supply_job_refno | varchar(60) | YES |  | NULL |  |  |
| supply_job_status | varchar(1) | YES |  | NULL |  |  |
| supply_sterile_receive_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_sterile_receive70 | supply_sterile_receive_id | no | 1 |
| PRIMARY | supply_job_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
