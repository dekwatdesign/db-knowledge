# `tb_emr_ipd_ipfs_file`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(10) | NO | PRI |  |  |  |
| hn | varchar(10) | NO | PRI |  |  |  |
| ipfs_file_hash | varchar(100) | NO | PRI |  |  |  |
| ipfs_file_name | varchar(255) | YES |  | NULL |  |  |
| ipfs_file_user | varchar(50) | NO | PRI |  |  |  |
| ipfs_file_type | varchar(50) | YES |  | NULL |  |  |
| ipfs_file_extension | varchar(20) | YES |  | NULL |  |  |
| ipfs_file_datetime | datetime | YES |  | NULL |  |  |
| key1 | varchar(20) | NO | PRI |  |  |  |
| key2 | varchar(20) | NO | PRI |  |  |  |
| key3 | varchar(20) | NO | PRI |  |  |  |
| ipfs_token_key | varchar(50) | NO | PRI |  |  |  |
| ipfs_file_delete_user | varchar(50) | YES |  | NULL |  |  |
| ipfs_file_delete_datetime | datetime | YES |  | NULL |  |  |
| emr_ipd_ipfs_file_status | char(2) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| emr_ipd_ipfs_file_status | emr_ipd_ipfs_file_status | no | 1 |
| hn | hn | no | 1 |
| ipfs_file_hash | ipfs_file_hash | no | 1 |
| ipfs_file_user | ipfs_file_user | no | 1 |
| key1 | key1 | no | 1 |
| key2 | key2 | no | 1 |
| key3 | key3 | no | 1 |
| PRIMARY | an | yes | 1 |
| PRIMARY | hn | yes | 2 |
| PRIMARY | ipfs_file_hash | yes | 3 |
| PRIMARY | ipfs_file_user | yes | 4 |
| PRIMARY | key1 | yes | 5 |
| PRIMARY | key2 | yes | 6 |
| PRIMARY | key3 | yes | 7 |
| PRIMARY | ipfs_token_key | yes | 8 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
