# `stock_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| department_id | int(11) | NO | PRI | 0 |  |  |
| department_name | varchar(200) | YES | MUL | NULL |  |  |
| oldcode | varchar(20) | YES | MUL | NULL |  |  |
| status_active | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| stock_department_type_id | int(11) | YES |  | NULL |  |  |
| department_board_name1 | varchar(150) | YES |  | NULL |  |  |
| department_board_name2 | varchar(150) | YES |  | NULL |  |  |
| department_board_position1 | varchar(150) | YES |  | NULL |  |  |
| department_board_position2 | varchar(150) | YES |  | NULL |  |  |
| department_type | int(11) | YES |  | NULL |  |  |
| department_code | varchar(50) | YES |  | NULL |  |  |
| store_expired_item | char(1) | YES |  | NULL |  |  |
| stock_authorize_type_id | int(11) | YES |  | NULL |  |  |
| stock_cost_center_id | int(11) | YES |  | NULL |  |  |
| no_confirm_pay | char(1) | YES |  | NULL |  |  |
| exclusive_order | char(1) | YES |  | NULL |  |  |
| sap_id | int(11) | YES |  | NULL |  |  |
| allow_adjust | char(1) | YES |  | NULL |  |  |
| allow_sap_mig | char(1) | YES |  | NULL |  |  |
| allow_donation | char(1) | YES |  | NULL |  |  |
| allow_manual_draw | char(1) | YES |  | NULL |  |  |
| allow_dep_transfer | char(1) | YES |  | NULL |  |  |
| allow_wh_transfer | char(1) | YES |  | NULL |  |  |
| allow_dep_rtl | char(1) | YES |  | NULL |  |  |
| allow_dep_pos | char(1) | YES |  | NULL |  |  |
| allow_manual_rcv | char(1) | YES |  | NULL |  |  |
| owe_stock | char(1) | YES | MUL | NULL |  |  |
| acc_department_id | int(11) | YES |  | NULL |  |  |
| auto_daily_calc_mrp | char(1) | YES |  | NULL |  |  |
| last_daily_calc_mrp | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_department_name | department_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_oldcode | oldcode | no | 1 |
| ix_owe_stock | owe_stock | no | 1 |
| PRIMARY | department_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "department_id": 1,
    "department_name": "คลังย่อย",
    "oldcode": null,
    "status_active": "Y",
    "hos_guid": null,
    "stock_department_type_id": null,
    "department_board_name1": null,
    "department_board_name2": null,
    "department_board_position1": null,
    "department_board_position2": null,
    "department_type": null,
    "department_code": null,
    "store_expired_item": null,
    "stock_authorize_type_id": null,
    "stock_cost_center_id": null,
    "no_confirm_pay": null,
    "exclusive_order": null,
    "sap_id": null,
    "allow_adjust": null,
    "allow_sap_mig": null,
    "allow_donation": null,
    "allow_manual_draw": null,
    "allow_dep_transfer": null,
    "allow_wh_transfer": null,
    "allow_dep_rtl": null,
    "allow_dep_pos": null,
    "allow_manual_rcv": null,
    "owe_stock": null,
    "acc_department_id": null,
    "auto_daily_calc_mrp": null,
    "last_daily_calc_mrp": null
  }
]
```
