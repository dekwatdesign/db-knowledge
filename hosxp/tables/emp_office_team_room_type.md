# `emp_office_team_room_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_office_team_room_type_id | int(11) | NO | PRI | 0 |  |  |
| emp_office_team_room_type_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_office_team_room_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "emp_office_team_room_type_id": 1,
    "emp_office_team_room_type_name": "ห้องพักคู่"
  },
  {
    "emp_office_team_room_type_id": 2,
    "emp_office_team_room_type_name": "ห้องพักเดี่ยว"
  }
]
```
