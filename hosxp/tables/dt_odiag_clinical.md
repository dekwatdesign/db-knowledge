# `dt_odiag_clinical`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_odiag_clinical_id | int(11) | NO | PRI | 0 |  |  |
| dt_odiag_clinical_gen | char(1) | YES |  | NULL |  |  |
| dt_odiag_clinical_gen_note | varchar(150) | YES |  | NULL |  |  |
| dt_odiag_clinical_extra | char(1) | YES |  | NULL |  |  |
| dt_odiag_clinical_extra_note | text | YES |  | NULL |  |  |
| dt_odiag_clinical_lip | char(1) | YES |  | NULL |  |  |
| dt_odiag_clinical_lip_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_clinical_soft | char(1) | YES |  | NULL |  |  |
| dt_odiag_clinical_soft_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_clinical_bacc | char(1) | YES |  | NULL |  |  |
| dt_odiag_clinical_bacc_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_clinical_tong | char(1) | YES |  | NULL |  |  |
| dt_odiag_clinical_tong_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_clinical_floor | char(1) | YES |  | NULL |  |  |
| dt_odiag_clinical_floor_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_clinical_fren | char(1) | YES |  | NULL |  |  |
| dt_odiag_clinical_fren_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_clinical_vesti | char(1) | YES |  | NULL |  |  |
| dt_odiag_clinical_vesti_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_clinical_tonsil | char(1) | YES |  | NULL |  |  |
| dt_odiag_clinical_tonsil_note | varchar(100) | YES |  | NULL |  |  |
| dt_odiag_clinical_intra_note | text | YES |  | NULL |  |  |
| dt_oral_hygiene_id | int(11) | YES |  | NULL |  |  |
| dt_odiag_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_odiag1 | dt_odiag_main_id | no | 1 |
| PRIMARY | dt_odiag_clinical_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
