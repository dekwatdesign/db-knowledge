# `dt_prosth_ex`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_prosth_ex_id | int(11) | NO | PRI | 0 |  |  |
| dt_prosth_ex_facial_app | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_ex_facial_app_note | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_ex_facial_form | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_ex_facial_form_note | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_ex_facial_pro | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_ex_facial_pro_note | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_ex_high_lip_pos | double(15,2) | YES |  | NULL |  |  |
| dt_prosth_ex_high_lip_mea | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_ex_high_lip_sym | char(1) | YES |  | NULL |  |  |
| dt_prosth_ex_tmj_note | text | YES |  | NULL |  |  |
| dt_prosth_ex_tmj_gchk | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_ex_low_lip_pos | double(15,2) | YES |  | NULL |  |  |
| dt_prosth_ex_low_lip_mea | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_ex_low_lip_sym | char(1) | YES |  | NULL |  |  |
| dt_prosth_ex_lip_lenght | varchar(10) | YES |  | NULL |  |  |
| dt_prosth_ex_max_open | varchar(20) | YES |  | NULL |  |  |
| dt_prosth_ex_max_note | double(18,2) | YES |  | NULL |  |  |
| dt_prosth_ex_midline_ucon | varchar(50) | YES |  | NULL |  |  |
| dt_prosth_ex_midline_utype | varchar(50) | YES |  | NULL |  |  |
| dt_prosth_ex_midline_unote | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_ex_midline_ulnote | double(18,2) | YES |  | NULL |  |  |
| dt_prosth_ex_midline_urnote | double(18,2) | YES |  | NULL |  |  |
| dt_prosth_ex_midline_lcon | varchar(50) | YES |  | NULL |  |  |
| dt_prosth_ex_midline_ltype | varchar(50) | YES |  | NULL |  |  |
| dt_prosth_ex_midline_lnote | varchar(100) | YES |  | NULL |  |  |
| dt_prosth_ex_midline_llnote | double(18,2) | YES |  | NULL |  |  |
| dt_prosth_ex_midline_lrnote | double(18,2) | YES |  | NULL |  |  |
| dt_prosth_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_prosth_ex_muscal_eva | text | YES |  | NULL |  |  |
| dt_prosth_ex_facial_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_prosth_main40 | dt_prosth_main_id | no | 1 |
| PRIMARY | dt_prosth_ex_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
