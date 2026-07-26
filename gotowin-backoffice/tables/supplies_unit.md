# `supplies_unit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SUP_UNIT_ID | int | NO | PRI | NULL | auto_increment |  |
| SUP_UNIT_NAME | varchar(50) | YES | UNI |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| IX_SUPPLIES_UNIT_ID | SUP_UNIT_ID | no | 1 |
| IX_SUPPLIES_UNIT_NAME | SUP_UNIT_NAME | yes | 1 |
| PRIMARY | SUP_UNIT_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "SUP_UNIT_ID": 1,
    "SUP_UNIT_NAME": "หลอด",
    "ACTIVE": "True",
    "updated_at": "2019-09-11 09:42:31",
    "created_at": null
  },
  {
    "SUP_UNIT_ID": 2,
    "SUP_UNIT_NAME": "ม้วน",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_UNIT_ID": 3,
    "SUP_UNIT_NAME": "รีม",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_UNIT_ID": 4,
    "SUP_UNIT_NAME": "กล่อง",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_UNIT_ID": 5,
    "SUP_UNIT_NAME": "แผ่น",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_UNIT_ID": 6,
    "SUP_UNIT_NAME": "ขวด",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_UNIT_ID": 7,
    "SUP_UNIT_NAME": "อัน",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "SUP_UNIT_ID": 8,
    "SUP_UNIT_NAME": "ซอง",
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  }
]
```
