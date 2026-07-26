# `lab_app_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_app_order_number | int(11) | NO | PRI | 0 |  |  |
| lab_items_code | int(11) | NO | PRI | 0 |  |  |
| lab_order_result | varchar(250) | YES |  | NULL |  |  |
| lab_order_remark | varchar(250) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| confirm | char(1) | YES |  | NULL |  |  |
| specimen_code | int(11) | YES |  | NULL |  |  |
| lab_items_sub_group_code | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| order_type | char(1) | YES |  | NULL |  |  |
| lab_items_name_ref | varchar(150) | YES |  | NULL |  |  |
| lab_items_normal_value_ref | varchar(200) | YES |  | NULL |  |  |
| check_key_a | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| lab_app_order_number | lab_app_order_number | no | 1 |
| PRIMARY | lab_app_order_number | yes | 1 |
| PRIMARY | lab_items_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_app_order_number": 1,
    "lab_items_code": 61,
    "lab_order_result": null,
    "lab_order_remark": null,
    "staff": null,
    "confirm": "N",
    "specimen_code": null,
    "lab_items_sub_group_code": 1,
    "hos_guid": null,
    "hos_guid_ext": null,
    "order_type": null,
    "lab_items_name_ref": null,
    "lab_items_normal_value_ref": null,
    "check_key_a": null
  },
  {
    "lab_app_order_number": 1,
    "lab_items_code": 63,
    "lab_order_result": null,
    "lab_order_remark": null,
    "staff": null,
    "confirm": "N",
    "specimen_code": null,
    "lab_items_sub_group_code": 1,
    "hos_guid": null,
    "hos_guid_ext": null,
    "order_type": null,
    "lab_items_name_ref": null,
    "lab_items_normal_value_ref": null,
    "check_key_a": null
  },
  {
    "lab_app_order_number": 1,
    "lab_items_code": 182,
    "lab_order_result": null,
    "lab_order_remark": null,
    "staff": null,
    "confirm": "N",
    "specimen_code": null,
    "lab_items_sub_group_code": 14,
    "hos_guid": null,
    "hos_guid_ext": null,
    "order_type": null,
    "lab_items_name_ref": null,
    "lab_items_normal_value_ref": null,
    "check_key_a": null
  },
  {
    "lab_app_order_number": 1,
    "lab_items_code": 183,
    "lab_order_result": null,
    "lab_order_remark": null,
    "staff": null,
    "confirm": "N",
    "specimen_code": null,
    "lab_items_sub_group_code": 14,
    "hos_guid": null,
    "hos_guid_ext": null,
    "order_type": null,
    "lab_items_name_ref": null,
    "lab_items_normal_value_ref": null,
    "check_key_a": null
  },
  {
    "lab_app_order_number": 1,
    "lab_items_code": 184,
    "lab_order_result": null,
    "lab_order_remark": null,
    "staff": null,
    "confirm": "N",
    "specimen_code": null,
    "lab_items_sub_group_code": 14,
    "hos_guid": null,
    "hos_guid_ext": null,
    "order_type": null,
    "lab_items_name_ref": null,
    "lab_items_normal_value_ref": null,
    "check_key_a": null
  },
  {
    "lab_app_order_number": 1,
    "lab_items_code": 185,
    "lab_order_result": null,
    "lab_order_remark": null,
    "staff": null,
    "confirm": "N",
    "specimen_code": null,
    "lab_items_sub_group_code": 1,
    "hos_guid": null,
    "hos_guid_ext": null,
    "order_type": null,
    "lab_items_name_ref": null,
    "lab_items_normal_value_ref": null,
    "check_key_a": null
  },
  {
    "lab_app_order_number": 1,
    "lab_items_code": 186,
    "lab_order_result": null,
    "lab_order_remark": null,
    "staff": null,
    "confirm": "N",
    "specimen_code": null,
    "lab_items_sub_group_code": 1,
    "hos_guid": null,
    "hos_guid_ext": null,
    "order_type": null,
    "lab_items_name_ref": null,
    "lab_items_normal_value_ref": null,
    "check_key_a": null
  },
  {
    "lab_app_order_number": 1,
    "lab_items_code": 187,
    "lab_order_result": null,
    "lab_order_remark": null,
    "staff": null,
    "confirm": "N",
    "specimen_code": null,
    "lab_items_sub_group_code": 1,
    "hos_guid": null,
    "hos_guid_ext": null,
    "order_type": null,
    "lab_items_name_ref": null,
    "lab_items_normal_value_ref": null,
    "check_key_a": null
  }
]
```
