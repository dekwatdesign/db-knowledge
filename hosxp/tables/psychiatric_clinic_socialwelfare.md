# `psychiatric_clinic_socialwelfare`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_clinic_socialwelfare_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_first | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_duplicate | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_number | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_inform | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_inform_relation | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_inform_tel | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_cause | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_brotherhood | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_remark | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_slant | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_resource_id_5 | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_problem_id_6 | char(11) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_id_7 | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_id_8 | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_estimate | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_comment | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_staff | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_date | date | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_1 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_1_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_2 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_3 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_4 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_4_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_5 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_5_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_6 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_6_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_7 | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_7_text | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_8 | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_seq | int(11) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_solve_date | date | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_family_relation | varchar(250) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_law | char(1) | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_educate | text | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_occupation | text | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_marrylife | text | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_father_detail | text | YES |  | NULL |  |  |
| psychiatric_clinic_socialwelfare_mother_detail | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_clinic_socialwelfare_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
