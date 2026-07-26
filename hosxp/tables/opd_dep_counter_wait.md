# `opd_dep_counter_wait`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_dep_counter_wait_id | int(11) | NO | PRI | 0 |  |  |
| opd_dep_counter_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| queue_no | int(11) | YES |  | NULL |  |  |
| wait_datetime | datetime | YES |  | NULL |  |  |
| opd_dep_counter_wait_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | opd_dep_counter_id | no | 1 |
| ix_id_queue_no | opd_dep_counter_id | no | 1 |
| ix_id_queue_no | queue_no | no | 2 |
| PRIMARY | opd_dep_counter_wait_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
