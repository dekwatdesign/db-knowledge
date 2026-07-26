# `dt_surgery_autoth`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_autoth_id | int(11) | NO | PRI | 0 |  |  |
| dt_surgery_autoth_area | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_autoth_angu_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_autoth_root | varchar(255) | YES |  | NULL |  |  |
| dt_surgery_autoth_direct_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_autoth_recip_area | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_autoth_recip_diag | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_autoth_infec_chk | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_autoth_spece_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_autoth_occlusal_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_autoth_stabil_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_autoth_begin_time | time | YES |  | NULL |  |  |
| dt_surgery_autoth_end_time | time | YES |  | NULL |  |  |
| dt_surgery_autoth_comp_note | text | YES |  | NULL |  |  |
| dt_surgery_autoth_post_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_autoth_post_date | date | YES |  | NULL |  |  |
| dt_surgery_autoth_pa_area | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_autoth_in_area | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_autoth_stabil_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES | MUL | NULL |  |  |
| date_entry | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_surgery_main4 | dt_surgery_main_id | no | 1 |
| PRIMARY | dt_surgery_autoth_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
