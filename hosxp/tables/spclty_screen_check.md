# `spclty_screen_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| spclty_screen_check_id | int(11) | NO | PRI | 0 |  |  |
| spclty | char(2) | YES | MUL | NULL |  |  |
| screen_check_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique | spclty | no | 1 |
| ix_unique | screen_check_type_id | no | 2 |
| ix_unique_index | screen_check_type_id | no | 1 |
| ix_unique_index | spclty | no | 2 |
| PRIMARY | spclty_screen_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
