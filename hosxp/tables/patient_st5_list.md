# `patient_st5_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_st5_list_id | int(11) | NO | PRI | 0 |  |  |
| patient_st5_list_date | date | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(15) | YES |  | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| patient_st5_list_total | int(11) | YES |  | NULL |  |  |
| patient_st5_value_id | int(11) | YES |  | NULL |  |  |
| working_age_chk | char(1) | YES |  | NULL |  |  |
| prenatal_chk | char(1) | YES |  | NULL |  |  |
| postnatal_chk | char(1) | YES |  | NULL |  |  |
| patient_st5_score_crit_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_patient_st5_list_hn | hn | no | 1 |
| PRIMARY | patient_st5_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
