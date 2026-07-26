# `asset_care_repair_service`

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

## Sample rows (5)

```json
[
  {
    "ID": 1,
    "REPAIR_INDEX_ID": 4,
    "REPAIR_ID": "M66-00004",
    "REPAIR_TYPE_ID": null,
    "REPAIR_SERVICE_NAME": null,
    "REPAIR_TOTAL": null,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2024-01-08 08:55:37",
    "created_at": "2024-01-08 08:55:37"
  },
  {
    "ID": 2,
    "REPAIR_INDEX_ID": 6,
    "REPAIR_ID": "M67-00001",
    "REPAIR_TYPE_ID": null,
    "REPAIR_SERVICE_NAME": null,
    "REPAIR_TOTAL": null,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2024-01-08 08:55:47",
    "created_at": "2024-01-08 08:55:47"
  },
  {
    "ID": 3,
    "REPAIR_INDEX_ID": 7,
    "REPAIR_ID": "M67-00002",
    "REPAIR_TYPE_ID": null,
    "REPAIR_SERVICE_NAME": null,
    "REPAIR_TOTAL": null,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2024-01-08 08:55:57",
    "created_at": "2024-01-08 08:55:57"
  },
  {
    "ID": 4,
    "REPAIR_INDEX_ID": 3,
    "REPAIR_ID": "M66-00003",
    "REPAIR_TYPE_ID": null,
    "REPAIR_SERVICE_NAME": null,
    "REPAIR_TOTAL": null,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2024-01-08 08:56:07",
    "created_at": "2024-01-08 08:56:07"
  },
  {
    "ID": 5,
    "REPAIR_INDEX_ID": 5,
    "REPAIR_ID": "M66-00005",
    "REPAIR_TYPE_ID": null,
    "REPAIR_SERVICE_NAME": null,
    "REPAIR_TOTAL": null,
    "REPAIR_PRICE_PER_UNIT": null,
    "REPAIR_SUM_PRICE": "0.00",
    "REPAIR_STATUS": "False",
    "updated_at": "2024-01-08 08:56:16",
    "created_at": "2024-01-08 08:56:16"
  }
]
```
