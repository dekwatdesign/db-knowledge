# `physic_side_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_side_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_side_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_side_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "physic_side_type_id": 1,
    "physic_side_type_name": "Right",
    "active": "Y"
  },
  {
    "physic_side_type_id": 2,
    "physic_side_type_name": "Left",
    "active": "Y"
  }
]
```
