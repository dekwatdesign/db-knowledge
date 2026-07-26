# `supplies_request_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SUPPLIES_REQUEST_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| SUPPLIES_REQUEST_ID | int | YES |  | NULL |  |  |
| SUPPLIES_REQUEST_SUB_DETAIL | varchar(255) | YES |  | NULL |  |  |
| SUPPLIES_REQUEST_SUB_AMOUNT | varchar(255) | YES |  | NULL |  |  |
| SUPPLIES_REQUEST_SUB_UNIT | varchar(11) | YES |  | NULL |  |  |
| SUPPLIES_REQUEST_SUB_PRICE | varchar(11) | YES |  | NULL |  |  |
| SUPPLIES_REQUEST_SUB_SUM_PRICE | varchar(10) | YES |  | NULL |  |  |
| SUPPLIES_REQUEST_SUB_REMARK | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| SUPPLIES_REQUEST_SUBRE_ID | int | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SUPPLIES_REQUEST_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "SUPPLIES_REQUEST_SUB_ID": 1,
    "SUPPLIES_REQUEST_ID": 1175,
    "SUPPLIES_REQUEST_SUB_DETAIL": "บั้มกัน",
    "SUPPLIES_REQUEST_SUB_AMOUNT": "5",
    "SUPPLIES_REQUEST_SUB_UNIT": "อัน",
    "SUPPLIES_REQUEST_SUB_PRICE": "200",
    "SUPPLIES_REQUEST_SUB_SUM_PRICE": null,
    "SUPPLIES_REQUEST_SUB_REMARK": "-",
    "updated_at": "2019-10-11 15:38:00",
    "created_at": "2019-10-11 15:38:00",
    "SUPPLIES_REQUEST_SUBRE_ID": null
  },
  {
    "SUPPLIES_REQUEST_SUB_ID": 3,
    "SUPPLIES_REQUEST_ID": 1177,
    "SUPPLIES_REQUEST_SUB_DETAIL": "ของดีๆ",
    "SUPPLIES_REQUEST_SUB_AMOUNT": "2",
    "SUPPLIES_REQUEST_SUB_UNIT": "ชิ้น",
    "SUPPLIES_REQUEST_SUB_PRICE": "2",
    "SUPPLIES_REQUEST_SUB_SUM_PRICE": null,
    "SUPPLIES_REQUEST_SUB_REMARK": "-",
    "updated_at": "2019-10-11 18:34:29",
    "created_at": "2019-10-11 18:34:29",
    "SUPPLIES_REQUEST_SUBRE_ID": null
  },
  {
    "SUPPLIES_REQUEST_SUB_ID": 4,
    "SUPPLIES_REQUEST_ID": 1177,
    "SUPPLIES_REQUEST_SUB_DETAIL": "สวดยอด",
    "SUPPLIES_REQUEST_SUB_AMOUNT": "1",
    "SUPPLIES_REQUEST_SUB_UNIT": "อัน",
    "SUPPLIES_REQUEST_SUB_PRICE": "3",
    "SUPPLIES_REQUEST_SUB_SUM_PRICE": null,
    "SUPPLIES_REQUEST_SUB_REMARK": "-",
    "updated_at": "2019-10-11 18:34:29",
    "created_at": "2019-10-11 18:34:29",
    "SUPPLIES_REQUEST_SUBRE_ID": null
  },
  {
    "SUPPLIES_REQUEST_SUB_ID": 5,
    "SUPPLIES_REQUEST_ID": 1178,
    "SUPPLIES_REQUEST_SUB_DETAIL": "ทดสอบ01",
    "SUPPLIES_REQUEST_SUB_AMOUNT": "2",
    "SUPPLIES_REQUEST_SUB_UNIT": "ชิ้น",
    "SUPPLIES_REQUEST_SUB_PRICE": "20",
    "SUPPLIES_REQUEST_SUB_SUM_PRICE": null,
    "SUPPLIES_REQUEST_SUB_REMARK": null,
    "updated_at": "2019-10-12 14:53:50",
    "created_at": "2019-10-12 14:53:50",
    "SUPPLIES_REQUEST_SUBRE_ID": null
  },
  {
    "SUPPLIES_REQUEST_SUB_ID": 6,
    "SUPPLIES_REQUEST_ID": 1179,
    "SUPPLIES_REQUEST_SUB_DETAIL": "ทดสอบ002",
    "SUPPLIES_REQUEST_SUB_AMOUNT": "20",
    "SUPPLIES_REQUEST_SUB_UNIT": "อัน",
    "SUPPLIES_REQUEST_SUB_PRICE": "8",
    "SUPPLIES_REQUEST_SUB_SUM_PRICE": null,
    "SUPPLIES_REQUEST_SUB_REMARK": null,
    "updated_at": "2019-10-12 14:56:34",
    "created_at": "2019-10-12 14:56:34",
    "SUPPLIES_REQUEST_SUBRE_ID": null
  },
  {
    "SUPPLIES_REQUEST_SUB_ID": 7,
    "SUPPLIES_REQUEST_ID": 1180,
    "SUPPLIES_REQUEST_SUB_DETAIL": "ทดสอบ01",
    "SUPPLIES_REQUEST_SUB_AMOUNT": "2",
    "SUPPLIES_REQUEST_SUB_UNIT": "อัน",
    "SUPPLIES_REQUEST_SUB_PRICE": "20",
    "SUPPLIES_REQUEST_SUB_SUM_PRICE": "40",
    "SUPPLIES_REQUEST_SUB_REMARK": null,
    "updated_at": "2019-10-12 17:07:12",
    "created_at": "2019-10-12 17:07:12",
    "SUPPLIES_REQUEST_SUBRE_ID": null
  },
  {
    "SUPPLIES_REQUEST_SUB_ID": 8,
    "SUPPLIES_REQUEST_ID": 1180,
    "SUPPLIES_REQUEST_SUB_DETAIL": "ทดสอบ02",
    "SUPPLIES_REQUEST_SUB_AMOUNT": "3",
    "SUPPLIES_REQUEST_SUB_UNIT": "ชิ้น",
    "SUPPLIES_REQUEST_SUB_PRICE": "100",
    "SUPPLIES_REQUEST_SUB_SUM_PRICE": "300",
    "SUPPLIES_REQUEST_SUB_REMARK": null,
    "updated_at": "2019-10-12 17:07:12",
    "created_at": "2019-10-12 17:07:12",
    "SUPPLIES_REQUEST_SUBRE_ID": null
  },
  {
    "SUPPLIES_REQUEST_SUB_ID": 10,
    "SUPPLIES_REQUEST_ID": 1182,
    "SUPPLIES_REQUEST_SUB_DETAIL": "ทดสอบสิ่งของ",
    "SUPPLIES_REQUEST_SUB_AMOUNT": "5",
    "SUPPLIES_REQUEST_SUB_UNIT": "ตัว",
    "SUPPLIES_REQUEST_SUB_PRICE": "200",
    "SUPPLIES_REQUEST_SUB_SUM_PRICE": "1000",
    "SUPPLIES_REQUEST_SUB_REMARK": null,
    "updated_at": "2019-11-26 15:36:21",
    "created_at": "2019-11-26 15:36:21",
    "SUPPLIES_REQUEST_SUBRE_ID": null
  }
]
```
