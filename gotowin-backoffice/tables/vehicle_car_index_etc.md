# `vehicle_car_index_etc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| RESERVE_ID | varchar(10) | YES |  |  |  |  |
| FULLNAME | varchar(200) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_index | ID | no | 1 |
| ix_index | RESERVE_ID | no | 2 |
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 3,
    "RESERVE_ID": "1",
    "FULLNAME": null,
    "updated_at": "2022-01-18 14:35:34",
    "created_at": "2022-01-18 14:35:34"
  },
  {
    "ID": 5,
    "RESERVE_ID": "2",
    "FULLNAME": null,
    "updated_at": "2022-01-18 15:52:56",
    "created_at": "2022-01-18 15:52:56"
  },
  {
    "ID": 6,
    "RESERVE_ID": "3",
    "FULLNAME": null,
    "updated_at": "2022-01-18 15:54:04",
    "created_at": "2022-01-18 15:54:04"
  },
  {
    "ID": 7,
    "RESERVE_ID": "4",
    "FULLNAME": null,
    "updated_at": "2022-01-20 16:31:11",
    "created_at": "2022-01-20 16:31:11"
  },
  {
    "ID": 11,
    "RESERVE_ID": "8",
    "FULLNAME": null,
    "updated_at": "2022-01-28 09:23:39",
    "created_at": "2022-01-28 09:23:39"
  },
  {
    "ID": 10,
    "RESERVE_ID": "7",
    "FULLNAME": null,
    "updated_at": "2022-01-28 09:18:06",
    "created_at": "2022-01-28 09:18:06"
  },
  {
    "ID": 12,
    "RESERVE_ID": "12",
    "FULLNAME": null,
    "updated_at": "2022-02-22 11:15:40",
    "created_at": "2022-02-22 11:15:40"
  },
  {
    "ID": 13,
    "RESERVE_ID": "13",
    "FULLNAME": null,
    "updated_at": "2022-02-22 11:29:25",
    "created_at": "2022-02-22 11:29:25"
  }
]
```
