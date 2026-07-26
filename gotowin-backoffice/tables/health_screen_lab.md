# `health_screen_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HEALTH_SCREEN_LAB_ID | int | NO | PRI | NULL | auto_increment |  |
| HEALTH_SCREEN_LAB_CODE | varchar(255) | YES |  | NULL |  |  |
| HEALTH_SCREEN_LAB_NAME | varchar(255) | YES |  | NULL |  |  |
| HEALTH_SCREEN_LAB_PICE | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| HEALTH_SCREEN_LAB_TYPE | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | HEALTH_SCREEN_LAB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HEALTH_SCREEN_LAB_ID": 1,
    "HEALTH_SCREEN_LAB_CODE": "41001",
    "HEALTH_SCREEN_LAB_NAME": "Film Chest",
    "HEALTH_SCREEN_LAB_PICE": "170",
    "updated_at": null,
    "created_at": null,
    "HEALTH_SCREEN_LAB_TYPE": "1"
  },
  {
    "HEALTH_SCREEN_LAB_ID": 2,
    "HEALTH_SCREEN_LAB_CODE": "41301",
    "HEALTH_SCREEN_LAB_NAME": "Mass Chest",
    "HEALTH_SCREEN_LAB_PICE": "52",
    "updated_at": null,
    "created_at": null,
    "HEALTH_SCREEN_LAB_TYPE": "1"
  },
  {
    "HEALTH_SCREEN_LAB_ID": 3,
    "HEALTH_SCREEN_LAB_CODE": "31001",
    "HEALTH_SCREEN_LAB_NAME": "Unne Examination-Urine Analysis",
    "HEALTH_SCREEN_LAB_PICE": "50",
    "updated_at": null,
    "created_at": null,
    "HEALTH_SCREEN_LAB_TYPE": "1"
  },
  {
    "HEALTH_SCREEN_LAB_ID": 4,
    "HEALTH_SCREEN_LAB_CODE": "31201",
    "HEALTH_SCREEN_LAB_NAME": "Stool Examination-Routine direct amear",
    "HEALTH_SCREEN_LAB_PICE": "70",
    "updated_at": null,
    "created_at": null,
    "HEALTH_SCREEN_LAB_TYPE": "1"
  },
  {
    "HEALTH_SCREEN_LAB_ID": 5,
    "HEALTH_SCREEN_LAB_CODE": "31203",
    "HEALTH_SCREEN_LAB_NAME": "Occult blood",
    "HEALTH_SCREEN_LAB_PICE": "0",
    "updated_at": null,
    "created_at": null,
    "HEALTH_SCREEN_LAB_TYPE": "1"
  },
  {
    "HEALTH_SCREEN_LAB_ID": 6,
    "HEALTH_SCREEN_LAB_CODE": "30101",
    "HEALTH_SCREEN_LAB_NAME": "Complete Blood Count CBC",
    "HEALTH_SCREEN_LAB_PICE": "90",
    "updated_at": null,
    "created_at": null,
    "HEALTH_SCREEN_LAB_TYPE": "1"
  },
  {
    "HEALTH_SCREEN_LAB_ID": 7,
    "HEALTH_SCREEN_LAB_CODE": "55620",
    "HEALTH_SCREEN_LAB_NAME": "ตรวจภายใน",
    "HEALTH_SCREEN_LAB_PICE": "100",
    "updated_at": null,
    "created_at": null,
    "HEALTH_SCREEN_LAB_TYPE": "2"
  },
  {
    "HEALTH_SCREEN_LAB_ID": 8,
    "HEALTH_SCREEN_LAB_CODE": "38302",
    "HEALTH_SCREEN_LAB_NAME": "Pap smear",
    "HEALTH_SCREEN_LAB_PICE": "100",
    "updated_at": null,
    "created_at": null,
    "HEALTH_SCREEN_LAB_TYPE": "2"
  }
]
```
