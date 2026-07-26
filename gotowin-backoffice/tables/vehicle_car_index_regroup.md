# `vehicle_car_index_regroup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| RESERVE_ID | varchar(10) | YES |  |  |  |  |
| RESERVE_ID_SUB | varchar(200) | YES |  |  |  |  |
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

## Sample rows (4)

```json
[
  {
    "ID": 1,
    "RESERVE_ID": "4635",
    "RESERVE_ID_SUB": "4665",
    "updated_at": "2025-12-03 16:04:26",
    "created_at": "2025-12-03 16:04:26"
  },
  {
    "ID": 2,
    "RESERVE_ID": "4700",
    "RESERVE_ID_SUB": "4673",
    "updated_at": "2025-12-14 01:02:35",
    "created_at": "2025-12-14 01:02:35"
  },
  {
    "ID": 10,
    "RESERVE_ID": "4608",
    "RESERVE_ID_SUB": "4746",
    "updated_at": "2025-12-23 22:30:08",
    "created_at": "2025-12-23 22:30:08"
  },
  {
    "ID": 11,
    "RESERVE_ID": "4738",
    "RESERVE_ID_SUB": "4744",
    "updated_at": "2025-12-30 11:06:53",
    "created_at": "2025-12-30 11:06:53"
  }
]
```
