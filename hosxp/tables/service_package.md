# `service_package`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| service_package_id | int(11) | NO | PRI | 0 |  |  |
| service_package_name | varchar(200) | YES | UNI | NULL |  |  |
| service_package_visit_count | int(11) | YES |  | NULL |  |  |
| service_package_price | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_service_package_name | service_package_name | yes | 1 |
| PRIMARY | service_package_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
