# `cancer_register_home_visit_recommend`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_register_home_visit_recommend_id | int(11) | NO | PRI | 0 |  |  |
| cancer_register_home_visit_recommend_date | date | YES |  | NULL |  |  |
| cancer_register_home_visit_recommend_note | varchar(255) | YES |  | NULL |  |  |
| cancer_register_home_visit_recommend_by_doctor | char(1) | YES |  | NULL |  |  |
| cancer_register_home_visit_recommend_by_nurse | char(1) | YES |  | NULL |  |  |
| cancer_register_home_visit_recommend_by_nutritionist | char(1) | YES |  | NULL |  |  |
| cancer_register_home_visit_recommend_by_physical | char(1) | YES |  | NULL |  |  |
| cancer_register_home_visit_recommend_by_multidisciplinary | char(1) | YES |  | NULL |  |  |
| doctor_code | char(7) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| cancer_register_home_visit_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_register_home_visit_recommend_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
