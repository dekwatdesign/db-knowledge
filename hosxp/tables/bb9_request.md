# `bb9_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| request_id | int(11) | NO | PRI | 0 |  |  |
| bloodcheck_id | int(11) | YES | MUL | NULL |  |  |
| sender_id | int(11) | YES | MUL | NULL |  |  |
| request_date | date | YES |  | NULL |  |  |
| unmatchgrouping | char(1) | YES |  | NULL |  |  |
| roomtemp | char(1) | YES |  | NULL |  |  |
| coomp | char(1) | YES |  | NULL |  |  |
| want_date | date | YES |  | NULL |  |  |
| wnat_time | time | YES |  | NULL |  |  |
| doctor_name | varchar(50) | YES |  | NULL |  |  |
| lastdiagnosis | varchar(254) | YES |  | NULL |  |  |
| afterdianosis | varchar(254) | YES |  | NULL |  |  |
| in_queue | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| bloodcheck_id | bloodcheck_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | request_id | yes | 1 |
| sender_id | sender_id | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
