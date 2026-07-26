# `supplies_unit_ref`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| SUP_ID | varchar(10) | YES |  |  |  |  |
| SUP_UNIT_ID | varchar(10) | YES | MUL |  |  |  |
| SUP_UNIT_NAME | varchar(50) | YES |  |  |  |  |
| SUP_TOTAL | int | YES |  | NULL |  |  |
| SUP_PRICE | decimal(20,5) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| IX_SUPPLIES_UNIT_ID | SUP_UNIT_ID | no | 1 |
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 10,
    "SUP_ID": "6",
    "SUP_UNIT_ID": "",
    "SUP_UNIT_NAME": "เครื่อง",
    "SUP_TOTAL": 1,
    "SUP_PRICE": "12400.00000",
    "updated_at": "2020-09-23 15:53:13",
    "created_at": "2020-09-23 15:53:13"
  },
  {
    "ID": 11,
    "SUP_ID": "7",
    "SUP_UNIT_ID": "",
    "SUP_UNIT_NAME": "",
    "SUP_TOTAL": 0,
    "SUP_PRICE": "12400.00000",
    "updated_at": "2021-12-03 13:19:46",
    "created_at": "2020-09-23 16:16:21"
  },
  {
    "ID": 29,
    "SUP_ID": "13",
    "SUP_UNIT_ID": "",
    "SUP_UNIT_NAME": "ชุด",
    "SUP_TOTAL": 1,
    "SUP_PRICE": "70000.00000",
    "updated_at": "2020-10-01 14:53:47",
    "created_at": "2020-10-01 14:53:47"
  },
  {
    "ID": 32,
    "SUP_ID": "8",
    "SUP_UNIT_ID": "",
    "SUP_UNIT_NAME": "เครื่อง",
    "SUP_TOTAL": 1,
    "SUP_PRICE": "240000.00000",
    "updated_at": "2020-10-01 15:02:38",
    "created_at": "2020-10-01 15:02:38"
  },
  {
    "ID": 35,
    "SUP_ID": "11",
    "SUP_UNIT_ID": "",
    "SUP_UNIT_NAME": "ชุด",
    "SUP_TOTAL": 1,
    "SUP_PRICE": "22000.00000",
    "updated_at": "2020-10-01 15:05:02",
    "created_at": "2020-10-01 15:05:02"
  },
  {
    "ID": 36,
    "SUP_ID": "12",
    "SUP_UNIT_ID": "",
    "SUP_UNIT_NAME": "ชุด",
    "SUP_TOTAL": 1,
    "SUP_PRICE": "11000.00000",
    "updated_at": "2020-10-01 15:05:13",
    "created_at": "2020-10-01 15:05:13"
  },
  {
    "ID": 37,
    "SUP_ID": "10",
    "SUP_UNIT_ID": "",
    "SUP_UNIT_NAME": "ระบบ",
    "SUP_TOTAL": 1,
    "SUP_PRICE": "500000.00000",
    "updated_at": "2020-10-01 15:07:10",
    "created_at": "2020-10-01 15:07:10"
  },
  {
    "ID": 41,
    "SUP_ID": "9",
    "SUP_UNIT_ID": "",
    "SUP_UNIT_NAME": "เครื่อง",
    "SUP_TOTAL": 1,
    "SUP_PRICE": "16000.00000",
    "updated_at": "2020-10-01 15:09:46",
    "created_at": "2020-10-01 15:09:46"
  }
]
```
