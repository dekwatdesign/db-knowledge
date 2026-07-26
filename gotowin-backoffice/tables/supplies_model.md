# `supplies_model`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| MODEL_ID | int | NO | PRI | NULL | auto_increment |  |
| MODEL_NAME | varchar(100) | YES |  |  |  | ชื่อรุ่น |
| BRAND_ID | varchar(10) | YES |  |  |  | อ้างอิงยี่ห้อ |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | MODEL_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "MODEL_ID": 1,
    "MODEL_NAME": "COMMUTER",
    "BRAND_ID": "8",
    "updated_at": null,
    "created_at": null
  },
  {
    "MODEL_ID": 2,
    "MODEL_NAME": "RANGER",
    "BRAND_ID": "9",
    "updated_at": null,
    "created_at": null
  },
  {
    "MODEL_ID": 3,
    "MODEL_NAME": "TRITON",
    "BRAND_ID": "10",
    "updated_at": null,
    "created_at": null
  },
  {
    "MODEL_ID": 4,
    "MODEL_NAME": "DMAX",
    "BRAND_ID": "11",
    "updated_at": null,
    "created_at": null
  },
  {
    "MODEL_ID": 5,
    "MODEL_NAME": "WAVE 100",
    "BRAND_ID": "12",
    "updated_at": null,
    "created_at": null
  },
  {
    "MODEL_ID": 6,
    "MODEL_NAME": "GX2",
    "BRAND_ID": "12",
    "updated_at": null,
    "created_at": null
  },
  {
    "MODEL_ID": 7,
    "MODEL_NAME": "Econo Air",
    "BRAND_ID": "10",
    "updated_at": null,
    "created_at": null
  },
  {
    "MODEL_ID": 8,
    "MODEL_NAME": "UGX6",
    "BRAND_ID": "17",
    "updated_at": null,
    "created_at": null
  }
]
```
