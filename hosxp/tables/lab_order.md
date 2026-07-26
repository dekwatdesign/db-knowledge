# `lab_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_order_number | int(11) | NO | PRI | 0 |  |  |
| lab_items_code | int(11) | NO | PRI | 0 |  |  |
| lab_order_result | varchar(250) | YES |  | NULL |  |  |
| lab_order_remark | varchar(250) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| confirm | char(1) | YES |  | NULL |  |  |
| lab_items_name_ref | varchar(250) | YES |  | NULL |  |  |
| lab_items_normal_value_ref | varchar(150) | YES |  | NULL |  |  |
| specimen_code | int(11) | YES |  | NULL |  |  |
| lab_items_sub_group_code | int(11) | YES |  | NULL |  |  |
| order_type | char(1) | YES |  | NULL |  |  |
| item_cost | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| staff_lock_result | char(1) | YES |  | NULL |  |  |
| laborder_date | date | YES | MUL | NULL |  |  |
| abnormal_result | char(1) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| check_key | varchar(50) | YES |  | NULL |  |  |
| lab_result_status | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| lab_hist_compare_type_id | int(11) | YES |  | NULL |  |  |
| printed | char(1) | YES |  | NULL |  |  |
| printed_datetime | datetime | YES |  | NULL |  |  |
| critical_result | char(1) | YES |  | NULL |  |  |
| check_key_a | varchar(50) | YES |  | NULL |  |  |
| send_notify | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_laborder_date | laborder_date | no | 1 |
| ix_lab_items_code | lab_items_code | no | 1 |
| lab_order_number | lab_order_number | no | 1 |
| PRIMARY | lab_order_number | yes | 1 |
| PRIMARY | lab_items_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_order_number": 239,
    "lab_items_code": 8,
    "lab_order_result": "7.0",
    "lab_order_remark": null,
    "staff": null,
    "confirm": "Y",
    "lab_items_name_ref": "Total protien",
    "lab_items_normal_value_ref": "",
    "specimen_code": null,
    "lab_items_sub_group_code": 9,
    "order_type": "A",
    "item_cost": null,
    "hos_guid": null,
    "staff_lock_result": "N",
    "laborder_date": null,
    "abnormal_result": null,
    "hos_guid_ext": null,
    "check_key": null,
    "lab_result_status": null,
    "update_datetime": null,
    "lab_hist_compare_type_id": null,
    "printed": null,
    "printed_datetime": null,
    "critical_result": null,
    "check_key_a": null,
    "send_notify": null
  },
  {
    "lab_order_number": 239,
    "lab_items_code": 9,
    "lab_order_result": "4.4",
    "lab_order_remark": null,
    "staff": null,
    "confirm": "Y",
    "lab_items_name_ref": "Albumin",
    "lab_items_normal_value_ref": "",
    "specimen_code": 0,
    "lab_items_sub_group_code": 9,
    "order_type": "A",
    "item_cost": null,
    "hos_guid": null,
    "staff_lock_result": "N",
    "laborder_date": null,
    "abnormal_result": null,
    "hos_guid_ext": null,
    "check_key": null,
    "lab_result_status": null,
    "update_datetime": null,
    "lab_hist_compare_type_id": null,
    "printed": null,
    "printed_datetime": null,
    "critical_result": null,
    "check_key_a": null,
    "send_notify": null
  },
  {
    "lab_order_number": 239,
    "lab_items_code": 10,
    "lab_order_result": "2.6",
    "lab_order_remark": null,
    "staff": null,
    "confirm": "Y",
    "lab_items_name_ref": "Globulin",
    "lab_items_normal_value_ref": "",
    "specimen_code": 0,
    "lab_items_sub_group_code": 9,
    "order_type": "A",
    "item_cost": null,
    "hos_guid": null,
    "staff_lock_result": "N",
    "laborder_date": null,
    "abnormal_result": null,
    "hos_guid_ext": null,
    "check_key": null,
    "lab_result_status": null,
    "update_datetime": null,
    "lab_hist_compare_type_id": null,
    "printed": null,
    "printed_datetime": null,
    "critical_result": null,
    "check_key_a": null,
    "send_notify": null
  },
  {
    "lab_order_number": 239,
    "lab_items_code": 11,
    "lab_order_result": "15",
    "lab_order_remark": null,
    "staff": null,
    "confirm": "Y",
    "lab_items_name_ref": "AST (SGOT)",
    "lab_items_normal_value_ref": "0-40",
    "specimen_code": 0,
    "lab_items_sub_group_code": 9,
    "order_type": "A",
    "item_cost": null,
    "hos_guid": null,
    "staff_lock_result": "N",
    "laborder_date": null,
    "abnormal_result": null,
    "hos_guid_ext": null,
    "check_key": null,
    "lab_result_status": null,
    "update_datetime": null,
    "lab_hist_compare_type_id": null,
    "printed": null,
    "printed_datetime": null,
    "critical_result": null,
    "check_key_a": null,
    "send_notify": null
  },
  {
    "lab_order_number": 239,
    "lab_items_code": 12,
    "lab_order_result": "14",
    "lab_order_remark": null,
    "staff": null,
    "confirm": "Y",
    "lab_items_name_ref": "ALT (SGPT)",
    "lab_items_normal_value_ref": "",
    "specimen_code": null,
    "lab_items_sub_group_code": 9,
    "order_type": "A",
    "item_cost": null,
    "hos_guid": null,
    "staff_lock_result": "N",
    "laborder_date": null,
    "abnormal_result": null,
    "hos_guid_ext": null,
    "check_key": null,
    "lab_result_status": null,
    "update_datetime": null,
    "lab_hist_compare_type_id": null,
    "printed": null,
    "printed_datetime": null,
    "critical_result": null,
    "check_key_a": null,
    "send_notify": null
  },
  {
    "lab_order_number": 239,
    "lab_items_code": 13,
    "lab_order_result": "94",
    "lab_order_remark": null,
    "staff": null,
    "confirm": "Y",
    "lab_items_name_ref": "Alkaline phosphatase",
    "lab_items_normal_value_ref": "",
    "specimen_code": 0,
    "lab_items_sub_group_code": 9,
    "order_type": "A",
    "item_cost": null,
    "hos_guid": null,
    "staff_lock_result": "N",
    "laborder_date": null,
    "abnormal_result": null,
    "hos_guid_ext": null,
    "check_key": null,
    "lab_result_status": null,
    "update_datetime": null,
    "lab_hist_compare_type_id": null,
    "printed": null,
    "printed_datetime": null,
    "critical_result": null,
    "check_key_a": null,
    "send_notify": null
  },
  {
    "lab_order_number": 239,
    "lab_items_code": 14,
    "lab_order_result": "1.1",
    "lab_order_remark": null,
    "staff": null,
    "confirm": "Y",
    "lab_items_name_ref": "Bilirubin Total",
    "lab_items_normal_value_ref": "",
    "specimen_code": null,
    "lab_items_sub_group_code": 9,
    "order_type": "A",
    "item_cost": null,
    "hos_guid": null,
    "staff_lock_result": "N",
    "laborder_date": null,
    "abnormal_result": null,
    "hos_guid_ext": null,
    "check_key": null,
    "lab_result_status": null,
    "update_datetime": null,
    "lab_hist_compare_type_id": null,
    "printed": null,
    "printed_datetime": null,
    "critical_result": null,
    "check_key_a": null,
    "send_notify": null
  },
  {
    "lab_order_number": 239,
    "lab_items_code": 15,
    "lab_order_result": "0.25",
    "lab_order_remark": null,
    "staff": null,
    "confirm": "Y",
    "lab_items_name_ref": "Bilirubin Direct",
    "lab_items_normal_value_ref": "",
    "specimen_code": null,
    "lab_items_sub_group_code": 9,
    "order_type": "A",
    "item_cost": null,
    "hos_guid": null,
    "staff_lock_result": "N",
    "laborder_date": null,
    "abnormal_result": null,
    "hos_guid_ext": null,
    "check_key": null,
    "lab_result_status": null,
    "update_datetime": null,
    "lab_hist_compare_type_id": null,
    "printed": null,
    "printed_datetime": null,
    "critical_result": null,
    "check_key_a": null,
    "send_notify": null
  }
]
```
