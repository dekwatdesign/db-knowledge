# `ipt_order_no`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_order_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| rxdate | date | YES | MUL | NULL |  |  |
| order_no | int(11) | YES | MUL | NULL |  |  |
| order_type | char(3) | YES |  | NULL |  |  |
| entry_staff | varchar(25) | YES |  | NULL |  |  |
| ward | varchar(4) | YES |  | NULL |  |  |
| rxtime | time | YES |  | NULL |  |  |
| order_locked | char(1) | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| confirm_prepare | char(1) | YES |  | NULL |  |  |
| confirm_pay | char(1) | YES |  | NULL |  |  |
| day_queue | varchar(100) | YES |  | NULL |  |  |
| confirm_staff | varchar(50) | YES |  | NULL |  |  |
| confirm_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| day_queue_number | int(11) | YES | MUL | NULL |  |  |
| order_type_key_id | int(11) | YES |  | NULL |  |  |
| prepare_staff | varchar(25) | YES |  | NULL |  |  |
| pay_staff | varchar(25) | YES |  | NULL |  |  |
| prepare_doctor_code | varchar(15) | YES |  | NULL |  |  |
| pay_doctor_code | varchar(15) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| pay_datetime | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| pay_depcode | char(3) | YES |  | NULL |  |  |
| medication_count | int(11) | YES |  | NULL |  |  |
| med_supply_count | int(11) | YES |  | NULL |  |  |
| req_stock_department_id | int(11) | YES |  | NULL |  |  |
| med_item_md14_count | int(11) | YES |  | NULL |  |  |
| rx_check_doctor_code | varchar(15) | YES |  | NULL |  |  |
| rx_check_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| ix_an_date_type | an | no | 1 |
| ix_an_date_type | rxdate | no | 2 |
| ix_an_date_type | order_type | no | 3 |
| ix_an_date_type_index | an | no | 1 |
| ix_an_date_type_index | order_type | no | 2 |
| ix_an_date_type_index | rxdate | no | 3 |
| ix_day_queue_index | rxdate | no | 1 |
| ix_day_queue_index | day_queue_number | no | 2 |
| ix_day_queue_index_index | day_queue_number | no | 1 |
| ix_day_queue_index_index | rxdate | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| order_no | order_no | no | 1 |
| PRIMARY | ipt_order_id | yes | 1 |
| rxdate | rxdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_order_id": 1,
    "an": "540000786",
    "rxdate": "2011-10-10",
    "order_no": 1818,
    "order_type": "TRx",
    "entry_staff": "yuwa152",
    "ward": "03",
    "rxtime": "16:09:38",
    "order_locked": null,
    "item_count": 1,
    "amount": 50.0,
    "confirm_prepare": null,
    "confirm_pay": null,
    "day_queue": null,
    "confirm_staff": null,
    "confirm_datetime": null,
    "hos_guid": null,
    "depcode": null,
    "day_queue_number": null,
    "order_type_key_id": null,
    "prepare_staff": null,
    "pay_staff": null,
    "prepare_doctor_code": null,
    "pay_doctor_code": null,
    "update_datetime": null,
    "pay_datetime": null,
    "doctor_code": null,
    "pay_depcode": null,
    "medication_count": null,
    "med_supply_count": null,
    "req_stock_department_id": null,
    "med_item_md14_count": null,
    "rx_check_doctor_code": null,
    "rx_check_datetime": null
  },
  {
    "ipt_order_id": 2,
    "an": "540000787",
    "rxdate": "2011-10-10",
    "order_no": 1819,
    "order_type": "TRx",
    "entry_staff": "yuwa152",
    "ward": "03",
    "rxtime": "16:10:29",
    "order_locked": null,
    "item_count": 1,
    "amount": 50.0,
    "confirm_prepare": null,
    "confirm_pay": null,
    "day_queue": null,
    "confirm_staff": null,
    "confirm_datetime": null,
    "hos_guid": null,
    "depcode": null,
    "day_queue_number": null,
    "order_type_key_id": null,
    "prepare_staff": null,
    "pay_staff": null,
    "prepare_doctor_code": null,
    "pay_doctor_code": null,
    "update_datetime": null,
    "pay_datetime": null,
    "doctor_code": null,
    "pay_depcode": null,
    "medication_count": null,
    "med_supply_count": null,
    "req_stock_department_id": null,
    "med_item_md14_count": null,
    "rx_check_doctor_code": null,
    "rx_check_datetime": null
  },
  {
    "ipt_order_id": 3,
    "an": "540000786",
    "rxdate": "2011-10-10",
    "order_no": 1820,
    "order_type": "ATO",
    "entry_staff": "yuwa068",
    "ward": "03",
    "rxtime": "10:20:56",
    "order_locked": "Y",
    "item_count": 1,
    "amount": 150.0,
    "confirm_prepare": "N",
    "confirm_pay": null,
    "day_queue": null,
    "confirm_staff": null,
    "confirm_datetime": null,
    "hos_guid": null,
    "depcode": null,
    "day_queue_number": null,
    "order_type_key_id": null,
    "prepare_staff": null,
    "pay_staff": null,
    "prepare_doctor_code": null,
    "pay_doctor_code": null,
    "update_datetime": null,
    "pay_datetime": null,
    "doctor_code": null,
    "pay_depcode": null,
    "medication_count": null,
    "med_supply_count": null,
    "req_stock_department_id": null,
    "med_item_md14_count": null,
    "rx_check_doctor_code": null,
    "rx_check_datetime": null
  },
  {
    "ipt_order_id": 4,
    "an": "540000786",
    "rxdate": "2011-10-12",
    "order_no": 1821,
    "order_type": "IRx",
    "entry_staff": "yuwa068",
    "ward": "03",
    "rxtime": "10:33:19",
    "order_locked": "N",
    "item_count": 3,
    "amount": 900.0,
    "confirm_prepare": "N",
    "confirm_pay": null,
    "day_queue": "541013/0001",
    "confirm_staff": null,
    "confirm_datetime": null,
    "hos_guid": null,
    "depcode": null,
    "day_queue_number": 1,
    "order_type_key_id": null,
    "prepare_staff": null,
    "pay_staff": null,
    "prepare_doctor_code": null,
    "pay_doctor_code": null,
    "update_datetime": null,
    "pay_datetime": null,
    "doctor_code": null,
    "pay_depcode": null,
    "medication_count": null,
    "med_supply_count": null,
    "req_stock_department_id": null,
    "med_item_md14_count": null,
    "rx_check_doctor_code": null,
    "rx_check_datetime": null
  },
  {
    "ipt_order_id": 5,
    "an": "540000787",
    "rxdate": "2011-10-10",
    "order_no": 1822,
    "order_type": "ATO",
    "entry_staff": "yuwa068",
    "ward": "03",
    "rxtime": "10:34:47",
    "order_locked": "Y",
    "item_count": 0,
    "amount": null,
    "confirm_prepare": "N",
    "confirm_pay": null,
    "day_queue": null,
    "confirm_staff": null,
    "confirm_datetime": null,
    "hos_guid": null,
    "depcode": null,
    "day_queue_number": null,
    "order_type_key_id": null,
    "prepare_staff": null,
    "pay_staff": null,
    "prepare_doctor_code": null,
    "pay_doctor_code": null,
    "update_datetime": null,
    "pay_datetime": null,
    "doctor_code": null,
    "pay_depcode": null,
    "medication_count": null,
    "med_supply_count": null,
    "req_stock_department_id": null,
    "med_item_md14_count": null,
    "rx_check_doctor_code": null,
    "rx_check_datetime": null
  },
  {
    "ipt_order_id": 6,
    "an": "540000787",
    "rxdate": "2011-10-10",
    "order_no": 1823,
    "order_type": "IRx",
    "entry_staff": "yuwa068",
    "ward": "03",
    "rxtime": "10:35:30",
    "order_locked": "N",
    "item_count": 3,
    "amount": 700.0,
    "confirm_prepare": "N",
    "confirm_pay": null,
    "day_queue": "541013/0002",
    "confirm_staff": null,
    "confirm_datetime": null,
    "hos_guid": null,
    "depcode": null,
    "day_queue_number": 2,
    "order_type_key_id": null,
    "prepare_staff": null,
    "pay_staff": null,
    "prepare_doctor_code": null,
    "pay_doctor_code": null,
    "update_datetime": null,
    "pay_datetime": null,
    "doctor_code": null,
    "pay_depcode": null,
    "medication_count": null,
    "med_supply_count": null,
    "req_stock_department_id": null,
    "med_item_md14_count": null,
    "rx_check_doctor_code": null,
    "rx_check_datetime": null
  },
  {
    "ipt_order_id": 7,
    "an": "540000788",
    "rxdate": "2011-10-11",
    "order_no": 1824,
    "order_type": "TRx",
    "entry_staff": "yuwa068",
    "ward": "03",
    "rxtime": "8:15:15",
    "order_locked": null,
    "item_count": 1,
    "amount": 50.0,
    "confirm_prepare": "N",
    "confirm_pay": null,
    "day_queue": null,
    "confirm_staff": null,
    "confirm_datetime": null,
    "hos_guid": null,
    "depcode": null,
    "day_queue_number": null,
    "order_type_key_id": null,
    "prepare_staff": null,
    "pay_staff": null,
    "prepare_doctor_code": null,
    "pay_doctor_code": null,
    "update_datetime": null,
    "pay_datetime": null,
    "doctor_code": null,
    "pay_depcode": null,
    "medication_count": null,
    "med_supply_count": null,
    "req_stock_department_id": null,
    "med_item_md14_count": null,
    "rx_check_doctor_code": null,
    "rx_check_datetime": null
  },
  {
    "ipt_order_id": 8,
    "an": "540000789",
    "rxdate": "2011-10-12",
    "order_no": 1825,
    "order_type": "TRx",
    "entry_staff": "yuwa152",
    "ward": "03",
    "rxtime": "16:54:53",
    "order_locked": null,
    "item_count": 1,
    "amount": 50.0,
    "confirm_prepare": null,
    "confirm_pay": null,
    "day_queue": null,
    "confirm_staff": null,
    "confirm_datetime": null,
    "hos_guid": null,
    "depcode": null,
    "day_queue_number": null,
    "order_type_key_id": null,
    "prepare_staff": null,
    "pay_staff": null,
    "prepare_doctor_code": null,
    "pay_doctor_code": null,
    "update_datetime": null,
    "pay_datetime": null,
    "doctor_code": null,
    "pay_depcode": null,
    "medication_count": null,
    "med_supply_count": null,
    "req_stock_department_id": null,
    "med_item_md14_count": null,
    "rx_check_doctor_code": null,
    "rx_check_datetime": null
  }
]
```
