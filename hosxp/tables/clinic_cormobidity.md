# `clinic_cormobidity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic | char(3) | NO | PRI |  |  |  |
| cormobidity | tinyint(4) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| clinic | clinic | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| name | name | no | 1 |
| PRIMARY | clinic | yes | 1 |
| PRIMARY | cormobidity | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "clinic": "001",
    "cormobidity": 1,
    "name": "ภาวะแทรกซ้อนทางตา (เบาหวาน)",
    "hos_guid": null
  },
  {
    "clinic": "001",
    "cormobidity": 2,
    "name": "ภาวะแทรกซ้อนทางไต  (เบาหวาน)",
    "hos_guid": null
  },
  {
    "clinic": "001",
    "cormobidity": 3,
    "name": "ภาวะแทรกซ้อนระบบประสาท  (เบาหวาน)",
    "hos_guid": null
  },
  {
    "clinic": "001",
    "cormobidity": 4,
    "name": "ภาวะแทรกซ้อนหลอดเลือดแดง  (เบาหวาน)",
    "hos_guid": null
  },
  {
    "clinic": "001",
    "cormobidity": 5,
    "name": "ภาวะแทรกซ้อนต้องตัดอวัยวะ  (เบาหวาน)",
    "hos_guid": null
  },
  {
    "clinic": "001",
    "cormobidity": 6,
    "name": "ภาวะแทรกซ้อนหลายอย่าง  (เบาหวาน)",
    "hos_guid": null
  },
  {
    "clinic": "001",
    "cormobidity": 7,
    "name": "ภาวะแทรกซ้อนอื่นๆ  (เบาหวาน)",
    "hos_guid": null
  },
  {
    "clinic": "002",
    "cormobidity": 1,
    "name": "ภาวะแทรกซ้อนทางหัวใจ  (ความดัน)",
    "hos_guid": null
  }
]
```
