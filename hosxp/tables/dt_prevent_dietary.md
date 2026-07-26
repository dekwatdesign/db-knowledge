# `dt_prevent_dietary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_prevent_dietary_id | int(11) | NO | PRI | 0 |  |  |
| dt_prevent_dietary_between_meal | varchar(50) | YES |  | NULL |  |  |
| dt_prevent_dietary_between_day | int(11) | YES |  | NULL |  |  |
| dt_prevent_dietary_duration_meal | varchar(50) | YES |  | NULL |  |  |
| dt_prevent_dietary_duration_week | int(11) | YES |  | NULL |  |  |
| dt_prevent_dietary_after_tooth | varchar(50) | YES |  | NULL |  |  |
| dt_prevent_dietary_good_health | varchar(250) | YES |  | NULL |  |  |
| dt_prevent_dietary_bed_health | varchar(250) | YES |  | NULL |  |  |
| dt_prevent_dietary_note | text | YES |  | NULL |  |  |
| dt_prevent_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_prevent20 | dt_prevent_id | no | 1 |
| PRIMARY | dt_prevent_dietary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
