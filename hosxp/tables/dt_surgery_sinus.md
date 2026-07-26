# `dt_surgery_sinus`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_sinus_id | char(10) | NO | PRI |  |  |  |
| dtarea | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_sinus_res_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_sinus_begin_time | time | YES |  | NULL |  |  |
| dt_surgery_sinus_end_time | time | YES |  | NULL |  |  |
| dt_surgery_sinus_pres_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_sinus_com_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_sinus_area1 | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_sinus_area2 | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_sinus_auto_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_sinus_auto_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_sinus_bl_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_sinus_par_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_sinus_auto_valume | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_sinus_bone_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_sinus_bone_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_sinus_bone_voume | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_sinus_addi_note | text | YES |  | NULL |  |  |
| dt_surgery_sinus_comp_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_sinus_in_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_sinus_in_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_sinus_post_chk | varchar(150) | YES |  | NULL |  |  |
| dt_surgery_sinus_post_date | date | YES |  | NULL |  |  |
| dt_surgery_sinus_post_paarea | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_sinus_post_inarea | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_sinus_post_other | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_sinus_special_chk | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_sinus_special_note | longblob | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_surgery_sinus_tech_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_sinus_lw_size | double(15,2) | YES |  | NULL |  |  |
| dt_surgery_sinus_cb_size | double(15,2) | YES |  | NULL |  |  |
| dt_surgery_sinus_int_size | double(15,2) | YES |  | NULL |  |  |
| dt_surgery_sinus_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_surgery_main10 | dt_surgery_main_id | no | 1 |
| PRIMARY | dt_surgery_sinus_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
