# `physic_action_test_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_action_test_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_action_test_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_action_test_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_action_test_type_id": 1,
    "physic_action_test_type_name": "Flexion",
    "active": "Y"
  },
  {
    "physic_action_test_type_id": 2,
    "physic_action_test_type_name": "Extension",
    "active": "Y"
  },
  {
    "physic_action_test_type_id": 3,
    "physic_action_test_type_name": "Abduction",
    "active": "Y"
  },
  {
    "physic_action_test_type_id": 4,
    "physic_action_test_type_name": "Adduction",
    "active": "Y"
  },
  {
    "physic_action_test_type_id": 5,
    "physic_action_test_type_name": "Internal Rotation",
    "active": "Y"
  },
  {
    "physic_action_test_type_id": 6,
    "physic_action_test_type_name": "External Rotation",
    "active": "Y"
  },
  {
    "physic_action_test_type_id": 7,
    "physic_action_test_type_name": "Pronation",
    "active": "Y"
  },
  {
    "physic_action_test_type_id": 8,
    "physic_action_test_type_name": "Supination",
    "active": "Y"
  }
]
```
