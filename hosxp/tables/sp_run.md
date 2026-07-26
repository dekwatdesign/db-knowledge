# `sp_run`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sp_run_id | int(11) | NO | PRI | 0 |  |  |
| sp_run_name | varchar(200) | YES | MUL | NULL |  |  |
| sp_run_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | sp_run_name | no | 1 |
| PRIMARY | sp_run_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
