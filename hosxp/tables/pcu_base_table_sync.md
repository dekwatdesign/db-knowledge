# `pcu_base_table_sync`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| table_name | varchar(150) | NO | PRI |  |  |  |
| local_table_name | varchar(150) | YES |  | NULL |  |  |
| key_name | varchar(150) | YES |  | NULL |  |  |
| mark_delete | char(1) | YES |  | NULL |  |  |
| mark_refresh | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | table_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
