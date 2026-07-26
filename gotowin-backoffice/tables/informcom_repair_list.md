# `informcom_repair_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| REPAIR_LIST_ID | int | NO | PRI | NULL | auto_increment |  |
| REPAIR_LIST_NAME | varchar(255) | YES |  |  |  |  |
| REPAIR_LIST_PRICE | decimal(20,2) | YES |  | 0.00 |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | REPAIR_LIST_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "REPAIR_LIST_ID": 4,
    "REPAIR_LIST_NAME": "อัพเดทระบบปฏิบัติการ (OS)",
    "REPAIR_LIST_PRICE": "0.00",
    "updated_at": "2023-02-09 09:58:10",
    "created_at": "2023-02-09 09:58:10"
  }
]
```
