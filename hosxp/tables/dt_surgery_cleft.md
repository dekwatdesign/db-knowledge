# `dt_surgery_cleft`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_surgery_cleft_id | int(11) | NO | PRI | 0 |  |  |
| dt_surgery_cleft_side_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_cleft_bi_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_cleft_com_chk | varchar(20) | YES |  | NULL |  |  |
| dt_surgery_cleft_location_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_cleft_fistular_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_cleft_size | varchar(150) | YES |  | NULL |  |  |
| dt_surgery_cleft_sur_tech | text | YES |  | NULL |  |  |
| dt_surgery_cleft_auto_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cleft_auto_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cleft_bone_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_cleft_bones_chk | varchar(50) | YES |  | NULL |  |  |
| dt_surgery_cleft_bones_agnote | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cleft_bones_xenote | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cleft_bones_apnote | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cleft_amount | decimal(10,0) | YES |  | NULL |  |  |
| dt_surgery_cleft_other_note | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cleft_com_note | text | YES |  | NULL |  |  |
| dt_surgery_cleft_addi_note | text | YES |  | NULL |  |  |
| dt_surgery_cleft_post_date | date | YES |  | NULL |  |  |
| dt_surgery_cleft_post_chk | varchar(100) | YES |  | NULL |  |  |
| dt_surgery_cleft_post_inarea | varchar(10) | YES |  | NULL |  |  |
| dt_surgery_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_surgery_cleft_date | date | YES |  | NULL |  |  |
| dt_surgery_cleft_add_date | date | YES |  | NULL |  |  |
| dt_surgery_cleft_edit_date | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_surgery_main6 | dt_surgery_main_id | no | 1 |
| PRIMARY | dt_surgery_cleft_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
