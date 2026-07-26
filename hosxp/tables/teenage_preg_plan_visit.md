# `teenage_preg_plan_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_plan_visit_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_plan_visit_no | int(11) | YES |  | NULL |  |  |
| teenage_preg_plan_visit_date | date | YES |  | NULL |  |  |
| teenage_preg_register_id | int(11) | YES |  | NULL |  |  |
| teenage_preg_lookup_visit_type_id | int(11) | YES |  | NULL |  |  |
| teenage_preg_plan_visit_status_visit | char(1) | YES |  | NULL |  |  |
| patient_hhc_plan_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_plan_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
