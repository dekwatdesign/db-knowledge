# `dt_surgery_cald`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_cald_id | int(11) | NO | PRI | 0 |  |  |
| dt_surgery_cald_cause_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cald_cause_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cald_present_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cald_addi_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cald_begin_time | time | YES |  | NULL |  |  |
| dt_surgery_cald_end_time | time | YES |  | NULL |  |  |
| dt_surgery_cald_com_note | text | YES |  | NULL |  |  |
| dt_surgery_cald_post_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cald_post_date | date | YES |  | NULL |  |  |
| dt_surgery_cald_post_padate | date | YES |  | NULL |  |  |
| dt_surgery_cald_post_indate | date | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_surgery_cald_date | date | YES |  | NULL |  |  |
| dt_surgery_res_note | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_prf_note | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_bone_note | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_add_date | date | YES |  | NULL |  |  |
| dt_surgery_edit_date | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_surgery_main7 | dt_surgery_main_id | no | 1 |
| PRIMARY | dt_surgery_cald_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
