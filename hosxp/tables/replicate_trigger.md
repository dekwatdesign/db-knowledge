# `replicate_trigger`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| replicate_trigger_id | bigint(20) | NO | PRI | 0 |  |  |
| table_name | varchar(100) | YES | MUL | NULL |  |  |
| pkname1 | varchar(100) | YES | MUL | NULL |  |  |
| pkname2 | varchar(100) | YES |  | NULL |  |  |
| pkname3 | varchar(100) | YES |  | NULL |  |  |
| pkvalue1 | varchar(250) | YES |  | NULL |  |  |
| pkvalue2 | varchar(250) | YES |  | NULL |  |  |
| pkvalue3 | varchar(250) | YES |  | NULL |  |  |
| trigger_date | timestamp | YES |  | NULL |  |  |
| data_type | varchar(15) | YES |  | NULL |  |  |
| data_type2 | varchar(15) | YES |  | NULL |  |  |
| data_type3 | varchar(15) | YES |  | NULL |  |  |
| sync_state | int(11) | YES | MUL | NULL |  |  |
| sync_priority | char(1) | YES | MUL | NULL |  |  |
| modify_type | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_order | sync_priority | no | 1 |
| ix_order | replicate_trigger_id | no | 2 |
| ix_order_index | replicate_trigger_id | no | 1 |
| ix_order_index | sync_priority | no | 2 |
| ix_replicate_trigger_tablename | table_name | no | 1 |
| ix_replicate_trigger_tablename | pkname1 | no | 2 |
| ix_replicate_trigger_tablename | pkvalue1 | no | 3 |
| ix_replicate_trigger_tablename | sync_state | no | 4 |
| ix_replicate_trigger_tablename_index | pkname1 | no | 1 |
| ix_replicate_trigger_tablename_index | pkvalue1 | no | 2 |
| ix_replicate_trigger_tablename_index | sync_state | no | 3 |
| ix_replicate_trigger_tablename_index | table_name | no | 4 |
| ix_sync_state | sync_state | no | 1 |
| PRIMARY | replicate_trigger_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
