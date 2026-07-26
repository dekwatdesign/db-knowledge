# `spclty_oapp_limit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| spclty_oapp_limit_id | int(11) | NO | PRI | 0 |  |  |
| spclty | char(2) | YES | MUL | NULL |  |  |
| oapp_date | date | YES | MUL | NULL |  |  |
| limit_qty | int(11) | YES |  | NULL |  |  |
| check_time | char(1) | YES |  | NULL |  |  |
| time_start | time | YES |  | NULL |  |  |
| time_finish | time | YES |  | NULL |  |  |
| spclty_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_spclty | spclty | no | 1 |
| ix_spclty_date | spclty | no | 1 |
| ix_spclty_date | oapp_date | no | 2 |
| ix_spclty_date_index | oapp_date | no | 1 |
| ix_spclty_date_index | spclty | no | 2 |
| PRIMARY | spclty_oapp_limit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
