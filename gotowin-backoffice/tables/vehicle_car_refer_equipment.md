# `vehicle_car_refer_equipment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CARREFER_EQUIPMENT_ID | int | NO | PRI | NULL | auto_increment |  |
| REFER_ID | int | YES |  | NULL |  |  |
| EQUIPMENT_ID | varchar(255) | YES |  | NULL |  |  |
| EQUIPMENT_AMOUNT | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| EQUIPMENT_CHECK | enum('true','false') | YES |  | NULL |  |  |
| EQUIPMENT_AMOUNT_BACK | int | YES |  | NULL |  |  |
| EQUIPMENT_COMMENT | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CARREFER_EQUIPMENT_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "CARREFER_EQUIPMENT_ID": 2,
    "REFER_ID": 1,
    "EQUIPMENT_ID": null,
    "EQUIPMENT_AMOUNT": null,
    "updated_at": "2022-05-10 13:33:10",
    "created_at": "2022-05-10 13:33:10",
    "EQUIPMENT_CHECK": "false",
    "EQUIPMENT_AMOUNT_BACK": null,
    "EQUIPMENT_COMMENT": null
  },
  {
    "CARREFER_EQUIPMENT_ID": 3,
    "REFER_ID": 20,
    "EQUIPMENT_ID": null,
    "EQUIPMENT_AMOUNT": null,
    "updated_at": "2023-03-14 15:08:02",
    "created_at": "2023-03-14 15:08:02",
    "EQUIPMENT_CHECK": "false",
    "EQUIPMENT_AMOUNT_BACK": null,
    "EQUIPMENT_COMMENT": null
  },
  {
    "CARREFER_EQUIPMENT_ID": 4,
    "REFER_ID": 33,
    "EQUIPMENT_ID": null,
    "EQUIPMENT_AMOUNT": null,
    "updated_at": "2024-11-04 09:04:28",
    "created_at": "2024-11-04 09:04:28",
    "EQUIPMENT_CHECK": "false",
    "EQUIPMENT_AMOUNT_BACK": null,
    "EQUIPMENT_COMMENT": null
  },
  {
    "CARREFER_EQUIPMENT_ID": 8,
    "REFER_ID": 39,
    "EQUIPMENT_ID": null,
    "EQUIPMENT_AMOUNT": null,
    "updated_at": "2025-04-04 14:06:20",
    "created_at": "2025-04-04 14:06:20",
    "EQUIPMENT_CHECK": "false",
    "EQUIPMENT_AMOUNT_BACK": null,
    "EQUIPMENT_COMMENT": null
  },
  {
    "CARREFER_EQUIPMENT_ID": 9,
    "REFER_ID": 40,
    "EQUIPMENT_ID": null,
    "EQUIPMENT_AMOUNT": null,
    "updated_at": "2025-04-08 08:43:22",
    "created_at": "2025-04-08 08:43:22",
    "EQUIPMENT_CHECK": "false",
    "EQUIPMENT_AMOUNT_BACK": null,
    "EQUIPMENT_COMMENT": null
  },
  {
    "CARREFER_EQUIPMENT_ID": 11,
    "REFER_ID": 34,
    "EQUIPMENT_ID": null,
    "EQUIPMENT_AMOUNT": null,
    "updated_at": "2025-04-08 08:44:45",
    "created_at": "2025-04-08 08:44:45",
    "EQUIPMENT_CHECK": "false",
    "EQUIPMENT_AMOUNT_BACK": null,
    "EQUIPMENT_COMMENT": null
  }
]
```
