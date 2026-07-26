# `supplies_continue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CONTINUE_PRICE_ID | varchar(2) | NO | PRI |  |  |  |
| CONTINUE_PRICE_NAME | varchar(60) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CONTINUE_PRICE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "CONTINUE_PRICE_ID": "1",
    "CONTINUE_PRICE_NAME": "ราคาสืบจังหวัด",
    "updated_at": null,
    "created_at": null
  },
  {
    "CONTINUE_PRICE_ID": "2",
    "CONTINUE_PRICE_NAME": "ราคาสืบเขต",
    "updated_at": null,
    "created_at": null
  },
  {
    "CONTINUE_PRICE_ID": "3",
    "CONTINUE_PRICE_NAME": "ราคาจัดซื้อเอง",
    "updated_at": null,
    "created_at": null
  }
]
```
