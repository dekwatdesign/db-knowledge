# `stock_app_version`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_app_version_id | int(11) | NO | PRI | 0 |  |  |
| stock_app_version_name | varchar(200) | YES | UNI | NULL |  |  |
| release_date | date | YES |  | NULL |  |  |
| default_version | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_app_version_name | stock_app_version_name | yes | 1 |
| PRIMARY | stock_app_version_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
