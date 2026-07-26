# `ovst_fee_schedule_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(12) | NO | PRI |  |  |  |
| fee_schedule_list_text | varchar(250) | YES |  | NULL |  |  |
| data_ok | char(1) | YES |  | NULL |  |  |
| data_error_desc | varchar(3000) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "670102103247",
    "fee_schedule_list_text": "",
    "data_ok": null,
    "data_error_desc": null
  },
  {
    "vn": "670102124129",
    "fee_schedule_list_text": "",
    "data_ok": null,
    "data_error_desc": null
  },
  {
    "vn": "670102124532",
    "fee_schedule_list_text": "",
    "data_ok": null,
    "data_error_desc": null
  },
  {
    "vn": "670102110004",
    "fee_schedule_list_text": "",
    "data_ok": null,
    "data_error_desc": null
  },
  {
    "vn": "670102075500",
    "fee_schedule_list_text": "",
    "data_ok": null,
    "data_error_desc": null
  },
  {
    "vn": "670102075813",
    "fee_schedule_list_text": "",
    "data_ok": null,
    "data_error_desc": null
  },
  {
    "vn": "670102090026",
    "fee_schedule_list_text": "",
    "data_ok": null,
    "data_error_desc": null
  },
  {
    "vn": "670102123511",
    "fee_schedule_list_text": "",
    "data_ok": null,
    "data_error_desc": null
  }
]
```
