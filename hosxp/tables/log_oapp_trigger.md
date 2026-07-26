# `log_oapp_trigger`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| replicate_trigger_id | int(11) | NO | PRI | 0 |  |  |
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
| lapp_name | varchar(100) | YES |  | NULL |  |  |
| lapp_user | varchar(25) | YES |  | NULL |  |  |
| lapp_computer | varchar(50) | YES |  | NULL |  |  |
| sync_state | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | replicate_trigger_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "replicate_trigger_id": 1,
    "table_name": "oapp",
    "pkname1": "oapp_id",
    "pkname2": null,
    "pkname3": null,
    "pkvalue1": "340535",
    "pkvalue2": null,
    "pkvalue3": null,
    "trigger_date": "2015-01-30 13:33:22",
    "data_type": "int",
    "data_type2": null,
    "data_type3": null,
    "lapp_name": "HOSMy.exe",
    "lapp_user": null,
    "lapp_computer": "HP-NAT2",
    "sync_state": 0
  },
  {
    "replicate_trigger_id": 2,
    "table_name": "oapp",
    "pkname1": "oapp_id",
    "pkname2": null,
    "pkname3": null,
    "pkvalue1": "347641",
    "pkvalue2": null,
    "pkvalue3": null,
    "trigger_date": "2015-01-30 13:34:10",
    "data_type": "int",
    "data_type2": null,
    "data_type3": null,
    "lapp_name": "HOSMy.exe",
    "lapp_user": null,
    "lapp_computer": "HP-NAT2",
    "sync_state": 0
  },
  {
    "replicate_trigger_id": 3,
    "table_name": "oapp",
    "pkname1": "oapp_id",
    "pkname2": null,
    "pkname3": null,
    "pkvalue1": "329216",
    "pkvalue2": null,
    "pkvalue3": null,
    "trigger_date": "2015-01-30 13:34:38",
    "data_type": "int",
    "data_type2": null,
    "data_type3": null,
    "lapp_name": "HOSMy.exe",
    "lapp_user": null,
    "lapp_computer": "HP-NAT2",
    "sync_state": 0
  },
  {
    "replicate_trigger_id": 4,
    "table_name": "oapp",
    "pkname1": "oapp_id",
    "pkname2": null,
    "pkname3": null,
    "pkvalue1": "340554",
    "pkvalue2": null,
    "pkvalue3": null,
    "trigger_date": "2015-01-30 13:35:02",
    "data_type": "int",
    "data_type2": null,
    "data_type3": null,
    "lapp_name": "HOSMy.exe",
    "lapp_user": null,
    "lapp_computer": "HP-NAT2",
    "sync_state": 0
  },
  {
    "replicate_trigger_id": 5,
    "table_name": "oapp",
    "pkname1": "oapp_id",
    "pkname2": null,
    "pkname3": null,
    "pkvalue1": "344935",
    "pkvalue2": null,
    "pkvalue3": null,
    "trigger_date": "2015-01-30 13:35:22",
    "data_type": "int",
    "data_type2": null,
    "data_type3": null,
    "lapp_name": "HOSMy.exe",
    "lapp_user": null,
    "lapp_computer": "HP-NAT2",
    "sync_state": 0
  },
  {
    "replicate_trigger_id": 6,
    "table_name": "oapp",
    "pkname1": "oapp_id",
    "pkname2": null,
    "pkname3": null,
    "pkvalue1": "350117",
    "pkvalue2": null,
    "pkvalue3": null,
    "trigger_date": "2015-01-30 13:35:42",
    "data_type": "int",
    "data_type2": null,
    "data_type3": null,
    "lapp_name": "HOSMy.exe",
    "lapp_user": null,
    "lapp_computer": "HP-NAT2",
    "sync_state": 0
  },
  {
    "replicate_trigger_id": 7,
    "table_name": "oapp",
    "pkname1": "oapp_id",
    "pkname2": null,
    "pkname3": null,
    "pkvalue1": "315671",
    "pkvalue2": null,
    "pkvalue3": null,
    "trigger_date": "2015-01-30 13:36:05",
    "data_type": "int",
    "data_type2": null,
    "data_type3": null,
    "lapp_name": "HOSMy.exe",
    "lapp_user": null,
    "lapp_computer": "HP-NAT2",
    "sync_state": 0
  },
  {
    "replicate_trigger_id": 8,
    "table_name": "oapp",
    "pkname1": "oapp_id",
    "pkname2": null,
    "pkname3": null,
    "pkvalue1": "329221",
    "pkvalue2": null,
    "pkvalue3": null,
    "trigger_date": "2015-01-30 13:36:30",
    "data_type": "int",
    "data_type2": null,
    "data_type3": null,
    "lapp_name": "HOSMy.exe",
    "lapp_user": null,
    "lapp_computer": "HP-NAT2",
    "sync_state": 0
  }
]
```
