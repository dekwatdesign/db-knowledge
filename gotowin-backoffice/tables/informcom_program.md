# `informcom_program`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PRO_ID | int | NO | PRI | NULL | auto_increment |  |
| PRO_NAME | varchar(255) | YES |  |  |  |  |
| PRO_VER | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | PRO_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "PRO_ID": 1,
    "PRO_NAME": "Microsoft OFFICE 2007",
    "PRO_VER": "Enterprise",
    "updated_at": null,
    "created_at": null
  },
  {
    "PRO_ID": 2,
    "PRO_NAME": "Microsoft OFFICE 2010",
    "PRO_VER": "Profressional",
    "updated_at": null,
    "created_at": null
  },
  {
    "PRO_ID": 3,
    "PRO_NAME": "Microsoft OFFICE 2013",
    "PRO_VER": "Edition",
    "updated_at": null,
    "created_at": null
  },
  {
    "PRO_ID": 4,
    "PRO_NAME": "Microsoft OFFICE 2016",
    "PRO_VER": "Enterprise",
    "updated_at": null,
    "created_at": null
  },
  {
    "PRO_ID": 5,
    "PRO_NAME": "WINDOWS XP 32 BIT",
    "PRO_VER": "",
    "updated_at": null,
    "created_at": null
  },
  {
    "PRO_ID": 6,
    "PRO_NAME": "WINDOWS 7 32 BIT",
    "PRO_VER": "",
    "updated_at": null,
    "created_at": null
  },
  {
    "PRO_ID": 7,
    "PRO_NAME": "WINDOWS 7 64 BIT",
    "PRO_VER": "",
    "updated_at": null,
    "created_at": null
  },
  {
    "PRO_ID": 8,
    "PRO_NAME": "WINDOWS 8 32 BIT",
    "PRO_VER": "",
    "updated_at": null,
    "created_at": null
  }
]
```
