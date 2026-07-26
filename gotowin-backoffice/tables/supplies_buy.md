# `supplies_buy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BUY_ID | int | NO | PRI | NULL | auto_increment |  |
| BUY_NAME | varchar(100) | YES |  |  |  |  |
| BUY_COMMENT | varchar(255) | YES |  |  |  | คำอธิบาย |
| PRICE_MIN | decimal(20,2) | YES |  | NULL |  |  |
| PRICE_MAX | decimal(20,2) | YES |  | NULL |  |  |
| MAKE_BY | varchar(255) | YES |  |  |  | ดำเนินการโดย |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| NUM_REF | varchar(20) | YES |  |  |  | รหัสอ้างอิง |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | BUY_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "BUY_ID": 1,
    "BUY_NAME": "ตกลงราคา",
    "BUY_COMMENT": "ตกลงราคาไม่เกิน 500000 บาท",
    "PRICE_MIN": "0.00",
    "PRICE_MAX": "100000.00",
    "MAKE_BY": "เจ้าหน้าที่พัสดุ",
    "ACTIVE": "True",
    "NUM_REF": null,
    "updated_at": "2020-05-08 04:35:51",
    "created_at": null
  },
  {
    "BUY_ID": 2,
    "BUY_NAME": "สอบราคา",
    "BUY_COMMENT": "วงเงินเกินกว่า 100000 แต่ไม่เกิน 2000000",
    "PRICE_MIN": "100001.00",
    "PRICE_MAX": "2000000.00",
    "MAKE_BY": "คณะกรรมการจัดหารพัสดุ",
    "ACTIVE": "True",
    "NUM_REF": null,
    "updated_at": "2022-01-19 07:46:52",
    "created_at": null
  },
  {
    "BUY_ID": 3,
    "BUY_NAME": "ประกวดราคา",
    "BUY_COMMENT": "วงเงินเกินกว่า 2000000 ต่อครั้ง ขึ้นไป",
    "PRICE_MIN": "2000001.00",
    "PRICE_MAX": "999999999.00",
    "MAKE_BY": "คณะกรรมการจัดหารพัสดุ",
    "ACTIVE": "True",
    "NUM_REF": null,
    "updated_at": "2022-01-19 07:46:53",
    "created_at": null
  },
  {
    "BUY_ID": 4,
    "BUY_NAME": "พิเศษ",
    "BUY_COMMENT": "ไม่จำกัดวงเงิน",
    "PRICE_MIN": "0.00",
    "PRICE_MAX": "999999999.00",
    "MAKE_BY": "คณะกรรมการจัดหารพัสดุ กำหนดเงื่อนไขการดำเนินการด้วยวิธีพิเศษ",
    "ACTIVE": "True",
    "NUM_REF": null,
    "updated_at": "2022-01-19 07:46:54",
    "created_at": null
  },
  {
    "BUY_ID": 5,
    "BUY_NAME": "กรณีพิเศษ",
    "BUY_COMMENT": "ไม่จำกัดวงเงิน",
    "PRICE_MIN": "0.00",
    "PRICE_MAX": "999999999.00",
    "MAKE_BY": "กำหนดเกณฑ์และวิธีการโดยคณะกรรมการการเงิน",
    "ACTIVE": "True",
    "NUM_REF": null,
    "updated_at": "2022-01-19 07:46:56",
    "created_at": null
  },
  {
    "BUY_ID": 6,
    "BUY_NAME": "ประมูลด้วยระบบอิเล็กทรอนิกส์ e-auction",
    "BUY_COMMENT": "-",
    "PRICE_MIN": "0.00",
    "PRICE_MAX": "0.00",
    "MAKE_BY": "-",
    "ACTIVE": "True",
    "NUM_REF": null,
    "updated_at": "2022-01-19 07:46:57",
    "created_at": null
  },
  {
    "BUY_ID": 7,
    "BUY_NAME": "e-market",
    "BUY_COMMENT": "",
    "PRICE_MIN": null,
    "PRICE_MAX": null,
    "MAKE_BY": "",
    "ACTIVE": "True",
    "NUM_REF": null,
    "updated_at": null,
    "created_at": null
  },
  {
    "BUY_ID": 8,
    "BUY_NAME": "e-bidding",
    "BUY_COMMENT": "",
    "PRICE_MIN": null,
    "PRICE_MAX": null,
    "MAKE_BY": "",
    "ACTIVE": "True",
    "NUM_REF": null,
    "updated_at": "2022-01-19 07:46:58",
    "created_at": null
  }
]
```
