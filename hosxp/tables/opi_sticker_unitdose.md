# `opi_sticker_unitdose`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_sticker_unitdose_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| medication_name | text | YES |  | NULL |  |  |
| is_ac | char(1) | YES |  | NULL |  |  |
| is_pc | char(1) | YES |  | NULL |  |  |
| meal_name | varchar(100) | YES |  | NULL |  |  |
| meal_code | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | opi_sticker_unitdose_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
