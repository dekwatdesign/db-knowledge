# `ipd2opd_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd2opd_queue_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| send_staff | varchar(50) | YES |  | NULL |  |  |
| send_date | date | YES |  | NULL |  |  |
| send_time | time | YES |  | NULL |  |  |
| send_to_depcode | varchar(3) | YES |  | NULL |  |  |
| receive_doctor_code | varchar(10) | YES |  | NULL |  |  |
| nurse_process | char(1) | YES |  | NULL |  |  |
| doctor_process | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | opd2opd_queue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
