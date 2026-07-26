# `ckup_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_service_id | int(11) | NO | PRI | 0 |  |  |
| ckup_service_name | varchar(250) | YES |  | NULL |  |  |
| ckup_service_active | char(1) | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
