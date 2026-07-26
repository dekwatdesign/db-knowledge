# `emp_accessright`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_accessright_id | int(11) | NO | PRI | 0 |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| emp_accessmenu_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_accessright_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_accessright_id": 3,
    "officer_id": 3,
    "emp_accessmenu_id": 2
  },
  {
    "emp_accessright_id": 4,
    "officer_id": 3,
    "emp_accessmenu_id": 3
  },
  {
    "emp_accessright_id": 5,
    "officer_id": 3,
    "emp_accessmenu_id": 4
  },
  {
    "emp_accessright_id": 6,
    "officer_id": 3,
    "emp_accessmenu_id": 5
  },
  {
    "emp_accessright_id": 7,
    "officer_id": 3,
    "emp_accessmenu_id": 6
  },
  {
    "emp_accessright_id": 8,
    "officer_id": 3,
    "emp_accessmenu_id": 7
  },
  {
    "emp_accessright_id": 9,
    "officer_id": 3,
    "emp_accessmenu_id": 8
  },
  {
    "emp_accessright_id": 10,
    "officer_id": 3,
    "emp_accessmenu_id": 9
  }
]
```
