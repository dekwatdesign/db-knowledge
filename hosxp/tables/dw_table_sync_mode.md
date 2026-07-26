# `dw_table_sync_mode`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dw_table_sync_mode_id | int(11) | NO | PRI | 0 |  |  |
| dw_table_sync_mode_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dw_table_sync_mode_name | dw_table_sync_mode_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dw_table_sync_mode_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "dw_table_sync_mode_id": 1,
    "dw_table_sync_mode_name": "FULL",
    "hos_guid": null
  },
  {
    "dw_table_sync_mode_id": 2,
    "dw_table_sync_mode_name": "MD5 Split",
    "hos_guid": null
  },
  {
    "dw_table_sync_mode_id": 3,
    "dw_table_sync_mode_name": "Date",
    "hos_guid": null
  },
  {
    "dw_table_sync_mode_id": 4,
    "dw_table_sync_mode_name": "HN",
    "hos_guid": null
  }
]
```
