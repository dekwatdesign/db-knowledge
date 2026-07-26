# `typept`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| typept_id | varchar(5) | NO | PRI |  |  |  |
| typept_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | typept_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "typept_id": "1",
    "typept_name": "Trauma"
  },
  {
    "typept_id": "2",
    "typept_name": "Non Trauma"
  }
]
```
