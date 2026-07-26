# `dt_fixed_intra`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_fixed_intra_id | int(11) | NO | PRI | 0 |  |  |
| dt_fixed_intra_picture1 | longblob | YES |  | NULL |  |  |
| dt_fixed_intra_picture2 | longblob | YES |  | NULL |  |  |
| dt_fixed_intra_picture3 | longblob | YES |  | NULL |  |  |
| dt_fixed_intra_picture4 | longblob | YES |  | NULL |  |  |
| dt_fixed_intra_picture5 | longblob | YES |  | NULL |  |  |
| dt_fixed_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_fixed_main_id | dt_fixed_main_id | no | 1 |
| PRIMARY | dt_fixed_intra_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
