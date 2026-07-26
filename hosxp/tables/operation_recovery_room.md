# `operation_recovery_room`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_id | int(11) | NO | PRI | 0 |  |  |
| enter_room_date | date | YES |  | NULL |  |  |
| enter_room_time | time | YES |  | NULL |  |  |
| leave_room_date | date | YES |  | NULL |  |  |
| leave_room_time | time | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| rr_score | int(11) | YES |  | NULL |  |  |
| recovery_dch_id | int(11) | YES |  | NULL |  |  |
| complication | text | YES |  | NULL |  |  |
| nibps | int(11) | YES |  | NULL |  |  |
| nibpd | int(11) | YES |  | NULL |  |  |
| hr | int(11) | YES |  | NULL |  |  |
| rr | int(11) | YES |  | NULL |  |  |
| spo2 | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| doctor2 | varchar(9) | YES |  | NULL |  |  |
| doctor3 | varchar(9) | YES |  | NULL |  |  |
| doctor4 | varchar(9) | YES |  | NULL |  |  |
| nurse_note | text | YES |  | NULL |  |  |
| recovery_respiratory_type_id | int(11) | YES |  | NULL |  |  |
| recovery_pat_stat_type_id_1 | int(11) | YES |  | NULL |  |  |
| recovery_pat_stat_type_id_2 | int(11) | YES |  | NULL |  |  |
| recovery_activity_type_id | int(11) | YES |  | NULL |  |  |
| recovery_circulation_type_id | int(11) | YES |  | NULL |  |  |
| recovery_cons_type_id | int(11) | YES |  | NULL |  |  |
| recovery_o2sat_type_id | int(11) | YES |  | NULL |  |  |
| recovery_cmpl_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | operation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
