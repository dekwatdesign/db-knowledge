# `activity_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| activity_status_id | int(11) | NO | PRI | 0 |  |  |
| activity_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_activity_status_name | activity_status_name | yes | 1 |
| PRIMARY | activity_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
