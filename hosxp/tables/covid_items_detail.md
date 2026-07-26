# `covid_items_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int(11) | YES | MUL | NULL |  |  |
| Code | varchar(20) | NO | PRI |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ID | ID | no | 1 |
| ID | Code | no | 2 |
| PRIMARY | Code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 1,
    "Code": "045001"
  },
  {
    "ID": 1,
    "Code": "145011"
  },
  {
    "ID": 2,
    "Code": "045002"
  },
  {
    "ID": 2,
    "Code": "045004"
  },
  {
    "ID": 2,
    "Code": "145002"
  },
  {
    "ID": 2,
    "Code": "145010"
  },
  {
    "ID": 2,
    "Code": "145012"
  },
  {
    "ID": 2,
    "Code": "145013"
  }
]
```
