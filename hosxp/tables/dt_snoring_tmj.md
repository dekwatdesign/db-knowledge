# `dt_snoring_tmj`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_snoring_tmj_id | int(11) | NO | PRI | 0 |  |  |
| dt_snoring_tmj_opening_txt1 | varchar(100) | YES |  | NULL |  |  |
| dt_snoring_tmj_opening | varchar(100) | YES |  | NULL |  |  |
| dt_snoring_tmj_vertical | double(11,2) | YES |  | NULL |  |  |
| dt_snoring_tmj_soundr | double(11,2) | YES |  | NULL |  |  |
| dt_snoring_tmj_soundr_note | varchar(100) | YES |  | NULL |  |  |
| dt_snoring_tmj_soundl | double(11,2) | YES |  | NULL |  |  |
| dt_snoring_tmj_soundl_note | varchar(100) | YES |  | NULL |  |  |
| dt_snoring_tmj_horizotal | double(11,2) | YES |  | NULL |  |  |
| dt_snoring_tmj_painfree | double(11,2) | YES |  | NULL |  |  |
| dt_snoring_tmj_assisted | char(10) | YES |  | NULL |  |  |
| dt_snoring_tmj_rlmovement | double(11,2) | YES |  | NULL |  |  |
| dt_snoring_tmj_llmovement | double(11,2) | YES |  | NULL |  |  |
| dt_snoring_tmj_protrusion | double(11,2) | YES |  | NULL |  |  |
| dt_snoring_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_snoring_tmj_opening_txt2 | varchar(100) | YES |  | NULL |  |  |
| dt_snoring_tmj_opening_txt3 | varchar(100) | YES |  | NULL |  |  |
| dt_snoring_tmj_opening_txt4 | varchar(100) | YES |  | NULL |  |  |
| dt_snoring_tmj_opening_txt5 | varchar(100) | YES |  | NULL |  |  |
| dt_snoring_tmj_opening_txt6 | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_snoring_main16 | dt_snoring_main_id | no | 1 |
| PRIMARY | dt_snoring_tmj_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
