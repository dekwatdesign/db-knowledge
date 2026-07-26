# `dt_endo_inv`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_endo_inv_id | int(11) | NO | PRI | 0 |  |  |
| dt_endo_inv_non_chk | char(1) | YES |  | NULL |  |  |
| dt_endo_inv_note | longtext | YES |  | NULL |  |  |
| dt_endo_inv_inexchk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_inv_intensity_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_inv_location_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_inv_chonology_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_inv_quality_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_inv_onset_chk | varchar(100) | YES |  | NULL |  |  |
| dt_endo_inv_onset2_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_inv_reliev_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_inv_inception_day | int(11) | YES |  | NULL |  |  |
| dt_endo_inv_inception_month | int(11) | YES |  | NULL |  |  |
| dt_endo_no_root_canal | int(11) | YES |  | NULL |  |  |
| dtarea_code | varchar(10) | YES |  | NULL |  |  |
| dt_endo_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_endo_main29 | dt_endo_main_id | no | 1 |
| PRIMARY | dt_endo_inv_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
