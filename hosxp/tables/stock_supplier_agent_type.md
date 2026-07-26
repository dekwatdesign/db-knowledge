# `stock_supplier_agent_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_supplier_agent_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_supplier_agent_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_supplier_agent_type_name | stock_supplier_agent_type_name | yes | 1 |
| PRIMARY | stock_supplier_agent_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "stock_supplier_agent_type_id": 1,
    "stock_supplier_agent_type_name": "ตัวแทนขาย",
    "hos_guid": null
  },
  {
    "stock_supplier_agent_type_id": 2,
    "stock_supplier_agent_type_name": "ตัวแทนติดต่อ",
    "hos_guid": null
  },
  {
    "stock_supplier_agent_type_id": 3,
    "stock_supplier_agent_type_name": "ตัวแทนเสนอราคา",
    "hos_guid": null
  }
]
```
