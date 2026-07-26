# `dt_endo_etio`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_endo_etio_id | int(11) | NO | PRI | 0 |  |  |
| dt_endo_main_id | int(11) | YES |  | NULL |  |  |
| dt_endo_etio_grp_chk | varchar(255) | YES |  | NULL |  |  |
| dt_endo_etio_trauma_chk | char(1) | YES |  | NULL |  |  |
| dt_endo_etio_hard_grp_chk | varchar(255) | YES |  | NULL |  |  |
| dt_endo_etio_perio_grp_chk | varchar(255) | YES |  | NULL |  |  |
| dt_endo_etio_note | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_endo_etio_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
