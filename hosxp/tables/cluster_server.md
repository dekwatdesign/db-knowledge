# `cluster_server`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| server_id | int(11) | NO | PRI | 0 |  |  |
| cluster_hostname | varchar(100) | YES | MUL | NULL |  |  |
| cluster_database | varchar(100) | YES | MUL | NULL |  |  |
| cluster_user | varchar(100) | YES |  | NULL |  |  |
| cluster_password | varchar(100) | YES |  | NULL |  |  |
| cluster_protocol | varchar(20) | YES |  | NULL |  |  |
| transaction_wait | int(11) | YES |  | NULL |  |  |
| readonly | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cluster | cluster_hostname | yes | 1 |
| ix_cluster | cluster_database | yes | 2 |
| ix_cluster_index | cluster_database | yes | 1 |
| ix_cluster_index | cluster_hostname | yes | 2 |
| ix_hostname | cluster_hostname | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | server_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
