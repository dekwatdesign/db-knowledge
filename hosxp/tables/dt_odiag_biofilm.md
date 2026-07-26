# `dt_odiag_biofilm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_odiag_biofilm_id | int(11) | NO | PRI | 0 |  |  |
| dt_biofilm_id1 | int(11) | YES |  | NULL |  |  |
| dt_odiag_biofilm_biofilm_note | varchar(100) | YES |  | NULL |  |  |
| dt_biofilm_id2 | int(11) | YES |  | NULL |  |  |
| dt_odiag_biofilm_calculus_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_biofilm_gingvival | text | YES |  | NULL |  |  |
| dt_odiag_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_odiag2 | dt_odiag_main_id | no | 1 |
| PRIMARY | dt_odiag_biofilm_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
