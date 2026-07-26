# `adr_product_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| adr_product_type_id | int(11) | NO | PRI | 0 |  |  |
| adr_product_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_adr_product_type_name | adr_product_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | adr_product_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "adr_product_type_id": 1,
    "adr_product_type_name": "ยา/วัตถุเสพติด",
    "hos_guid": null
  },
  {
    "adr_product_type_id": 2,
    "adr_product_type_name": "ยาใหม่ (SMP)",
    "hos_guid": null
  },
  {
    "adr_product_type_id": 3,
    "adr_product_type_name": "อาหาร",
    "hos_guid": null
  },
  {
    "adr_product_type_id": 4,
    "adr_product_type_name": "เครื่องสำอาง",
    "hos_guid": null
  },
  {
    "adr_product_type_id": 5,
    "adr_product_type_name": "เครื่องมือแพทย์",
    "hos_guid": null
  },
  {
    "adr_product_type_id": 6,
    "adr_product_type_name": "วัตถุอันตรายด้านสาธารณสุข",
    "hos_guid": null
  }
]
```
