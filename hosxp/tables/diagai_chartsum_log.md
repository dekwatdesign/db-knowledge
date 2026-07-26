# `diagai_chartsum_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| diagai_chartsum_log_id | int(11) | NO | PRI | 0 |  |  |
| diagai_chartsum_log_an | varchar(9) | YES | UNI | NULL |  |  |
| diagai_chartsum_log_message | varchar(50) | YES |  | NULL |  |  |
| diagai_chartsum_log_code | int(11) | YES |  | NULL |  |  |
| diagai_chartsum_log_response | text | YES |  | NULL |  |  |
| diagai_chartsum_log_created_at | datetime | YES |  | NULL |  |  |
| diagai_chartsum_log_updated_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_diagai_chartsum_log_an | diagai_chartsum_log_an | yes | 1 |
| PRIMARY | diagai_chartsum_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
