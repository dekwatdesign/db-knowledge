# `newcode_table`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| newcode_table_id | int(11) | NO | PRI | 0 |  |  |
| table_name | varchar(100) | YES | MUL | NULL |  |  |
| table_newcode | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_table_name | table_name | no | 1 |
| ix_table_name_code | table_name | no | 1 |
| ix_table_name_code | table_newcode | no | 2 |
| PRIMARY | newcode_table_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "newcode_table_id": 1,
    "table_name": "drugitems",
    "table_newcode": "1600001"
  },
  {
    "newcode_table_id": 2,
    "table_name": "drugitems",
    "table_newcode": "1600002"
  },
  {
    "newcode_table_id": 3,
    "table_name": "drugitems",
    "table_newcode": "1600003"
  },
  {
    "newcode_table_id": 4,
    "table_name": "drugitems",
    "table_newcode": "1600004"
  },
  {
    "newcode_table_id": 5,
    "table_name": "drugitems",
    "table_newcode": "1600005"
  },
  {
    "newcode_table_id": 6,
    "table_name": "drugitems",
    "table_newcode": "1600006"
  },
  {
    "newcode_table_id": 7,
    "table_name": "drugitems",
    "table_newcode": "1600007"
  },
  {
    "newcode_table_id": 8,
    "table_name": "drugitems",
    "table_newcode": "1600008"
  }
]
```
