# `informcom_hardware`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HARDWARE_ID | int | NO | PRI | NULL | auto_increment |  |
| HARDWARE_NAME | varchar(50) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | HARDWARE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HARDWARE_ID": 1,
    "HARDWARE_NAME": "RAM",
    "updated_at": null,
    "created_at": null
  },
  {
    "HARDWARE_ID": 2,
    "HARDWARE_NAME": "HARDDISK",
    "updated_at": null,
    "created_at": null
  },
  {
    "HARDWARE_ID": 3,
    "HARDWARE_NAME": "MANBOARD",
    "updated_at": null,
    "created_at": null
  },
  {
    "HARDWARE_ID": 4,
    "HARDWARE_NAME": "DVD ROM",
    "updated_at": null,
    "created_at": null
  },
  {
    "HARDWARE_ID": 5,
    "HARDWARE_NAME": "CPU",
    "updated_at": null,
    "created_at": null
  },
  {
    "HARDWARE_ID": 6,
    "HARDWARE_NAME": "VGA Card",
    "updated_at": null,
    "created_at": null
  },
  {
    "HARDWARE_ID": 7,
    "HARDWARE_NAME": "Network Card",
    "updated_at": null,
    "created_at": null
  },
  {
    "HARDWARE_ID": 8,
    "HARDWARE_NAME": "Toner Drum",
    "updated_at": null,
    "created_at": null
  }
]
```
