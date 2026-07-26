# `cluster_trigger`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cluster_trigger_id | int(11) | NO | PRI | 0 |  |  |
| replicate_trigger_id | int(11) | YES |  | NULL |  |  |
| master_server | varchar(150) | YES |  | NULL |  |  |
| table_name | varchar(100) | YES |  | NULL |  |  |
| pkname1 | varchar(100) | YES |  | NULL |  |  |
| pkname2 | varchar(100) | YES |  | NULL |  |  |
| pkname3 | varchar(100) | YES |  | NULL |  |  |
| pkvalue1 | varchar(250) | YES |  | NULL |  |  |
| pkvalue2 | varchar(250) | YES |  | NULL |  |  |
| pkvalue3 | varchar(250) | YES |  | NULL |  |  |
| trigger_date | datetime | YES |  | NULL |  |  |
| data_type | varchar(15) | YES |  | NULL |  |  |
| data_type2 | varchar(15) | YES |  | NULL |  |  |
| data_type3 | varchar(15) | YES |  | NULL |  |  |
| sync_state | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sync_state | sync_state | no | 1 |
| PRIMARY | cluster_trigger_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
