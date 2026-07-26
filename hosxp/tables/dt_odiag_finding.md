# `dt_odiag_finding`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_odiag_finding_id | int(11) | NO | PRI | 0 |  |  |
| dt_odiag_finding_area | varchar(200) | YES |  | NULL |  |  |
| dt_odiag_finding_other | text | YES |  | NULL |  |  |
| dt_odiag_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_odiag3 | dt_odiag_main_id | no | 1 |
| PRIMARY | dt_odiag_finding_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
