# `dt_prevent_holistic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_prevent_holistic_id | int(11) | NO | PRI | 0 |  |  |
| dt_prevent_holistic_diet_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_holistic_diet_note | text | YES |  | NULL |  |  |
| dt_prevent_holistic_oral_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_holistic_oral_note | text | YES |  | NULL |  |  |
| dt_prevent_holistic_pros_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_holistic_pros_note | text | YES |  | NULL |  |  |
| dt_prevent_holistic_other_chk | char(3) | YES |  | NULL |  |  |
| dt_prevent_holistic_other_note | text | YES |  | NULL |  |  |
| dt_prevent_holistic_spe_note | text | YES |  | NULL |  |  |
| dt_prevent_id | int(11) | YES | MUL | NULL |  |  |
| staff_entry | varchar(20) | YES |  | NULL |  |  |
| date_entry | datetime | YES |  | NULL |  |  |
| dt_prevent_holist_chk1 | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_holist_chk2 | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_holist_memo | text | YES |  | NULL |  |  |
| dt_prevent_holist_wchk1 | char(1) | YES |  | NULL |  |  |
| dt_prevent_holist_wchk2 | char(1) | YES |  | NULL |  |  |
| dt_prevent_holist_wdchk1 | varchar(50) | YES |  | NULL |  |  |
| dt_prevent_holist_wdchk2 | varchar(100) | YES |  | NULL |  |  |
| dt_prevent_holist_txt1 | varchar(40) | YES |  | NULL |  |  |
| dt_prevent_holist_txt2 | varchar(20) | YES |  | NULL |  |  |
| dt_prevent_holist_txt3 | varchar(20) | YES |  | NULL |  |  |
| dt_prevent_holist_addedit | datetime | YES |  | NULL |  |  |
| dt_prevent_holist_update | datetime | YES |  | NULL |  |  |
| dt_prevent_holist_gin_spec | varchar(70) | YES |  | NULL |  |  |
| dt_prevent_holist_per_spec | varchar(70) | YES |  | NULL |  |  |
| dt_prevent_holist_prr_txt | varchar(20) | YES |  | NULL |  |  |
| dt_prevent_holist_obs_txt | varchar(50) | YES |  | NULL |  |  |
| dt_prevent_holist_refer_txt | varchar(50) | YES |  | NULL |  |  |
| dt_prevent_holist_month | varchar(3) | YES |  | NULL |  |  |
| dt_prevent_prr_chk | char(1) | YES |  | NULL |  |  |
| dt_prevent_holist_refer_chk | char(1) | YES |  | NULL |  |  |
| dt_prevent_holist_obs_chk | char(1) | YES |  | NULL |  |  |
| dt_prevent_recall_period_chk | char(1) | YES |  | NULL |  |  |
| dt_prevent_holist_sendto | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_prevent19 | dt_prevent_id | no | 1 |
| PRIMARY | dt_prevent_holistic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
