# `dt_pedia_extra`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_pedia_extra_id | int(11) | NO | PRI | 0 |  |  |
| dt_pedia_extra_head | varchar(255) | YES |  | NULL |  |  |
| dt_pedia_extra_neck | varchar(255) | YES |  | NULL |  |  |
| dt_pedia_extra_face | varchar(255) | YES |  | NULL |  |  |
| dt_pedia_extra_ear | varchar(255) | YES |  | NULL |  |  |
| dt_pedia_extra_hand | varchar(255) | YES |  | NULL |  |  |
| dt_pedia_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_pedia_extra_headchk | varchar(20) | YES |  | NULL |  |  |
| dt_pedia_extra_neckchk | varchar(20) | YES |  | NULL |  |  |
| dt_pedia_extra_facechk | varchar(20) | YES |  | NULL |  |  |
| dt_pedia_extra_earchk | varchar(20) | YES |  | NULL |  |  |
| dt_pedia_extra_handchk | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_pedia_main102 | dt_pedia_main_id | no | 1 |
| PRIMARY | dt_pedia_extra_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
