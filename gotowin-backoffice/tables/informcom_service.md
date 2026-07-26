# `informcom_service`

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
    "ID": 2044,
    "REPAIR_INDEX_ID": 1,
    "REPAIR_ID": "C65-00001",
    "REPAIR_TYPE_ID": "1",
    "REPAIR_SERVICE_NAME": "คอมพิวเตอร์ PC",
    "REPAIR_TOTAL": 1,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2022-09-26 13:35:54",
    "created_at": "2022-09-26 13:35:54"
  },
  {
    "ID": 2045,
    "REPAIR_INDEX_ID": 6,
    "REPAIR_ID": "C66-00001",
    "REPAIR_TYPE_ID": "2",
    "REPAIR_SERVICE_NAME": null,
    "REPAIR_TOTAL": null,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-01-12 15:03:59",
    "created_at": "2023-01-12 15:03:59"
  },
  {
    "ID": 2046,
    "REPAIR_INDEX_ID": 5,
    "REPAIR_ID": "C65-00005",
    "REPAIR_TYPE_ID": "3",
    "REPAIR_SERVICE_NAME": "ลงวินโดวใหม่",
    "REPAIR_TOTAL": 1,
    "REPAIR_PRICE_PER_UNIT": "0.00",
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-03-24 11:44:59",
    "created_at": "2023-03-24 11:44:59"
  },
  {
    "ID": 2047,
    "REPAIR_INDEX_ID": 3,
    "REPAIR_ID": "C65-00003",
    "REPAIR_TYPE_ID": "2",
    "REPAIR_SERVICE_NAME": "Fusing + Drun Unit",
    "REPAIR_TOTAL": 1,
    "REPAIR_PRICE_PER_UNIT": "6634.00",
    "REPAIR_SUM_PRICE": "6634.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-03-24 11:49:31",
    "created_at": "2023-03-24 11:49:31"
  },
  {
    "ID": 2048,
    "REPAIR_INDEX_ID": 2,
    "REPAIR_ID": "C65-00002",
    "REPAIR_TYPE_ID": "2",
    "REPAIR_SERVICE_NAME": "Fusing + Drum Unit",
    "REPAIR_TOTAL": 1,
    "REPAIR_PRICE_PER_UNIT": "6634.00",
    "REPAIR_SUM_PRICE": "6634.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-03-24 11:51:23",
    "created_at": "2023-03-24 11:51:23"
  },
  {
    "ID": 2049,
    "REPAIR_INDEX_ID": 8,
    "REPAIR_ID": "C66-00003",
    "REPAIR_TYPE_ID": "1",
    "REPAIR_SERVICE_NAME": "ดรัมเครื่องปรินท์",
    "REPAIR_TOTAL": null,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-05-24 10:33:11",
    "created_at": "2023-05-24 10:33:11"
  },
  {
    "ID": 2050,
    "REPAIR_INDEX_ID": 7,
    "REPAIR_ID": "C66-00002",
    "REPAIR_TYPE_ID": "3",
    "REPAIR_SERVICE_NAME": "Laser Scanner",
    "REPAIR_TOTAL": 1,
    "REPAIR_PRICE_PER_UNIT": "5000.00",
    "REPAIR_SUM_PRICE": "5000.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-05-24 10:36:14",
    "created_at": "2023-05-24 10:36:14"
  },
  {
    "ID": 2051,
    "REPAIR_INDEX_ID": 10,
    "REPAIR_ID": "C66-00005",
    "REPAIR_TYPE_ID": "2",
    "REPAIR_SERVICE_NAME": "Power Supply",
    "REPAIR_TOTAL": 1,
    "REPAIR_PRICE_PER_UNIT": "550.00",
    "REPAIR_SUM_PRICE": "550.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2023-07-03 09:51:26",
    "created_at": "2023-07-03 09:51:26"
  }
]
```
