# `sub_spclty`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sub_spclty_id | int(11) | NO | PRI | 0 |  |  |
| spclty | char(2) | YES | MUL | NULL |  |  |
| sub_spclty_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_spclty | spclty | no | 1 |
| PRIMARY | sub_spclty_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
