# `dt_unit_reg_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_unit_reg_status_id | int(11) | NO | PRI | 0 |  |  |
| dt_unit_reg_status_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_unit_reg_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "dt_unit_reg_status_id": 1,
    "dt_unit_reg_status_name": "ว่าง"
  },
  {
    "dt_unit_reg_status_id": 2,
    "dt_unit_reg_status_name": "จอง"
  },
  {
    "dt_unit_reg_status_id": 3,
    "dt_unit_reg_status_name": "ใช้งานอยู่"
  }
]
```
