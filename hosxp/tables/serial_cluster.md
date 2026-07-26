# `serial_cluster`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| serial_cluster_id | int(11) | NO | PRI | 0 |  |  |
| serial_name | varchar(200) | YES | MUL | NULL |  |  |
| serial_no | int(11) | YES |  | NULL |  |  |
| serial_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | serial_name | yes | 1 |
| ix_unique | serial_no | yes | 2 |
| PRIMARY | serial_cluster_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
