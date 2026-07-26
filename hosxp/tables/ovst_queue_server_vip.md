# `ovst_queue_server_vip`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cid | char(13) | NO | PRI |  |  |  |
| hn | varchar(255) | YES |  | NULL |  |  |
| fullname | varchar(255) | YES |  | NULL |  |  |
| vip_type_id | int(11) | YES |  | NULL |  |  |
| expire_date | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | cid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
