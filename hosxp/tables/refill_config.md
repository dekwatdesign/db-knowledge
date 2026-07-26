# `refill_config`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| config_id | int(11) | NO | PRI | 0 |  |  |
| config_key | varchar(100) | YES | UNI | NULL |  |  |
| config_value | varchar(500) | YES |  | NULL |  |  |
| description | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_config_key | config_key | yes | 1 |
| PRIMARY | config_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
