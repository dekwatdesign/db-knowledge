# `dt_surgery_patho`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_patho_id | int(11) | NO | PRI | 0 |  |  |
| dt_surgery_patho_diag | text | YES |  | NULL |  |  |
| dt_surgery_patho_lacation | text | YES |  | NULL |  |  |
| dt_surgery_patho_radio | text | YES |  | NULL |  |  |
| dt_surgery_patho_tx_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_patho_tx_other_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_patho_rec_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_patho_rec_other_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_patho_anes_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_patho_anes_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_patho_begin_time | time | YES |  | NULL |  |  |
| dt_surgery_patho_end_time | time | YES |  | NULL |  |  |
| dt_surgery_patho_com_chk | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_patho_surgical_note | longtext | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_surgery_patho_date | date | YES |  | NULL |  |  |
| dt_surgery_surgical_tech_note | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_surgery_main14 | dt_surgery_main_id | no | 1 |
| PRIMARY | dt_surgery_patho_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
