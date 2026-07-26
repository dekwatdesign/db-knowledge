# `anc_preg_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anc_number | int(11) | NO | PRI | 0 |  |  |
| preg_no | tinyint(4) | NO | PRI | 0 |  |  |
| delivery_date | date | YES |  | NULL |  |  |
| preg_age | tinyint(4) | YES |  | NULL |  |  |
| abnormal_symtom | varchar(250) | YES |  | NULL |  |  |
| delivery_type | varchar(100) | YES |  | NULL |  |  |
| delivery_location | varchar(200) | YES |  | NULL |  |  |
| post_delivery_symtom | varchar(250) | YES |  | NULL |  |  |
| baby_status | varchar(250) | YES |  | NULL |  |  |
| baby_sex | tinyint(4) | YES |  | NULL |  |  |
| baby_weight | int(11) | YES |  | NULL |  |  |
| baby_health_status | varchar(250) | YES |  | NULL |  |  |
| note | varchar(250) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | anc_number | yes | 1 |
| PRIMARY | preg_no | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
