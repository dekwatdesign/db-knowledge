# `stock_opitemrece_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_opitemrece_request_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(20) | YES | MUL | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| request_qty | int(11) | YES |  | NULL |  |  |
| request_ok | char(1) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |
| rx_no | int(11) | YES | MUL | NULL |  |  |
| stock_draw_list_id | int(11) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| request_datetime | datetime | YES |  | NULL |  |  |
| transfer_mark | char(1) | YES | MUL | NULL |  |  |
| request_note | varchar(250) | YES |  | NULL |  |  |
| transfer_department_id | int(11) | YES |  | NULL |  |  |
| lot_list | varchar(100) | YES |  | NULL |  |  |
| expire_list | varchar(100) | YES |  | NULL |  |  |
| process_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_guid | opi_guid | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vn_guid | vn | no | 1 |
| ix_vn_guid | opi_guid | no | 2 |
| ix_vn_guid_index | opi_guid | no | 1 |
| ix_vn_guid_index | vn | no | 2 |
| ix_vn_mark | vn | no | 1 |
| ix_vn_mark | transfer_mark | no | 2 |
| ix_vn_mark_index | transfer_mark | no | 1 |
| ix_vn_mark_index | vn | no | 2 |
| ix_vn_rxno | vn | no | 1 |
| ix_vn_rxno | rx_no | no | 2 |
| ix_vn_rxno_index | rx_no | no | 1 |
| ix_vn_rxno_index | vn | no | 2 |
| PRIMARY | stock_opitemrece_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "stock_opitemrece_request_id": 1,
    "vn": "580302090018",
    "department_id": 1,
    "item_id": 150,
    "request_qty": 5,
    "request_ok": "N",
    "opi_guid": "{F6163370-8AD7-4C52-8687-B41A3782602C}",
    "rx_no": null,
    "stock_draw_list_id": null,
    "depcode": null,
    "staff": null,
    "request_datetime": null,
    "transfer_mark": null,
    "request_note": null,
    "transfer_department_id": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  },
  {
    "stock_opitemrece_request_id": 2,
    "vn": "591005094242",
    "department_id": 1,
    "item_id": 98,
    "request_qty": 60,
    "request_ok": "N",
    "opi_guid": "{D5EB97F5-6D9D-4CE5-80D8-D1B9C19BAEAB}",
    "rx_no": null,
    "stock_draw_list_id": null,
    "depcode": null,
    "staff": null,
    "request_datetime": null,
    "transfer_mark": null,
    "request_note": null,
    "transfer_department_id": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  },
  {
    "stock_opitemrece_request_id": 3,
    "vn": "630106083054",
    "department_id": 1,
    "item_id": 98,
    "request_qty": 300,
    "request_ok": "N",
    "opi_guid": "{B28BEC57-29D2-4AAC-99FA-9919EB299BC2}",
    "rx_no": null,
    "stock_draw_list_id": null,
    "depcode": null,
    "staff": null,
    "request_datetime": null,
    "transfer_mark": null,
    "request_note": null,
    "transfer_department_id": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  },
  {
    "stock_opitemrece_request_id": 4,
    "vn": "640309093826",
    "department_id": 1,
    "item_id": 60,
    "request_qty": 30,
    "request_ok": "N",
    "opi_guid": "{0ADBF260-BDF2-4854-ABB7-1688AD4D6908}",
    "rx_no": null,
    "stock_draw_list_id": null,
    "depcode": null,
    "staff": null,
    "request_datetime": null,
    "transfer_mark": null,
    "request_note": null,
    "transfer_department_id": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  },
  {
    "stock_opitemrece_request_id": 5,
    "vn": "640309093826",
    "department_id": 1,
    "item_id": 44,
    "request_qty": 20,
    "request_ok": "N",
    "opi_guid": "{23C8FE8C-8CEA-4A9F-A41D-806DA6193BFD}",
    "rx_no": null,
    "stock_draw_list_id": null,
    "depcode": null,
    "staff": null,
    "request_datetime": null,
    "transfer_mark": null,
    "request_note": null,
    "transfer_department_id": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  },
  {
    "stock_opitemrece_request_id": 6,
    "vn": "640309093826",
    "department_id": 1,
    "item_id": 120,
    "request_qty": 30,
    "request_ok": "N",
    "opi_guid": "{D56805CF-341B-4CAC-82C6-F66562F7555A}",
    "rx_no": null,
    "stock_draw_list_id": null,
    "depcode": null,
    "staff": null,
    "request_datetime": null,
    "transfer_mark": null,
    "request_note": null,
    "transfer_department_id": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  },
  {
    "stock_opitemrece_request_id": 7,
    "vn": "640301060000",
    "department_id": 1,
    "item_id": 29,
    "request_qty": 120,
    "request_ok": "N",
    "opi_guid": "{50ECE7D2-CB7C-44E9-9D2A-B9D7D5A70DFA}",
    "rx_no": null,
    "stock_draw_list_id": null,
    "depcode": null,
    "staff": null,
    "request_datetime": null,
    "transfer_mark": null,
    "request_note": null,
    "transfer_department_id": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  },
  {
    "stock_opitemrece_request_id": 8,
    "vn": "640301060000",
    "department_id": 1,
    "item_id": 168,
    "request_qty": 120,
    "request_ok": "N",
    "opi_guid": "{1175C003-4F82-4B47-BBE0-21B46FE67570}",
    "rx_no": null,
    "stock_draw_list_id": null,
    "depcode": null,
    "staff": null,
    "request_datetime": null,
    "transfer_mark": null,
    "request_note": null,
    "transfer_department_id": null,
    "lot_list": null,
    "expire_list": null,
    "process_datetime": null
  }
]
```
