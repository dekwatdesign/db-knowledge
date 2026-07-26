# `informrepair_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| REPAIR_INDEX_ID | int | YES |  | NULL |  |  |
| REPAIR_ID | varchar(50) | YES |  |  |  |  |
| REPAIR_TYPE_ID | varchar(50) | YES |  |  |  |  |
| REPAIR_SERVICE_NAME | varchar(150) | YES |  |  |  |  |
| REPAIR_TOTAL | int | YES |  | 1 |  |  |
| REPAIR_PRICE_PER_UNIT | decimal(20,2) | YES |  | 0.00 |  |  |
| REPAIR_SUM_PRICE | decimal(20,2) | YES |  | 0.00 |  |  |
| REPAIR_STATUS | enum('True','False') | YES |  | False |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 1,
    "REPAIR_INDEX_ID": 1091,
    "REPAIR_ID": "R66-00004",
    "REPAIR_TYPE_ID": "2",
    "REPAIR_SERVICE_NAME": "หลอดไฟ",
    "REPAIR_TOTAL": 1,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-08-15 10:41:07",
    "created_at": "2023-08-15 10:41:07"
  },
  {
    "ID": 2,
    "REPAIR_INDEX_ID": 1089,
    "REPAIR_ID": "R66-00002",
    "REPAIR_TYPE_ID": "1",
    "REPAIR_SERVICE_NAME": null,
    "REPAIR_TOTAL": null,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-08-15 10:44:14",
    "created_at": "2023-08-15 10:44:14"
  },
  {
    "ID": 3,
    "REPAIR_INDEX_ID": 1090,
    "REPAIR_ID": "R66-00003",
    "REPAIR_TYPE_ID": null,
    "REPAIR_SERVICE_NAME": null,
    "REPAIR_TOTAL": null,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-08-17 13:33:43",
    "created_at": "2023-08-17 13:33:43"
  },
  {
    "ID": 4,
    "REPAIR_INDEX_ID": 1097,
    "REPAIR_ID": "R66-00010",
    "REPAIR_TYPE_ID": null,
    "REPAIR_SERVICE_NAME": null,
    "REPAIR_TOTAL": null,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-08-23 08:49:46",
    "created_at": "2023-08-23 08:49:46"
  },
  {
    "ID": 5,
    "REPAIR_INDEX_ID": 1088,
    "REPAIR_ID": "R66-00001",
    "REPAIR_TYPE_ID": null,
    "REPAIR_SERVICE_NAME": null,
    "REPAIR_TOTAL": null,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-08-23 08:56:56",
    "created_at": "2023-08-23 08:56:56"
  },
  {
    "ID": 6,
    "REPAIR_INDEX_ID": 1096,
    "REPAIR_ID": "R66-00009",
    "REPAIR_TYPE_ID": null,
    "REPAIR_SERVICE_NAME": null,
    "REPAIR_TOTAL": null,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-08-24 08:42:53",
    "created_at": "2023-08-24 08:42:53"
  },
  {
    "ID": 7,
    "REPAIR_INDEX_ID": 1098,
    "REPAIR_ID": "R66-00011",
    "REPAIR_TYPE_ID": "1",
    "REPAIR_SERVICE_NAME": "อ่างล้างมือ",
    "REPAIR_TOTAL": null,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-08-25 08:54:25",
    "created_at": "2023-08-25 08:54:25"
  },
  {
    "ID": 8,
    "REPAIR_INDEX_ID": 1098,
    "REPAIR_ID": "R66-00011",
    "REPAIR_TYPE_ID": "2",
    "REPAIR_SERVICE_NAME": "ชักโตกห้องน้ำ",
    "REPAIR_TOTAL": null,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-08-25 08:54:25",
    "created_at": "2023-08-25 08:54:25"
  }
]
```
