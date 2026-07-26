# `arv_tx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| arv_tx_id | int(11) | NO | PRI | 0 |  |  |
| date_entry | datetime | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| arv_tx_during_symptom | varchar(10) | YES |  | NULL |  |  |
| arv_tx_note | text | YES |  | NULL |  |  |
| arv_tx_during_drug | varchar(10) | YES |  | NULL |  |  |
| arv_tx_last_bw | varchar(10) | YES |  | NULL |  |  |
| arv_tx_now_bw | varchar(10) | YES |  | NULL |  |  |
| arv_tx_budget_year_start | date | YES |  | NULL |  |  |
| arv_tx_budget_year_end | date | YES |  | NULL |  |  |
| arv_tx_appoint_month | varchar(10) | YES |  | NULL |  |  |
| arv_c3_chk | text | YES |  | NULL |  |  |
| arv_drug_resist_chk | text | YES |  | NULL |  |  |
| arv_co_morbid_chk | text | YES |  | NULL |  |  |
| arv_lab_chk | text | YES |  | NULL |  |  |
| login | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| nrti | varchar(100) | YES |  | NULL |  |  |
| nnrti | varchar(100) | YES |  | NULL |  |  |
| pi | varchar(100) | YES |  | NULL |  |  |
| integrase | varchar(100) | YES |  | NULL |  |  |
| resis_other_chk1 | varchar(100) | YES |  | NULL |  |  |
| resis_other_chk2 | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | arv_tx_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
