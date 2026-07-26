# `dt_endo_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_endo_sub_id | int(11) | NO | PRI | 0 |  |  |
| dt_endo_sub_non_chk | char(1) | YES |  | NULL |  |  |
| dt_endo_sub_note | longtext | YES |  | NULL |  |  |
| dt_endo_sub_inexchk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_sub_restoration_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_sub_restoration_note | varchar(100) | YES |  | NULL |  |  |
| dt_endo_sub_intensity_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_sub_location_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_sub_chonology_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_sub_quality_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_sub_onset_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_sub_onset2_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_sub_reliev_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_sub_inception_day | int(11) | YES |  | NULL |  |  |
| dt_endo_sub_inception_month | int(11) | YES |  | NULL |  |  |
| dt_endo_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_endo_main45 | dt_endo_main_id | no | 1 |
| PRIMARY | dt_endo_sub_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
