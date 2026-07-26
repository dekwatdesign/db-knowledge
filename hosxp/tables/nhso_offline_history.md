# `nhso_offline_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| staff_check | varchar(50) | YES |  | NULL |  |  |
| check_time | datetime | YES |  | NULL |  |  |
| mht_content | longblob | YES |  | NULL |  |  |
| url | varchar(200) | YES |  | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
