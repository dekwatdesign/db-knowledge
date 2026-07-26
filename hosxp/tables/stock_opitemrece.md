# `stock_opitemrece`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_opitemrece_id | int(11) | NO | PRI | 0 |  |  |
| stock_draw_list_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| dep | char(1) | YES |  | NULL |  |  |
| cost | double(15,5) | YES |  | NULL |  |  |
| ipt_order_no | int(11) | YES |  | NULL |  |  |
| status_appove_data | char(1) | YES |  | NULL |  |  |
| sp_status | char(1) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| request_qty | int(11) | YES |  | NULL |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| request_date | date | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| tpu_code | varchar(6) | YES |  | NULL |  |  |
| lot_list | varchar(200) | YES |  | NULL |  |  |
| expire_list | varchar(200) | YES |  | NULL |  |  |
| process_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hos_guid | hos_guid | no | 1 |
| ix_ix_vn | vn | no | 1 |
| ix_opi_guid_unique | opi_guid | yes | 1 |
| ix_request | department_id | no | 1 |
| ix_request | item_id | no | 2 |
| ix_request | sp_status | no | 3 |
| ix_request | request_date | no | 4 |
| ix_request_index | department_id | no | 1 |
| ix_request_index | item_id | no | 2 |
| ix_request_index | request_date | no | 3 |
| ix_request_index | sp_status | no | 4 |
| ix_stock_draw_list_id | stock_draw_list_id | no | 1 |
| PRIMARY | stock_opitemrece_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "stock_opitemrece_id": 18,
    "stock_draw_list_id": null,
    "hos_guid": "{F6163370-8AD7-4C52-8687-B41A3782602C}",
    "qty": null,
    "vn": "580302090018",
    "dep": null,
    "cost": null,
    "ipt_order_no": null,
    "status_appove_data": null,
    "sp_status": "N",
    "opi_guid": "{F6163370-8AD7-4C52-8687-B41A3782602C}",
    "request_qty": 5,
    "department_id": 1,
    "item_id": 150,
    "request_date": "2015-03-03",
    "remain_qty": null,
    "tpu_code": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  },
  {
    "stock_opitemrece_id": 26,
    "stock_draw_list_id": null,
    "hos_guid": "{D5EB97F5-6D9D-4CE5-80D8-D1B9C19BAEAB}",
    "qty": 0,
    "vn": "591005094242",
    "dep": null,
    "cost": null,
    "ipt_order_no": null,
    "status_appove_data": null,
    "sp_status": "N",
    "opi_guid": "{D5EB97F5-6D9D-4CE5-80D8-D1B9C19BAEAB}",
    "request_qty": 60,
    "department_id": 1,
    "item_id": 98,
    "request_date": "2016-11-03",
    "remain_qty": null,
    "tpu_code": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  },
  {
    "stock_opitemrece_id": 33,
    "stock_draw_list_id": null,
    "hos_guid": "{A87AFE92-1AF6-42B4-BED3-300FC43268C6}",
    "qty": null,
    "vn": "600831083038",
    "dep": null,
    "cost": null,
    "ipt_order_no": null,
    "status_appove_data": null,
    "sp_status": "N",
    "opi_guid": "{A87AFE92-1AF6-42B4-BED3-300FC43268C6}",
    "request_qty": 120,
    "department_id": 1,
    "item_id": 98,
    "request_date": "2017-08-31",
    "remain_qty": null,
    "tpu_code": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  },
  {
    "stock_opitemrece_id": 34,
    "stock_draw_list_id": null,
    "hos_guid": "{59067A13-DE0F-4C87-92E8-7CBE831DFBC6}",
    "qty": null,
    "vn": "600831103024",
    "dep": null,
    "cost": null,
    "ipt_order_no": null,
    "status_appove_data": null,
    "sp_status": "N",
    "opi_guid": "{59067A13-DE0F-4C87-92E8-7CBE831DFBC6}",
    "request_qty": 60,
    "department_id": 1,
    "item_id": 98,
    "request_date": "2017-08-31",
    "remain_qty": null,
    "tpu_code": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  },
  {
    "stock_opitemrece_id": 42,
    "stock_draw_list_id": null,
    "hos_guid": "{AD73E1CF-D607-46FD-A5B7-19F1730C0122}",
    "qty": null,
    "vn": "600831081328",
    "dep": null,
    "cost": null,
    "ipt_order_no": null,
    "status_appove_data": null,
    "sp_status": "N",
    "opi_guid": "{AD73E1CF-D607-46FD-A5B7-19F1730C0122}",
    "request_qty": 20,
    "department_id": 1,
    "item_id": 73,
    "request_date": "2017-08-31",
    "remain_qty": null,
    "tpu_code": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  },
  {
    "stock_opitemrece_id": 43,
    "stock_draw_list_id": null,
    "hos_guid": "{BE87FB7F-1259-4C40-9D2C-D014B6E2CD39}",
    "qty": null,
    "vn": "600831081328",
    "dep": null,
    "cost": null,
    "ipt_order_no": null,
    "status_appove_data": null,
    "sp_status": "N",
    "opi_guid": "{BE87FB7F-1259-4C40-9D2C-D014B6E2CD39}",
    "request_qty": 10,
    "department_id": 1,
    "item_id": 144,
    "request_date": "2017-08-31",
    "remain_qty": null,
    "tpu_code": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  },
  {
    "stock_opitemrece_id": 57,
    "stock_draw_list_id": null,
    "hos_guid": "{0EF43032-8E14-4396-9C74-0313A50B3307}",
    "qty": null,
    "vn": "600831100016",
    "dep": null,
    "cost": null,
    "ipt_order_no": null,
    "status_appove_data": null,
    "sp_status": "N",
    "opi_guid": "{0EF43032-8E14-4396-9C74-0313A50B3307}",
    "request_qty": 30,
    "department_id": 1,
    "item_id": 155,
    "request_date": "2017-08-31",
    "remain_qty": null,
    "tpu_code": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  },
  {
    "stock_opitemrece_id": 59,
    "stock_draw_list_id": null,
    "hos_guid": "{3F805B24-29B5-4929-AA80-5B619339B8F0}",
    "qty": null,
    "vn": "600831100016",
    "dep": null,
    "cost": null,
    "ipt_order_no": null,
    "status_appove_data": null,
    "sp_status": "N",
    "opi_guid": "{3F805B24-29B5-4929-AA80-5B619339B8F0}",
    "request_qty": 60,
    "department_id": 1,
    "item_id": 98,
    "request_date": "2017-08-31",
    "remain_qty": null,
    "tpu_code": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  }
]
```
