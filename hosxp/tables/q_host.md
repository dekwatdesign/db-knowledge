# `q_host`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| host_id | int(11) | NO | PRI | 0 |  |  |
| host_place | varchar(200) | YES |  | NULL |  |  |
| host_ip | varchar(200) | YES |  | NULL |  |  |
| host_port | int(11) | YES |  | NULL |  |  |
| active_status | varchar(1) | YES |  | NULL |  |  |
| repeat_loop | int(11) | YES |  | NULL |  |  |
| client_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | host_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
