# `stock_doc_setting`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_doc_setting_id | int(11) | NO | PRI | 0 |  |  |
| stock_doc_setting_name | varchar(200) | YES | UNI | NULL |  |  |
| auto_gen | char(1) | YES |  | NULL |  |  |
| document_prefix | varchar(10) | YES |  | NULL |  |  |
| start_number | int(11) | YES |  | NULL |  |  |
| add_zero_width | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_doc_setting_name | stock_doc_setting_name | yes | 1 |
| PRIMARY | stock_doc_setting_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "stock_doc_setting_id": 1,
    "stock_doc_setting_name": "ใบเบิกสินค้าจากคลัง",
    "auto_gen": "N",
    "document_prefix": "SD",
    "start_number": 1,
    "add_zero_width": 5
  },
  {
    "stock_doc_setting_id": 2,
    "stock_doc_setting_name": "ใบตัดจ่ายสินค้า(manual)",
    "auto_gen": "N",
    "document_prefix": "MN",
    "start_number": 1,
    "add_zero_width": 5
  },
  {
    "stock_doc_setting_id": 3,
    "stock_doc_setting_name": "ใบตรวจนับสินค้าคลังย่อย",
    "auto_gen": "N",
    "document_prefix": "AJ",
    "start_number": 1,
    "add_zero_width": 5
  }
]
```
