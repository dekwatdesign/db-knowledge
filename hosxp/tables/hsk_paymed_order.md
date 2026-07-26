# `hsk_paymed_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| an | varchar(10) | YES | MUL | NULL |  |  |
| pay_id | varchar(20) | YES |  | NULL |  |  |
| pay_type | varchar(20) | YES | MUL | NULL |  |  |
| icode | varchar(10) | YES | MUL | NULL |  |  |
| icode_name | varchar(200) | YES |  | NULL |  |  |
| shortlistt | varchar(200) | YES |  | NULL |  |  |
| qty | int(5) | YES |  | NULL |  |  |
| orderstatus | varchar(1) | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| order_date | date | YES | MUL | NULL |  |  |
| off_date | date | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| icode | icode | no | 1 |
| order_date | order_date | no | 1 |
| pay_type | pay_type | no | 1 |
| PRIMARY | id | yes | 1 |
| UK | an | yes | 1 |
| UK | pay_id | yes | 2 |
| UK | pay_type | yes | 3 |
| UK | icode | yes | 4 |
| UK | vstdate | yes | 5 |
| UK | id | yes | 6 |
| vstdate | vstdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 840051,
    "an": "670001142",
    "pay_id": "P",
    "pay_type": "ใช้ตามแพทย์สั่ง",
    "icode": "1670047",
    "icode_name": "GPO Risperidone sol. 1 mg./ml. ขวด",
    "shortlistt": "รับประทานครั้งละ 0.15 มิลลิกรัม(ซีซี)",
    "qty": 0,
    "orderstatus": "C",
    "vsttime": "12:00:40",
    "vstdate": "2024-08-27",
    "order_date": "2024-07-08",
    "off_date": null,
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "id": 840052,
    "an": "670001288",
    "pay_id": "B",
    "pay_type": "7",
    "icode": "1670047",
    "icode_name": "GPO Risperidone sol. 1 mg./ml. ขวด",
    "shortlistt": ".252pm ชน (0.25 mg เช้า hs)",
    "qty": 0,
    "orderstatus": "C",
    "vsttime": "15:51:37",
    "vstdate": "2024-09-03",
    "order_date": "2024-08-28",
    "off_date": null,
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "id": 840053,
    "an": "670001337",
    "pay_id": "P",
    "pay_type": "ใช้ตามแพทย์สั่ง",
    "icode": "1670047",
    "icode_name": "GPO Risperidone sol. 1 mg./ml. ขวด",
    "shortlistt": "รับประทาน 0.25 มิลลิกรัม",
    "qty": 0,
    "orderstatus": "C",
    "vsttime": "15:52:13",
    "vstdate": "2024-09-03",
    "order_date": "2024-08-15",
    "off_date": null,
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "id": 840054,
    "an": "670001337",
    "pay_id": "P",
    "pay_type": "ใช้ตามแพทย์สั่ง",
    "icode": "1000097",
    "icode_name": "Methylphenidate(RITALIN) 10 mg เม็ด",
    "shortlistt": ".52ptชท(1/2 เม็ดx2 เช้า เที่ยง)",
    "qty": 0,
    "orderstatus": "C",
    "vsttime": "15:52:13",
    "vstdate": "2024-09-03",
    "order_date": "2024-08-15",
    "off_date": null,
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "id": 840059,
    "an": "670001420",
    "pay_id": "A",
    "pay_type": "8",
    "icode": "1000159",
    "icode_name": "Depakine ChroNo 500 mg เม็ด",
    "shortlistt": ".52pt(1/2 เม็ด * 2PC) รับประทานครั้งละ ครึ่ง เม็ด",
    "qty": 1,
    "orderstatus": "C",
    "vsttime": "10:55:02",
    "vstdate": "2024-09-05",
    "order_date": "2024-08-19",
    "off_date": null,
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "id": 840060,
    "an": "670001420",
    "pay_id": "A",
    "pay_type": "17",
    "icode": "1000159",
    "icode_name": "Depakine ChroNo 500 mg เม็ด",
    "shortlistt": ".52pt(1/2 เม็ด * 2PC) รับประทานครั้งละ ครึ่ง เม็ด",
    "qty": 1,
    "orderstatus": "C",
    "vsttime": "10:59:06",
    "vstdate": "2024-09-05",
    "order_date": "2024-08-19",
    "off_date": null,
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "id": 840061,
    "an": "670001257",
    "pay_id": "P",
    "pay_type": "CPG",
    "icode": "1000097",
    "icode_name": "Methylphenidate(RITALIN) 10 mg เม็ด",
    "shortlistt": "ทาน 1 เม็ด เช้า(เฉพาะวันศุกร์ ทาน 1เม็ดครึ่ง)",
    "qty": 0,
    "orderstatus": "C",
    "vsttime": "11:08:20",
    "vstdate": "2024-09-05",
    "order_date": "2024-08-23",
    "off_date": null,
    "staff": "[MASKED_FULLNAME]"
  },
  {
    "id": 840062,
    "an": "670001257",
    "pay_id": "P",
    "pay_type": "PRN",
    "icode": "1000097",
    "icode_name": "Methylphenidate(RITALIN) 10 mg เม็ด",
    "shortlistt": "ทาน 1 เม็ด เช้า(เฉพาะวันศุกร์ ทาน 1เม็ดครึ่ง)",
    "qty": 0,
    "orderstatus": "C",
    "vsttime": "11:09:26",
    "vstdate": "2024-09-05",
    "order_date": "2024-08-23",
    "off_date": null,
    "staff": "[MASKED_FULLNAME]"
  }
]
```
