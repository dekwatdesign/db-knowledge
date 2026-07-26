# `api_access_log_subject`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| api_access_log_subject_id | int(11) | NO | PRI | 0 |  |  |
| api_access_log_id | bigint(20) | YES | MUL | NULL |  |  |
| subject_hash | char(64) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_alsubj_hash | api_access_log_id | no | 1 |
| ix_alsubj_hash | subject_hash | no | 2 |
| ix_alsubj_log | api_access_log_id | no | 1 |
| PRIMARY | api_access_log_subject_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
