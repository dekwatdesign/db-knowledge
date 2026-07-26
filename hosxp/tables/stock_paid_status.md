# `stock_paid_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| paid_status_id | int(11) | NO | PRI | 0 |  |  |
| paid_status_name | varchar(150) | YES |  | NULL |  |  |
| status_lock | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| status_waiting | char(1) | YES |  | NULL |  |  |
| finance_state | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_finance_state | finance_state | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | paid_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "paid_status_id": 1,
    "paid_status_name": "รอการอนุมัติจัดซื้อ",
    "status_lock": "N",
    "hos_guid": null,
    "status_waiting": null,
    "finance_state": null
  },
  {
    "paid_status_id": 2,
    "paid_status_name": "ส่งใบสั่งซื้อแล้ว รอการจัดส่งจากบริษัท",
    "status_lock": "N",
    "hos_guid": null,
    "status_waiting": null,
    "finance_state": null
  },
  {
    "paid_status_id": 3,
    "paid_status_name": "ได้รับสินค้าแล้ว รอยืนยันการชำระเงิน",
    "status_lock": "N",
    "hos_guid": null,
    "status_waiting": null,
    "finance_state": null
  },
  {
    "paid_status_id": 4,
    "paid_status_name": "ชำระเงินแล้ว ปิดรายการ",
    "status_lock": "Y",
    "hos_guid": null,
    "status_waiting": null,
    "finance_state": null
  },
  {
    "paid_status_id": 5,
    "paid_status_name": "รายการถูกยกเลิก",
    "status_lock": "Y",
    "hos_guid": null,
    "status_waiting": null,
    "finance_state": null
  }
]
```
