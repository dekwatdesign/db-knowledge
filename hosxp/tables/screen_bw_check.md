# `screen_bw_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| screen_bw_check_id | int(11) | NO | PRI | 0 |  |  |
| age_min | int(11) | YES | MUL | NULL |  |  |
| age_max | int(11) | YES | MUL | NULL |  |  |
| max_bw_kg | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_age | age_min | no | 1 |
| ix_age | age_max | no | 2 |
| ix_age_index | age_max | no | 1 |
| ix_age_index | age_min | no | 2 |
| PRIMARY | screen_bw_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
