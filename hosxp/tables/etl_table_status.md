# `etl_table_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| table_name | varchar(200) | NO | PRI |  |  |  |
| total_record_count | int(11) | YES |  | NULL |  |  |
| send_record_count | int(11) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| last_complete | datetime | YES |  | NULL |  |  |
| complete_percent | double(15,3) | YES |  | NULL |  |  |
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
