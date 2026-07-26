# `drugitems_charge_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(7) | NO | PRI |  |  |  |
| charge_list_id | int(11) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| charge_list_id | charge_list_id | yes | 1 |
| PRIMARY | icode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "icode": "3000003",
    "charge_list_id": 1
  },
  {
    "icode": "3000001",
    "charge_list_id": 2
  },
  {
    "icode": "3000043",
    "charge_list_id": 3
  },
  {
    "icode": "3000306",
    "charge_list_id": 5
  },
  {
    "icode": "3000021",
    "charge_list_id": 8
  },
  {
    "icode": "3000028",
    "charge_list_id": 10
  },
  {
    "icode": "3000303",
    "charge_list_id": 14
  },
  {
    "icode": "3000062",
    "charge_list_id": 16
  }
]
```
