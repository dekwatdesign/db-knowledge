# `enoc_process_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| enoc_process_status_id | int(11) | NO | PRI | 0 |  |  |
| enoc_process_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_enoc_process_status_name | enoc_process_status_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | enoc_process_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
