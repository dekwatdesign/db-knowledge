# `physic_muscle_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_muscle_group_id | int(11) | NO | PRI | 0 |  |  |
| physic_muscle_group_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| use_side | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_muscle_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_muscle_group_id": 1,
    "physic_muscle_group_name": "Frontalis",
    "active": "Y",
    "use_side": "Y"
  },
  {
    "physic_muscle_group_id": 2,
    "physic_muscle_group_name": "Orbicularis Oculi",
    "active": "Y",
    "use_side": "Y"
  },
  {
    "physic_muscle_group_id": 3,
    "physic_muscle_group_name": "Orbicularis Oris",
    "active": "Y",
    "use_side": "Y"
  },
  {
    "physic_muscle_group_id": 4,
    "physic_muscle_group_name": "Neck Flexors",
    "active": "Y",
    "use_side": "N"
  },
  {
    "physic_muscle_group_id": 5,
    "physic_muscle_group_name": "Neck Extensors",
    "active": "Y",
    "use_side": "N"
  },
  {
    "physic_muscle_group_id": 6,
    "physic_muscle_group_name": "Neck Lateral Flexors",
    "active": "Y",
    "use_side": "Y"
  },
  {
    "physic_muscle_group_id": 7,
    "physic_muscle_group_name": "Neck Rotators",
    "active": "Y",
    "use_side": "Y"
  },
  {
    "physic_muscle_group_id": 8,
    "physic_muscle_group_name": "Trunk Flexors",
    "active": "Y",
    "use_side": "N"
  }
]
```
