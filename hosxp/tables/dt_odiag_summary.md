# `dt_odiag_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_odiag_summary_id | int(11) | NO | PRI | 0 |  |  |
| dt_odiag_summary_systemic_chk | varchar(5) | YES |  | NULL |  |  |
| dt_odiag_summary_systemic_note | text | YES |  | NULL |  |  |
| dt_odiag_summary_dx_note | text | YES |  | NULL |  |  |
| dt_odiag_summary_tx_note | text | YES |  | NULL |  |  |
| dt_odiag_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_odiag6 | dt_odiag_main_id | no | 1 |
| PRIMARY | dt_odiag_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
