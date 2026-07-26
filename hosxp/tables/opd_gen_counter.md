# `opd_gen_counter`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_gen_counter_id | int(11) | NO | PRI | 0 |  |  |
| opd_gen_counter_name | varchar(200) | YES |  | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| current_queue_no | int(11) | YES |  | NULL |  |  |
| counter_busy | char(1) | YES |  | NULL |  |  |
| active_officer_id | int(11) | YES |  | NULL |  |  |
| counter_no | int(11) | YES |  | NULL |  |  |
| last_active | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | opd_gen_counter_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
