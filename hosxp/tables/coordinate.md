# `coordinate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| coordinate_id | varchar(5) | NO | PRI |  |  |  |
| coordinate_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | coordinate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "coordinate_id": "1",
    "coordinate_name": "ภายใน 30 นาที"
  },
  {
    "coordinate_id": "2",
    "coordinate_name": "มากกว่า 30 นาที"
  },
  {
    "coordinate_id": "3",
    "coordinate_name": "มากกว่า 1 ชม."
  }
]
```
