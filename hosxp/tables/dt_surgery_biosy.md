# `dt_surgery_biosy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_biosy_id | int(11) | NO | PRI | 0 |  |  |
| dt_surgery_biosy_diag | text | YES |  | NULL |  |  |
| dt_surgery_biosy_brieft | text | YES |  | NULL |  |  |
| dt_surgery_biosy_radio | text | YES |  | NULL |  |  |
| dt_surgery_biosy_tech_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_biosy_tech_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_biosy_relate_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_biosy_yes_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_biosy_root_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_biosy_other_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_biosy_anes_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_biosy_anes_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_biosy_la_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_biosy_la_qty | int(11) | YES |  | NULL |  |  |
| dt_surgery_biosy_begin_time | time | YES |  | NULL |  |  |
| dt_surgery_biosy_end_time | time | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_surgery_biosy_date | date | YES |  | NULL |  |  |
| dt_surgery_patho_res | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_surgery_main12 | dt_surgery_main_id | no | 1 |
| PRIMARY | dt_surgery_biosy_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
