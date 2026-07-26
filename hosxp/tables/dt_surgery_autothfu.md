# `dt_surgery_autothfu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_autothfu_id | int(11) | NO | PRI | 0 |  |  |
| dt_surgery_autothfu_date | date | YES |  | NULL |  |  |
| dt_surgery_autothfu_follow_chk | varchar(150) | YES |  | NULL |  |  |
| dt_surgery_autothfu_occlu_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_autothfu_occluc_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_autothfu_tooth_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_autothfu_surr_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_autothfu_vatal_chk | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_autothfu_vatal_value | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_autothfu_vatal_area | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_autothfu_vatal_value2 | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_autothfu_sur_note | text | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_surgery_autoth_id | int(11) | YES |  | NULL |  |  |
| dtarea | varchar(15) | YES |  | NULL |  |  |
| dt_surgery_autothfu_type_id | int(11) | YES |  | NULL |  |  |
| dt_surgery_autothfu_fol_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_surgery_main5 | dt_surgery_main_id | no | 1 |
| PRIMARY | dt_surgery_autothfu_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
