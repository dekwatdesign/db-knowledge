# `blb_bag_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_bag_type_id | int(11) | NO | PRI | 0 |  |  |
| blb_bag_type_name | varchar(50) | YES | MUL | NULL |  |  |
| blb_bag_type_code | varchar(3) | YES |  | NULL |  |  |
| blb_bag_type_cc | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_type_name | blb_bag_type_name | no | 1 |
| PRIMARY | blb_bag_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "blb_bag_type_id": 1,
    "blb_bag_type_name": "TUBE",
    "blb_bag_type_code": null,
    "blb_bag_type_cc": null
  },
  {
    "blb_bag_type_id": 2,
    "blb_bag_type_name": "CPD-A1 Single-450",
    "blb_bag_type_code": null,
    "blb_bag_type_cc": null
  },
  {
    "blb_bag_type_id": 4,
    "blb_bag_type_name": "CPD-A1 Single-350",
    "blb_bag_type_code": null,
    "blb_bag_type_cc": null
  },
  {
    "blb_bag_type_id": 5,
    "blb_bag_type_name": "Quadruple-450",
    "blb_bag_type_code": null,
    "blb_bag_type_cc": null
  },
  {
    "blb_bag_type_id": 9,
    "blb_bag_type_name": "CPD-A1 Double-450",
    "blb_bag_type_code": null,
    "blb_bag_type_cc": null
  },
  {
    "blb_bag_type_id": 10,
    "blb_bag_type_name": "CPD-A1 Triple-450",
    "blb_bag_type_code": null,
    "blb_bag_type_cc": null
  },
  {
    "blb_bag_type_id": 11,
    "blb_bag_type_name": "Single Donor Plasma Pheresis",
    "blb_bag_type_code": null,
    "blb_bag_type_cc": null
  },
  {
    "blb_bag_type_id": 13,
    "blb_bag_type_name": "Single Donor Red Cells",
    "blb_bag_type_code": null,
    "blb_bag_type_cc": null
  }
]
```
