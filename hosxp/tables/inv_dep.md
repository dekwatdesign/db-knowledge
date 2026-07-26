# `inv_dep`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_dep_id | int(11) | NO | PRI | 0 |  |  |
| inv_dep_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_dep_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "inv_dep_id": 1,
    "inv_dep_name": "บริการการแพทย์"
  },
  {
    "inv_dep_id": 2,
    "inv_dep_name": "บริหารการแพทย์"
  }
]
```
