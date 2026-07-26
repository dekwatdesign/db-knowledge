# `dt_endo_clinic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_endo_clinic_id | int(11) | NO | PRI | 0 |  |  |
| dt_endo_clinic_wnl_chk | char(1) | YES |  | NULL |  |  |
| dt_endo_clinic_wnl_grp_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_clinic_m1 | int(11) | YES |  | NULL |  |  |
| dt_endo_clinic_m2 | int(11) | YES |  | NULL |  |  |
| dt_endo_clinic_m3 | int(11) | YES |  | NULL |  |  |
| dt_endo_clinic_bli1 | int(11) | YES |  | NULL |  |  |
| dt_endo_clinic_bli2 | int(11) | YES |  | NULL |  |  |
| dt_endo_clinic_d1 | int(11) | YES |  | NULL |  |  |
| dt_endo_clinic_d2 | int(11) | YES |  | NULL |  |  |
| dt_endo_clinic_d3 | int(11) | YES |  | NULL |  |  |
| dt_endo_clinic_wnl2_chk | char(1) | YES |  | NULL |  |  |
| dt_endo_clinic_wnl2_grp_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_clinic_wnl2_grp2_chk | varchar(20) | YES |  | NULL |  |  |
| dt_endo_clinic_res_chk | varchar(1) | YES |  | NULL |  |  |
| dt_endo_clinic_note1 | text | YES |  | NULL |  |  |
| dt_endo_clinic_note2 | text | YES |  | NULL |  |  |
| dt_endo_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_endo_main28 | dt_endo_main_id | no | 1 |
| PRIMARY | dt_endo_clinic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
