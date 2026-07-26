# `physic_planing_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_planing_items_id | int(11) | NO | PRI | 0 |  |  |
| physic_planing_items_name | varchar(255) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_planing_items_name | physic_planing_items_name | no | 1 |
| PRIMARY | physic_planing_items_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_planing_items_id": 1,
    "physic_planing_items_name": "A"
  },
  {
    "physic_planing_items_id": 2,
    "physic_planing_items_name": "B"
  },
  {
    "physic_planing_items_id": 3,
    "physic_planing_items_name": "C"
  },
  {
    "physic_planing_items_id": 4,
    "physic_planing_items_name": "D"
  },
  {
    "physic_planing_items_id": 5,
    "physic_planing_items_name": "E"
  },
  {
    "physic_planing_items_id": 6,
    "physic_planing_items_name": "F"
  },
  {
    "physic_planing_items_id": 7,
    "physic_planing_items_name": "G"
  },
  {
    "physic_planing_items_id": 8,
    "physic_planing_items_name": "H"
  }
]
```
