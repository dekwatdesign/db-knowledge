# `dw_table_sync_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dw_table_sync_list_id | int(11) | NO | PRI | 0 |  |  |
| dw_table_sync_name | varchar(250) | YES | UNI | NULL |  |  |
| dw_table_sync_mode_id | int(11) | YES |  | NULL |  |  |
| param1 | varchar(150) | YES |  | NULL |  |  |
| param2 | varchar(150) | YES |  | NULL |  |  |
| param3 | varchar(150) | YES |  | NULL |  |  |
| order_number | double(15,3) | YES |  | NULL |  |  |
| check_modified_log | char(1) | YES |  | NULL |  |  |
| clean_guid | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dw_table_sync_name | dw_table_sync_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dw_table_sync_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dw_table_sync_list_id": 3,
    "dw_table_sync_name": "pttype",
    "dw_table_sync_mode_id": 1,
    "param1": "pttype_guid",
    "param2": null,
    "param3": null,
    "order_number": 0.0,
    "check_modified_log": null,
    "clean_guid": null,
    "hos_guid": null
  },
  {
    "dw_table_sync_list_id": 4,
    "dw_table_sync_name": "spclty",
    "dw_table_sync_mode_id": 1,
    "param1": "spclty_guid",
    "param2": null,
    "param3": null,
    "order_number": 0.0,
    "check_modified_log": null,
    "clean_guid": null,
    "hos_guid": null
  },
  {
    "dw_table_sync_list_id": 5,
    "dw_table_sync_name": "doctor",
    "dw_table_sync_mode_id": 1,
    "param1": "doctor_guid",
    "param2": null,
    "param3": null,
    "order_number": 0.0,
    "check_modified_log": null,
    "clean_guid": null,
    "hos_guid": null
  },
  {
    "dw_table_sync_list_id": 6,
    "dw_table_sync_name": "clinic",
    "dw_table_sync_mode_id": 1,
    "param1": "clinic_guid",
    "param2": null,
    "param3": null,
    "order_number": 0.0,
    "check_modified_log": null,
    "clean_guid": null,
    "hos_guid": null
  },
  {
    "dw_table_sync_list_id": 7,
    "dw_table_sync_name": "drugitems",
    "dw_table_sync_mode_id": 2,
    "param1": "icode_guid",
    "param2": null,
    "param3": null,
    "order_number": 0.0,
    "check_modified_log": null,
    "clean_guid": null,
    "hos_guid": null
  },
  {
    "dw_table_sync_list_id": 8,
    "dw_table_sync_name": "nondrugitems",
    "dw_table_sync_mode_id": 2,
    "param1": "icode_guid",
    "param2": null,
    "param3": null,
    "order_number": 0.0,
    "check_modified_log": null,
    "clean_guid": null,
    "hos_guid": null
  },
  {
    "dw_table_sync_list_id": 9,
    "dw_table_sync_name": "s_drugitems",
    "dw_table_sync_mode_id": 1,
    "param1": "icode_guid",
    "param2": null,
    "param3": null,
    "order_number": 0.0,
    "check_modified_log": null,
    "clean_guid": null,
    "hos_guid": null
  },
  {
    "dw_table_sync_list_id": 10,
    "dw_table_sync_name": "income",
    "dw_table_sync_mode_id": 1,
    "param1": "income_guid",
    "param2": null,
    "param3": null,
    "order_number": 0.0,
    "check_modified_log": null,
    "clean_guid": null,
    "hos_guid": null
  }
]
```
