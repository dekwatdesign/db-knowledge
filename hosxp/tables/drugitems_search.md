# `drugitems_search`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_search_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| search_keyword | varchar(100) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | no | 1 |
| ix_keyword | search_keyword | no | 1 |
| PRIMARY | drugitems_search_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drugitems_search_id": 1,
    "icode": "3001376",
    "search_keyword": "55021"
  },
  {
    "drugitems_search_id": 2,
    "icode": "3001375",
    "search_keyword": "55020"
  },
  {
    "drugitems_search_id": 3,
    "icode": "1000001",
    "search_keyword": "ta1"
  },
  {
    "drugitems_search_id": 4,
    "icode": "1000001",
    "search_keyword": "ta"
  },
  {
    "drugitems_search_id": 5,
    "icode": "1000002",
    "search_keyword": "cp"
  },
  {
    "drugitems_search_id": 6,
    "icode": "1000002",
    "search_keyword": "ct"
  },
  {
    "drugitems_search_id": 7,
    "icode": "1000002",
    "search_keyword": "cpt"
  },
  {
    "drugitems_search_id": 8,
    "icode": "1000002",
    "search_keyword": "cpm"
  }
]
```
