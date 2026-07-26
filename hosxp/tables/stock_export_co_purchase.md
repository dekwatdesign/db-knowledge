# `stock_export_co_purchase`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_export_co_purchase_id | int(11) | NO | PRI | 0 |  |  |
| co_purchase_id | int(11) | YES |  | NULL |  |  |
| code_desc | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_export_co_purchase_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "stock_export_co_purchase_id": 1,
    "co_purchase_id": 1,
    "code_desc": "ไม่ได้ซื้อร่วม"
  },
  {
    "stock_export_co_purchase_id": 2,
    "co_purchase_id": 2,
    "code_desc": "จัดซื้อร่วมจังหวัด"
  },
  {
    "stock_export_co_purchase_id": 3,
    "co_purchase_id": 3,
    "code_desc": "จัดซื้อร่วมเขต"
  },
  {
    "stock_export_co_purchase_id": 4,
    "co_purchase_id": 4,
    "code_desc": "จัดซื้อร่วมกรม"
  },
  {
    "stock_export_co_purchase_id": 5,
    "co_purchase_id": 5,
    "code_desc": "จัดซื้อร่วมประเทศ"
  }
]
```
