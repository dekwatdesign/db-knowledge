# `stock_item_unit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_unit_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| item_unit_name | varchar(50) | YES |  | NULL |  |  |
| unit_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| last_active_date | date | YES |  | NULL |  |  |
| rate_1_month | int(11) | YES |  | NULL |  |  |
| rate_3_month | int(11) | YES |  | NULL |  |  |
| rate_12_month | int(11) | YES |  | NULL |  |  |
| rate_1_month_lastyear | int(11) | YES |  | NULL |  |  |
| empty_in_day | int(11) | YES |  | NULL |  |  |
| age_1_year | int(11) | YES |  | NULL |  |  |
| age_2_year | int(11) | YES |  | NULL |  |  |
| age_3_year | int(11) | YES |  | NULL |  |  |
| age_4_year | int(11) | YES |  | NULL |  |  |
| age_5_year | int(11) | YES |  | NULL |  |  |
| age_morethan_5_year | int(11) | YES |  | NULL |  |  |
| current_qty | int(11) | YES |  | NULL |  |  |
| po_wait_qty | int(11) | YES |  | NULL |  |  |
| stock_item_unit_standard_price | double(15,5) | YES |  | NULL |  |  |
| reorder_point | int(11) | YES |  | NULL |  |  |
| safety_stock | int(11) | YES |  | NULL |  |  |
| item_unit_status | int(11) | YES |  | NULL |  |  |
| item_ref_price | double(22,8) | YES |  | NULL |  |  |
| barcode | varchar(100) | YES |  | NULL |  |  |
| unit_price | double(15,3) | YES |  | NULL |  |  |
| expire_qty | int(11) | YES |  | NULL |  |  |
| default_po | char(1) | YES |  | NULL |  |  |
| tpp_code | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_id_qty | stock_item_unit_id | no | 1 |
| ix_id_qty | unit_qty | no | 2 |
| ix_item_id | item_id | no | 1 |
| ix_unique | item_id | yes | 1 |
| ix_unique | item_unit_name | yes | 2 |
| ix_unit_qty_unique | item_id | no | 1 |
| ix_unit_qty_unique | unit_qty | no | 2 |
| PRIMARY | stock_item_unit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "stock_item_unit_id": 1,
    "item_id": 2,
    "item_unit_name": "เม็ด",
    "unit_qty": 1,
    "hos_guid": null,
    "last_active_date": null,
    "rate_1_month": null,
    "rate_3_month": null,
    "rate_12_month": null,
    "rate_1_month_lastyear": null,
    "empty_in_day": null,
    "age_1_year": null,
    "age_2_year": null,
    "age_3_year": null,
    "age_4_year": null,
    "age_5_year": null,
    "age_morethan_5_year": null,
    "current_qty": null,
    "po_wait_qty": null,
    "stock_item_unit_standard_price": null,
    "reorder_point": null,
    "safety_stock": null,
    "item_unit_status": null,
    "item_ref_price": null,
    "barcode": null,
    "unit_price": null,
    "expire_qty": null,
    "default_po": null,
    "tpp_code": null
  },
  {
    "stock_item_unit_id": 2,
    "item_id": 3,
    "item_unit_name": "แอมพูล",
    "unit_qty": 1,
    "hos_guid": null,
    "last_active_date": null,
    "rate_1_month": null,
    "rate_3_month": null,
    "rate_12_month": null,
    "rate_1_month_lastyear": null,
    "empty_in_day": null,
    "age_1_year": null,
    "age_2_year": null,
    "age_3_year": null,
    "age_4_year": null,
    "age_5_year": null,
    "age_morethan_5_year": null,
    "current_qty": null,
    "po_wait_qty": null,
    "stock_item_unit_standard_price": null,
    "reorder_point": null,
    "safety_stock": null,
    "item_unit_status": null,
    "item_ref_price": null,
    "barcode": null,
    "unit_price": null,
    "expire_qty": null,
    "default_po": null,
    "tpp_code": null
  },
  {
    "stock_item_unit_id": 3,
    "item_id": 4,
    "item_unit_name": "แอมพูล",
    "unit_qty": 1,
    "hos_guid": null,
    "last_active_date": null,
    "rate_1_month": null,
    "rate_3_month": null,
    "rate_12_month": null,
    "rate_1_month_lastyear": null,
    "empty_in_day": null,
    "age_1_year": null,
    "age_2_year": null,
    "age_3_year": null,
    "age_4_year": null,
    "age_5_year": null,
    "age_morethan_5_year": null,
    "current_qty": null,
    "po_wait_qty": null,
    "stock_item_unit_standard_price": null,
    "reorder_point": null,
    "safety_stock": null,
    "item_unit_status": null,
    "item_ref_price": null,
    "barcode": null,
    "unit_price": null,
    "expire_qty": null,
    "default_po": null,
    "tpp_code": null
  },
  {
    "stock_item_unit_id": 4,
    "item_id": 5,
    "item_unit_name": "เม็ด",
    "unit_qty": 1,
    "hos_guid": null,
    "last_active_date": null,
    "rate_1_month": null,
    "rate_3_month": null,
    "rate_12_month": null,
    "rate_1_month_lastyear": null,
    "empty_in_day": null,
    "age_1_year": null,
    "age_2_year": null,
    "age_3_year": null,
    "age_4_year": null,
    "age_5_year": null,
    "age_morethan_5_year": null,
    "current_qty": null,
    "po_wait_qty": null,
    "stock_item_unit_standard_price": null,
    "reorder_point": null,
    "safety_stock": null,
    "item_unit_status": null,
    "item_ref_price": null,
    "barcode": null,
    "unit_price": null,
    "expire_qty": null,
    "default_po": null,
    "tpp_code": null
  },
  {
    "stock_item_unit_id": 5,
    "item_id": 6,
    "item_unit_name": "เม็ด",
    "unit_qty": 1,
    "hos_guid": null,
    "last_active_date": null,
    "rate_1_month": null,
    "rate_3_month": null,
    "rate_12_month": null,
    "rate_1_month_lastyear": null,
    "empty_in_day": null,
    "age_1_year": null,
    "age_2_year": null,
    "age_3_year": null,
    "age_4_year": null,
    "age_5_year": null,
    "age_morethan_5_year": null,
    "current_qty": null,
    "po_wait_qty": null,
    "stock_item_unit_standard_price": null,
    "reorder_point": null,
    "safety_stock": null,
    "item_unit_status": null,
    "item_ref_price": null,
    "barcode": null,
    "unit_price": null,
    "expire_qty": null,
    "default_po": null,
    "tpp_code": null
  },
  {
    "stock_item_unit_id": 6,
    "item_id": 7,
    "item_unit_name": "เม็ด",
    "unit_qty": 1,
    "hos_guid": null,
    "last_active_date": null,
    "rate_1_month": null,
    "rate_3_month": null,
    "rate_12_month": null,
    "rate_1_month_lastyear": null,
    "empty_in_day": null,
    "age_1_year": null,
    "age_2_year": null,
    "age_3_year": null,
    "age_4_year": null,
    "age_5_year": null,
    "age_morethan_5_year": null,
    "current_qty": null,
    "po_wait_qty": null,
    "stock_item_unit_standard_price": null,
    "reorder_point": null,
    "safety_stock": null,
    "item_unit_status": null,
    "item_ref_price": null,
    "barcode": null,
    "unit_price": null,
    "expire_qty": null,
    "default_po": null,
    "tpp_code": null
  },
  {
    "stock_item_unit_id": 7,
    "item_id": 8,
    "item_unit_name": "ขวด (240 ml.)",
    "unit_qty": 1,
    "hos_guid": null,
    "last_active_date": null,
    "rate_1_month": null,
    "rate_3_month": null,
    "rate_12_month": null,
    "rate_1_month_lastyear": null,
    "empty_in_day": null,
    "age_1_year": null,
    "age_2_year": null,
    "age_3_year": null,
    "age_4_year": null,
    "age_5_year": null,
    "age_morethan_5_year": null,
    "current_qty": null,
    "po_wait_qty": null,
    "stock_item_unit_standard_price": null,
    "reorder_point": null,
    "safety_stock": null,
    "item_unit_status": null,
    "item_ref_price": null,
    "barcode": null,
    "unit_price": null,
    "expire_qty": null,
    "default_po": null,
    "tpp_code": null
  },
  {
    "stock_item_unit_id": 8,
    "item_id": 9,
    "item_unit_name": "เม็ด",
    "unit_qty": 1,
    "hos_guid": null,
    "last_active_date": null,
    "rate_1_month": null,
    "rate_3_month": null,
    "rate_12_month": null,
    "rate_1_month_lastyear": null,
    "empty_in_day": null,
    "age_1_year": null,
    "age_2_year": null,
    "age_3_year": null,
    "age_4_year": null,
    "age_5_year": null,
    "age_morethan_5_year": null,
    "current_qty": null,
    "po_wait_qty": null,
    "stock_item_unit_standard_price": null,
    "reorder_point": null,
    "safety_stock": null,
    "item_unit_status": null,
    "item_ref_price": null,
    "barcode": null,
    "unit_price": null,
    "expire_qty": null,
    "default_po": null,
    "tpp_code": null
  }
]
```
