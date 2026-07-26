# `nhso_benefit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| benefit_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| benefit_class_id | varchar(11) | YES |  | NULL |  |  |
| benefit_class_name | varchar(200) | YES |  | NULL |  |  |
| benefit_service_id | varchar(11) | YES |  | NULL |  |  |
| benefit_service_name | varchar(50) | YES |  | NULL |  |  |
| benefit_package_target_group | varchar(50) | YES |  | NULL |  |  |
| benefit_package_type | varchar(50) | YES |  | NULL |  |  |
| benefit_service_type | varchar(50) | YES |  | NULL |  |  |
| benefit_service_status | varchar(10) | YES |  | NULL |  |  |
| benefit_start_date | date | YES |  | NULL |  |  |
| benefit_end_date | date | YES |  | NULL |  |  |
| benefit_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | benefit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
