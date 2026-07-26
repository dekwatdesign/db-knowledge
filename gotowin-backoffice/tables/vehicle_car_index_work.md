# `vehicle_car_index_work`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CARWORK_ID | int | NO | PRI | NULL | auto_increment |  |
| CARWORK_LOCATION_ID | varchar(255) | YES |  | NULL |  |  |
| CARWORK_DETAIL | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| CARWORK_RESERVE_ID | int | YES |  | NULL |  |  |
| CARWORK_RESERVE_CHECK | enum('true','false') | YES |  | false |  |  |
| CARWORK_RESERVE_COMMENT | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CARWORK_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "CARWORK_ID": 3,
    "CARWORK_LOCATION_ID": null,
    "CARWORK_DETAIL": null,
    "updated_at": "2022-01-18 14:35:34",
    "created_at": "2022-01-18 14:35:34",
    "CARWORK_RESERVE_ID": 1,
    "CARWORK_RESERVE_CHECK": "false",
    "CARWORK_RESERVE_COMMENT": null
  },
  {
    "CARWORK_ID": 5,
    "CARWORK_LOCATION_ID": null,
    "CARWORK_DETAIL": null,
    "updated_at": "2022-01-18 15:52:56",
    "created_at": "2022-01-18 15:52:56",
    "CARWORK_RESERVE_ID": 2,
    "CARWORK_RESERVE_CHECK": "false",
    "CARWORK_RESERVE_COMMENT": null
  },
  {
    "CARWORK_ID": 6,
    "CARWORK_LOCATION_ID": null,
    "CARWORK_DETAIL": null,
    "updated_at": "2022-01-18 15:54:04",
    "created_at": "2022-01-18 15:54:04",
    "CARWORK_RESERVE_ID": 3,
    "CARWORK_RESERVE_CHECK": "false",
    "CARWORK_RESERVE_COMMENT": null
  },
  {
    "CARWORK_ID": 7,
    "CARWORK_LOCATION_ID": null,
    "CARWORK_DETAIL": null,
    "updated_at": "2022-01-20 16:31:11",
    "created_at": "2022-01-20 16:31:11",
    "CARWORK_RESERVE_ID": 4,
    "CARWORK_RESERVE_CHECK": "false",
    "CARWORK_RESERVE_COMMENT": null
  },
  {
    "CARWORK_ID": 10,
    "CARWORK_LOCATION_ID": null,
    "CARWORK_DETAIL": null,
    "updated_at": "2022-01-28 09:18:06",
    "created_at": "2022-01-28 09:18:06",
    "CARWORK_RESERVE_ID": 7,
    "CARWORK_RESERVE_CHECK": "false",
    "CARWORK_RESERVE_COMMENT": null
  },
  {
    "CARWORK_ID": 11,
    "CARWORK_LOCATION_ID": null,
    "CARWORK_DETAIL": null,
    "updated_at": "2022-01-28 09:23:39",
    "created_at": "2022-01-28 09:23:39",
    "CARWORK_RESERVE_ID": 8,
    "CARWORK_RESERVE_CHECK": "false",
    "CARWORK_RESERVE_COMMENT": null
  },
  {
    "CARWORK_ID": 12,
    "CARWORK_LOCATION_ID": null,
    "CARWORK_DETAIL": null,
    "updated_at": "2022-02-22 11:15:40",
    "created_at": "2022-02-22 11:15:40",
    "CARWORK_RESERVE_ID": 12,
    "CARWORK_RESERVE_CHECK": "false",
    "CARWORK_RESERVE_COMMENT": null
  },
  {
    "CARWORK_ID": 13,
    "CARWORK_LOCATION_ID": null,
    "CARWORK_DETAIL": null,
    "updated_at": "2022-02-22 11:29:25",
    "created_at": "2022-02-22 11:29:25",
    "CARWORK_RESERVE_ID": 13,
    "CARWORK_RESERVE_CHECK": "false",
    "CARWORK_RESERVE_COMMENT": null
  }
]
```
