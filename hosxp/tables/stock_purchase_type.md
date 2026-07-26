# `stock_purchase_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| purchase_type | int(11) | NO | PRI | 0 |  |  |
| purchase_type_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| check_max_total | char(1) | YES |  | NULL |  |  |
| max_total | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | purchase_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "purchase_type": 1,
    "purchase_type_name": "ตกลงราคา",
    "hos_guid": null,
    "check_max_total": null,
    "max_total": null
  },
  {
    "purchase_type": 2,
    "purchase_type_name": "สอบราคา",
    "hos_guid": null,
    "check_max_total": null,
    "max_total": null
  },
  {
    "purchase_type": 3,
    "purchase_type_name": "ประกวดราคา",
    "hos_guid": null,
    "check_max_total": null,
    "max_total": null
  },
  {
    "purchase_type": 4,
    "purchase_type_name": "วิธีพิเศษ",
    "hos_guid": null,
    "check_max_total": null,
    "max_total": null
  },
  {
    "purchase_type": 5,
    "purchase_type_name": "กรณีพิเศษ",
    "hos_guid": null,
    "check_max_total": null,
    "max_total": null
  }
]
```
