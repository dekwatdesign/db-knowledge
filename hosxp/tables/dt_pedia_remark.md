# `dt_pedia_remark`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_pedia_remark_id | int(11) | NO | PRI | 0 |  |  |
| dt_pedia_remark_note | varchar(255) | YES |  | NULL |  |  |
| dt_pedia_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_pedia_main107 | dt_pedia_main_id | no | 1 |
| PRIMARY | dt_pedia_remark_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
