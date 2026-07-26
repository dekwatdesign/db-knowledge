# `dt_pedia_exam_in`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_pedia_exam_in_id | int(11) | NO | PRI | 0 |  |  |
| dt_pedia_exam_in_st_lip | varchar(10) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_lip_note | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_sah | varchar(10) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_sah_note | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_bucc | varchar(10) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_bucc_note | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_tong | varchar(10) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_tong_note | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_fl | varchar(10) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_fl_note | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_fre | varchar(10) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_fre_note | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_vest | varchar(10) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_vest_note | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_tons | varchar(10) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_tons_note | varchar(50) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_gap_note | varchar(200) | YES |  | NULL |  |  |
| dt_pedia_exam_in_st_ht_note | varchar(200) | YES |  | NULL |  |  |
| dt_pedia_exam_in_oral_id | int(11) | YES | MUL | NULL |  |  |
| dt_pedia_exam_in_d_bio_id | int(11) | YES | MUL | NULL |  |  |
| dt_pedia_exam_in_d_calc_id | int(11) | YES | MUL | NULL |  |  |
| dt_pedia_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_pedia_exam_in_d_bio76 | dt_pedia_exam_in_d_bio_id | no | 1 |
| ix_Refdt_pedia_exam_in_d_calc77 | dt_pedia_exam_in_d_calc_id | no | 1 |
| ix_Refdt_pedia_exam_in_oral75 | dt_pedia_exam_in_oral_id | no | 1 |
| ix_Refdt_pedia_main103 | dt_pedia_main_id | no | 1 |
| PRIMARY | dt_pedia_exam_in_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
