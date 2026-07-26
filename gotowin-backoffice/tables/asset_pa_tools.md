# `asset_pa_tools`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| TOOLS_ID | int | NO | PRI | NULL | auto_increment |  |
| TOOLS_NAME | varchar(100) | YES |  |  |  |  |
| BRAND_ID | varchar(10) | YES |  |  |  |  |
| MODEL | varchar(10) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | TOOLS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "TOOLS_ID": 1,
    "TOOLS_NAME": "Digital Thermo Meter",
    "BRAND_ID": "1",
    "MODEL": "1521",
    "updated_at": null,
    "created_at": null
  },
  {
    "TOOLS_ID": 2,
    "TOOLS_NAME": "Digital Thermo Meter ",
    "BRAND_ID": "1",
    "MODEL": "4600",
    "updated_at": null,
    "created_at": null
  },
  {
    "TOOLS_ID": 3,
    "TOOLS_NAME": "Digital Pressure meter",
    "BRAND_ID": "2",
    "MODEL": "QA-PT 2G",
    "updated_at": null,
    "created_at": null
  },
  {
    "TOOLS_ID": 4,
    "TOOLS_NAME": "Digital Pressure meter",
    "BRAND_ID": "3",
    "MODEL": "BP-1",
    "updated_at": null,
    "created_at": null
  },
  {
    "TOOLS_ID": 5,
    "TOOLS_NAME": "Multiparameter tester",
    "BRAND_ID": "3",
    "MODEL": "Lion Hart3",
    "updated_at": null,
    "created_at": null
  },
  {
    "TOOLS_ID": 6,
    "TOOLS_NAME": "NIBP Analyzer ",
    "BRAND_ID": "3",
    "MODEL": "BP Pump2",
    "updated_at": null,
    "created_at": null
  },
  {
    "TOOLS_ID": 7,
    "TOOLS_NAME": "Electrosurgical Analyzer ",
    "BRAND_ID": "3",
    "MODEL": "RF 303",
    "updated_at": null,
    "created_at": null
  },
  {
    "TOOLS_ID": 8,
    "TOOLS_NAME": "SPO2 Analyzer",
    "BRAND_ID": "3",
    "MODEL": "Index2",
    "updated_at": null,
    "created_at": null
  }
]
```
