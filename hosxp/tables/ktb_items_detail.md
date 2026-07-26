# `ktb_items_detail`

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
    "Code": "30008"
  },
  {
    "ID": 1,
    "Code": "30009"
  },
  {
    "ID": 1,
    "Code": "30010"
  },
  {
    "ID": 1,
    "Code": "30011"
  },
  {
    "ID": 1,
    "Code": "30012"
  },
  {
    "ID": 1,
    "Code": "30013"
  },
  {
    "ID": 1,
    "Code": "30014"
  },
  {
    "ID": 1,
    "Code": "AB001"
  }
]
```
