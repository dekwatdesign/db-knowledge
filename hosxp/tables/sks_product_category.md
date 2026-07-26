# `sks_product_category`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sks_product_category_id | int(11) | NO | PRI | 0 |  |  |
| sks_product_category_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sks_product_category_name | sks_product_category_name | yes | 1 |
| PRIMARY | sks_product_category_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "sks_product_category_id": 1,
    "sks_product_category_name": "ยาแผนปัจจุบันที่เป็นผลิตภัณฑ์ทางการค้า",
    "hos_guid": null
  },
  {
    "sks_product_category_id": 2,
    "sks_product_category_name": "ยาแผนปัจจุบันผลิตใช้เอง",
    "hos_guid": null
  },
  {
    "sks_product_category_id": 3,
    "sks_product_category_name": "ยาแผนไทยที่เป็นผลิตภัณฑ์ทางการค้า",
    "hos_guid": null
  },
  {
    "sks_product_category_id": 4,
    "sks_product_category_name": "ยาแผนไทยผลิตใช้เอง",
    "hos_guid": null
  },
  {
    "sks_product_category_id": 5,
    "sks_product_category_name": "ยาแผนการรักษาทางเลือกอื่น",
    "hos_guid": null
  },
  {
    "sks_product_category_id": 6,
    "sks_product_category_name": "เวชภัณฑ์",
    "hos_guid": null
  },
  {
    "sks_product_category_id": 7,
    "sks_product_category_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
