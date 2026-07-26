# `project_company`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_company_id | int(11) | NO | PRI | 0 |  |  |
| project_company_name | varchar(200) | YES | UNI | NULL |  |  |
| authorized_capital | double(15,3) | YES |  | NULL |  |  |
| project_company_start_date | date | YES |  | NULL |  |  |
| project_company_addr1 | varchar(200) | YES |  | NULL |  |  |
| project_company_addr2 | varchar(200) | YES |  | NULL |  |  |
| project_company_addr3 | varchar(200) | YES |  | NULL |  |  |
| project_company_chwpart | char(2) | YES |  | NULL |  |  |
| project_company_amppart | char(2) | YES |  | NULL |  |  |
| project_company_tmbpart | char(2) | YES |  | NULL |  |  |
| project_company_phone | varchar(200) | YES |  | NULL |  |  |
| project_company_fax | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_project_company_name | project_company_name | yes | 1 |
| PRIMARY | project_company_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
