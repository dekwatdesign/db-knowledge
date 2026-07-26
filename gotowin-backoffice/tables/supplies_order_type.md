# `supplies_order_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SUPPLIES_ORDER_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| SUPPLIES_ORDER_TYPE_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SUPPLIES_ORDER_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "SUPPLIES_ORDER_TYPE_ID": 1,
    "SUPPLIES_ORDER_TYPE_NAME": "เบิกรอบปกติ",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUPPLIES_ORDER_TYPE_ID": 2,
    "SUPPLIES_ORDER_TYPE_NAME": "เบิกฉุกเฉิน",
    "updated_at": null,
    "created_at": null
  }
]
```
