# `fp_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| fp_number | int(11) | YES | MUL | NULL |  |  |
| weight | tinyint(4) | YES |  | NULL |  |  |
| bp_systolic | tinyint(4) | YES |  | NULL |  |  |
| bp_diastolic | tinyint(4) | YES |  | NULL |  |  |
| vagina_cancer_test | char(1) | YES |  | NULL |  |  |
| drug_list | varchar(250) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| fp_code | tinyint(4) | YES |  | NULL |  |  |
| lmp | date | YES |  | NULL |  |  |
| albumin | varchar(50) | YES |  | NULL |  |  |
| fu_date | date | YES |  | NULL |  |  |
| breast_cancer_test | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fp_number | fp_number | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
