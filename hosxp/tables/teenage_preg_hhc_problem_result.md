# `teenage_preg_hhc_problem_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_hhc_problem_result_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_plan_problem_list_id | int(11) | YES | MUL | NULL |  |  |
| teenage_preg_hhc_id | int(11) | YES | MUL | NULL |  |  |
| teenage_preg_hhc_problem_result_text | varchar(250) | YES |  | NULL |  |  |
| teenage_preg_plan_problem_result_text | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Refteenage_preg_hhc762 | teenage_preg_hhc_id | no | 1 |
| ix_Refteenage_preg_problem_list752 | teenage_preg_plan_problem_list_id | no | 1 |
| PRIMARY | teenage_preg_hhc_problem_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
