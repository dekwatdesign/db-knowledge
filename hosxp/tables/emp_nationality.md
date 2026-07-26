# `emp_nationality`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_nationality_id | char(3) | NO | PRI |  |  |  |
| emp_nationality_name | varchar(50) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | emp_nationality_name | yes | 1 |
| PRIMARY | emp_nationality_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_nationality_id": "20",
    "emp_nationality_name": "กรีก"
  },
  {
    "emp_nationality_id": "57",
    "emp_nationality_name": "กัมพูชา"
  },
  {
    "emp_nationality_id": "53",
    "emp_nationality_name": "เกาหลี"
  },
  {
    "emp_nationality_id": "89",
    "emp_nationality_name": "เขมรเกาะกงกัมพูชา"
  },
  {
    "emp_nationality_id": "30",
    "emp_nationality_name": "คานาดา"
  },
  {
    "emp_nationality_id": "32",
    "emp_nationality_name": "คิวบา"
  },
  {
    "emp_nationality_id": "68",
    "emp_nationality_name": "คูเวต"
  },
  {
    "emp_nationality_id": "73",
    "emp_nationality_name": "เคนยา"
  }
]
```
