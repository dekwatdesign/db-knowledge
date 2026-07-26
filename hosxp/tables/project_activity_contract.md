# `project_activity_contract`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_activity_contract_id | int(11) | NO | PRI | 0 |  |  |
| project_activity_id | int(11) | YES |  | NULL |  |  |
| project_company_id | int(11) | YES |  | NULL |  |  |
| contract_no | varchar(200) | YES |  | NULL |  |  |
| contract_start_date | date | YES |  | NULL |  |  |
| contract_finish_date | date | YES |  | NULL |  |  |
| contract_budget | double(15,3) | YES |  | NULL |  |  |
| contract_detail_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | project_activity_contract_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
