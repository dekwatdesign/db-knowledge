# `ipd_presc_machine_batch`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_presc_machine_batch_id | int(11) | NO | PRI | 0 |  |  |
| ref_date | date | YES | MUL | NULL |  |  |
| start_datetime | datetime | YES |  | NULL |  |  |
| finish_datetime | datetime | YES |  | NULL |  |  |
| total_presc | int(11) | YES |  | NULL |  |  |
| batch_status | char(1) | YES | MUL | NULL |  |  |
| machine_status_id | int(11) | YES |  | NULL |  |  |
| computer_name | varchar(100) | YES |  | NULL |  |  |
| total_an | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_batch_status | batch_status | no | 1 |
| ix_ref_date | ref_date | no | 1 |
| PRIMARY | ipd_presc_machine_batch_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
