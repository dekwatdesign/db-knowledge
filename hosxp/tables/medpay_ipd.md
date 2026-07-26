# `medpay_ipd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_order_number | int(11) | NO | PRI | 0 |  |  |
| med_plan_number | int(11) | YES | MUL | NULL |  |  |
| med_rx_number | int(11) | YES | MUL | NULL |  |  |
| med_order_qty | int(11) | YES |  | NULL |  |  |
| med_pay_qty | int(11) | YES |  | NULL |  |  |
| pay_flag | char(1) | YES |  | NULL |  |  |
| order_flag | char(1) | YES |  | NULL |  |  |
| order_date | date | YES | MUL | NULL |  |  |
| order_date_time | datetime | YES |  | NULL |  |  |
| pay_date_time | datetime | YES |  | NULL |  |  |
| unitprice | double(15,3) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| med_type | char(1) | YES |  | NULL |  |  |
| ipt_medication_type | int(11) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| med_interval_type_id | int(11) | YES |  | NULL |  |  |
| drugusage | varchar(9) | YES |  | NULL |  |  |
| sp_use | varchar(9) | YES |  | NULL |  |  |
| med_real_pay_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| orderstatus | char(1) | YES |  | NULL |  |  |
| ipd_rx_pattern_id | int(11) | YES |  | NULL |  |  |
| day_number | int(11) | YES |  | NULL |  |  |
| use_rx_pattern | char(1) | YES |  | NULL |  |  |
| pay_number | int(11) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |
| sticker_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| ix_an_med_rx_number | an | no | 1 |
| ix_an_med_rx_number | med_rx_number | no | 2 |
| ix_medplan_number | med_plan_number | no | 1 |
| ix_opi_guid | opi_guid | no | 1 |
| ix_unique_unique_unique | hos_guid | no | 1 |
| med_rx_number | med_rx_number | no | 1 |
| order_date | order_date | no | 1 |
| PRIMARY | med_order_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "med_order_number": 12405,
    "med_plan_number": 0,
    "med_rx_number": 1821,
    "med_order_qty": 1,
    "med_pay_qty": null,
    "pay_flag": "N",
    "order_flag": null,
    "order_date": "2011-10-12",
    "order_date_time": "2011-10-13 13:29:03",
    "pay_date_time": null,
    "unitprice": 300.0,
    "an": "540000786",
    "med_type": "D",
    "ipt_medication_type": null,
    "icode": "3000043",
    "med_interval_type_id": 0,
    "drugusage": "",
    "sp_use": "",
    "med_real_pay_qty": 0,
    "hos_guid": "{3298A9CF-42D4-429E-9A0F-95B65764D55E}",
    "orderstatus": null,
    "ipd_rx_pattern_id": null,
    "day_number": null,
    "use_rx_pattern": null,
    "pay_number": null,
    "opi_guid": "{3298A9CF-42D4-429E-9A0F-95B65764D55E}",
    "sticker_count": null
  },
  {
    "med_order_number": 12406,
    "med_plan_number": 0,
    "med_rx_number": 1821,
    "med_order_qty": 1,
    "med_pay_qty": null,
    "pay_flag": "N",
    "order_flag": null,
    "order_date": "2011-10-12",
    "order_date_time": "2011-10-13 13:29:03",
    "pay_date_time": null,
    "unitprice": 300.0,
    "an": "540000786",
    "med_type": "D",
    "ipt_medication_type": null,
    "icode": "3000003",
    "med_interval_type_id": 0,
    "drugusage": "",
    "sp_use": "",
    "med_real_pay_qty": 0,
    "hos_guid": "{32C43624-6693-4C3E-B8B4-0F616906134C}",
    "orderstatus": null,
    "ipd_rx_pattern_id": null,
    "day_number": null,
    "use_rx_pattern": null,
    "pay_number": null,
    "opi_guid": "{32C43624-6693-4C3E-B8B4-0F616906134C}",
    "sticker_count": null
  },
  {
    "med_order_number": 12407,
    "med_plan_number": 0,
    "med_rx_number": 1821,
    "med_order_qty": 1,
    "med_pay_qty": null,
    "pay_flag": "N",
    "order_flag": null,
    "order_date": "2011-10-12",
    "order_date_time": "2011-10-13 13:29:03",
    "pay_date_time": null,
    "unitprice": 300.0,
    "an": "540000786",
    "med_type": "D",
    "ipt_medication_type": null,
    "icode": "3000020",
    "med_interval_type_id": 0,
    "drugusage": "",
    "sp_use": "",
    "med_real_pay_qty": 0,
    "hos_guid": "{24008EF8-FFC0-4131-8F01-AFC5EA9A41E0}",
    "orderstatus": null,
    "ipd_rx_pattern_id": null,
    "day_number": null,
    "use_rx_pattern": null,
    "pay_number": null,
    "opi_guid": "{24008EF8-FFC0-4131-8F01-AFC5EA9A41E0}",
    "sticker_count": null
  },
  {
    "med_order_number": 12408,
    "med_plan_number": 0,
    "med_rx_number": 1823,
    "med_order_qty": 1,
    "med_pay_qty": null,
    "pay_flag": "N",
    "order_flag": null,
    "order_date": "2011-10-10",
    "order_date_time": "2011-10-14 14:21:58",
    "pay_date_time": null,
    "unitprice": 300.0,
    "an": "540000787",
    "med_type": "D",
    "ipt_medication_type": null,
    "icode": "3000043",
    "med_interval_type_id": 0,
    "drugusage": "",
    "sp_use": "",
    "med_real_pay_qty": 0,
    "hos_guid": "{B05C9E2D-3454-4EA6-8F2D-BEBDF60BFE71}",
    "orderstatus": null,
    "ipd_rx_pattern_id": null,
    "day_number": null,
    "use_rx_pattern": null,
    "pay_number": null,
    "opi_guid": "{B05C9E2D-3454-4EA6-8F2D-BEBDF60BFE71}",
    "sticker_count": null
  },
  {
    "med_order_number": 12409,
    "med_plan_number": 0,
    "med_rx_number": 1823,
    "med_order_qty": 1,
    "med_pay_qty": null,
    "pay_flag": "N",
    "order_flag": null,
    "order_date": "2011-10-10",
    "order_date_time": "2011-10-14 14:21:58",
    "pay_date_time": null,
    "unitprice": 300.0,
    "an": "540000787",
    "med_type": "D",
    "ipt_medication_type": null,
    "icode": "3000003",
    "med_interval_type_id": 0,
    "drugusage": "",
    "sp_use": "",
    "med_real_pay_qty": 0,
    "hos_guid": "{E88B3035-2CF5-449D-8DEA-66A034351942}",
    "orderstatus": null,
    "ipd_rx_pattern_id": null,
    "day_number": null,
    "use_rx_pattern": null,
    "pay_number": null,
    "opi_guid": "{E88B3035-2CF5-449D-8DEA-66A034351942}",
    "sticker_count": null
  },
  {
    "med_order_number": 12410,
    "med_plan_number": 0,
    "med_rx_number": 1823,
    "med_order_qty": 1,
    "med_pay_qty": null,
    "pay_flag": "N",
    "order_flag": null,
    "order_date": "2011-10-10",
    "order_date_time": "2011-10-14 14:21:58",
    "pay_date_time": null,
    "unitprice": 100.0,
    "an": "540000787",
    "med_type": "D",
    "ipt_medication_type": null,
    "icode": "3000020",
    "med_interval_type_id": 0,
    "drugusage": "",
    "sp_use": "",
    "med_real_pay_qty": 0,
    "hos_guid": "{916E8981-DF03-4390-A031-0D7C962791E7}",
    "orderstatus": null,
    "ipd_rx_pattern_id": null,
    "day_number": null,
    "use_rx_pattern": null,
    "pay_number": null,
    "opi_guid": "{916E8981-DF03-4390-A031-0D7C962791E7}",
    "sticker_count": null
  },
  {
    "med_order_number": 12411,
    "med_plan_number": 0,
    "med_rx_number": 1831,
    "med_order_qty": 1,
    "med_pay_qty": null,
    "pay_flag": "Y",
    "order_flag": null,
    "order_date": "2011-10-13",
    "order_date_time": "2011-10-13 11:44:43",
    "pay_date_time": null,
    "unitprice": 300.0,
    "an": "540000794",
    "med_type": "D",
    "ipt_medication_type": null,
    "icode": "3000043",
    "med_interval_type_id": 0,
    "drugusage": "",
    "sp_use": "",
    "med_real_pay_qty": 0,
    "hos_guid": "{98D67D07-1AB9-4D19-A1E9-69B7B268D196}",
    "orderstatus": null,
    "ipd_rx_pattern_id": null,
    "day_number": null,
    "use_rx_pattern": null,
    "pay_number": null,
    "opi_guid": "{98D67D07-1AB9-4D19-A1E9-69B7B268D196}",
    "sticker_count": null
  },
  {
    "med_order_number": 12412,
    "med_plan_number": 0,
    "med_rx_number": 1831,
    "med_order_qty": 1,
    "med_pay_qty": null,
    "pay_flag": "Y",
    "order_flag": null,
    "order_date": "2011-10-13",
    "order_date_time": "2011-10-13 11:44:44",
    "pay_date_time": null,
    "unitprice": 300.0,
    "an": "540000794",
    "med_type": "D",
    "ipt_medication_type": null,
    "icode": "3000003",
    "med_interval_type_id": 0,
    "drugusage": "",
    "sp_use": "",
    "med_real_pay_qty": 0,
    "hos_guid": "{80293052-2C03-48F5-A5CA-6F9B02AB0CF8}",
    "orderstatus": null,
    "ipd_rx_pattern_id": null,
    "day_number": null,
    "use_rx_pattern": null,
    "pay_number": null,
    "opi_guid": "{80293052-2C03-48F5-A5CA-6F9B02AB0CF8}",
    "sticker_count": null
  }
]
```
