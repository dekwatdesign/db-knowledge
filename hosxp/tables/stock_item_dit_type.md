# `stock_item_dit_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_dit_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_item_dit_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_item_dit_type_name | stock_item_dit_type_name | yes | 1 |
| PRIMARY | stock_item_dit_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "stock_item_dit_type_id": 1,
    "stock_item_dit_type_name": "บัญชีนวัตกรรมไทย [ชีววัตถุ]"
  },
  {
    "stock_item_dit_type_id": 2,
    "stock_item_dit_type_name": "บัญชีนวัตกรรมไทย [ยาเคมี]"
  },
  {
    "stock_item_dit_type_id": 3,
    "stock_item_dit_type_name": "บัญชีนวัตกรรมไทย [วัสดุทางเภสัชกรรม]"
  }
]
```
