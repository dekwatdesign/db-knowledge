# `dt_fixed_roentgraphic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_fixed_roentgraphic_id | int(11) | NO | PRI | 0 |  |  |
| dt_fixed_roentgraphic_note1 | text | YES |  | NULL |  |  |
| dt_fixed_roentgraphic_note2 | text | YES |  | NULL |  |  |
| dt_fixed_roentgraphic_note3 | text | YES |  | NULL |  |  |
| dt_fixed_roentgraphic_picture1 | longblob | YES |  | NULL |  |  |
| dt_fixed_roentgraphic_picture2 | longblob | YES |  | NULL |  |  |
| dt_fixed_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_fixed_main_id | dt_fixed_main_id | no | 1 |
| PRIMARY | dt_fixed_roentgraphic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
