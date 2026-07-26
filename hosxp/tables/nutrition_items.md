# `nutrition_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutrition_items_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |
| must_paid | char(1) | YES |  | NULL |  |  |
| use_right | char(1) | YES |  | NULL |  |  |
| unitprice | double(15,3) | YES |  | NULL |  |  |
| nutrition_type | tinyint(4) | YES |  | NULL |  |  |
| calorie | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name_unique_unique_unique_unique_unique_unique | name | no | 1 |
| PRIMARY | nutrition_items_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nutrition_items_id": 1,
    "icode": "",
    "name": "ข้ามต้ม",
    "must_paid": null,
    "use_right": null,
    "unitprice": 0.0,
    "nutrition_type": 1,
    "calorie": 0,
    "hos_guid": null
  },
  {
    "nutrition_items_id": 2,
    "icode": "",
    "name": "อาหารสำหรับผู้แพ้ไข่",
    "must_paid": null,
    "use_right": null,
    "unitprice": 0.0,
    "nutrition_type": 1,
    "calorie": 0,
    "hos_guid": null
  },
  {
    "nutrition_items_id": 3,
    "icode": "",
    "name": "อาหารสำหรับผู้แพ้แป้ง",
    "must_paid": null,
    "use_right": null,
    "unitprice": 0.0,
    "nutrition_type": 1,
    "calorie": 0,
    "hos_guid": null
  },
  {
    "nutrition_items_id": 4,
    "icode": "",
    "name": "อาหารสำหรับผู้แพ้อาหารทะเล",
    "must_paid": null,
    "use_right": null,
    "unitprice": 0.0,
    "nutrition_type": 1,
    "calorie": 0,
    "hos_guid": null
  },
  {
    "nutrition_items_id": 5,
    "icode": "",
    "name": "อาหารกากใยต่ำ",
    "must_paid": null,
    "use_right": null,
    "unitprice": 0.0,
    "nutrition_type": 1,
    "calorie": 0,
    "hos_guid": null
  },
  {
    "nutrition_items_id": 6,
    "icode": "",
    "name": "อาหารกากใยสูง",
    "must_paid": null,
    "use_right": null,
    "unitprice": 0.0,
    "nutrition_type": 1,
    "calorie": 0,
    "hos_guid": null
  },
  {
    "nutrition_items_id": 7,
    "icode": "",
    "name": "อาหารแคลอรี่ต่ำ",
    "must_paid": null,
    "use_right": null,
    "unitprice": 0.0,
    "nutrition_type": 1,
    "calorie": 0,
    "hos_guid": null
  },
  {
    "nutrition_items_id": 8,
    "icode": "",
    "name": "อาหารแคลอรี่สูง",
    "must_paid": null,
    "use_right": null,
    "unitprice": 0.0,
    "nutrition_type": 1,
    "calorie": 0,
    "hos_guid": null
  }
]
```
