# `emp_citizenship`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_citizenship_id | char(3) | NO | PRI |  |  |  |
| emp_citizenship_name | varchar(50) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | emp_citizenship_name | yes | 1 |
| PRIMARY | emp_citizenship_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_citizenship_id": "20",
    "emp_citizenship_name": "กรีก"
  },
  {
    "emp_citizenship_id": "57",
    "emp_citizenship_name": "กัมพูชา"
  },
  {
    "emp_citizenship_id": "53",
    "emp_citizenship_name": "เกาหลี"
  },
  {
    "emp_citizenship_id": "89",
    "emp_citizenship_name": "เขมรเกาะกงกัมพูชา"
  },
  {
    "emp_citizenship_id": "30",
    "emp_citizenship_name": "คานาดา"
  },
  {
    "emp_citizenship_id": "32",
    "emp_citizenship_name": "คิวบา"
  },
  {
    "emp_citizenship_id": "68",
    "emp_citizenship_name": "คูเวต"
  },
  {
    "emp_citizenship_id": "73",
    "emp_citizenship_name": "เคนยา"
  }
]
```
