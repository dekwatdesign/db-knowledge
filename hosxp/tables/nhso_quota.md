# `nhso_quota`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| quota_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| quota_class_id | varchar(11) | YES |  | NULL |  |  |
| quota_class_name | varchar(200) | YES |  | NULL |  |  |
| quota_service_id | varchar(11) | YES |  | NULL |  |  |
| quota_service_name | varchar(50) | YES |  | NULL |  |  |
| quota_balance | char(1) | YES |  | NULL |  |  |
| quota_eligible_next_date | date | YES |  | NULL |  |  |
| quota_used | char(1) | YES |  | NULL |  |  |
| quota_package_target_group | varchar(50) | YES |  | NULL |  |  |
| quota_package_type | varchar(50) | YES |  | NULL |  |  |
| quota_service_type | varchar(50) | YES |  | NULL |  |  |
| quota_service_status | varchar(10) | YES |  | NULL |  |  |
| quota_start_date | date | YES |  | NULL |  |  |
| quota_end_date | date | YES |  | NULL |  |  |
| quota_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | quota_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
