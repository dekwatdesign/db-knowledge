# `physic_test_posit_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_test_posit_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_test_posit_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| posit_group | char(1) | YES |  | NULL |  |  |
| use_side | char(1) | YES |  | NULL |  |  |
| action_test_type_list | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_test_posit_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_test_posit_type_id": 1,
    "physic_test_posit_type_name": "Face",
    "active": "Y",
    "posit_group": "P",
    "use_side": "Y",
    "action_test_type_list": null
  },
  {
    "physic_test_posit_type_id": 2,
    "physic_test_posit_type_name": "Neck",
    "active": "Y",
    "posit_group": "P",
    "use_side": "Y",
    "action_test_type_list": null
  },
  {
    "physic_test_posit_type_id": 3,
    "physic_test_posit_type_name": "Shoulder",
    "active": "Y",
    "posit_group": "P",
    "use_side": "Y",
    "action_test_type_list": null
  },
  {
    "physic_test_posit_type_id": 4,
    "physic_test_posit_type_name": "Arm",
    "active": "Y",
    "posit_group": "P",
    "use_side": "Y",
    "action_test_type_list": null
  },
  {
    "physic_test_posit_type_id": 5,
    "physic_test_posit_type_name": "Elbow",
    "active": "Y",
    "posit_group": "P",
    "use_side": "Y",
    "action_test_type_list": null
  },
  {
    "physic_test_posit_type_id": 6,
    "physic_test_posit_type_name": "Forearm",
    "active": "Y",
    "posit_group": "P",
    "use_side": "Y",
    "action_test_type_list": null
  },
  {
    "physic_test_posit_type_id": 7,
    "physic_test_posit_type_name": "Wrist",
    "active": "Y",
    "posit_group": "P",
    "use_side": "Y",
    "action_test_type_list": null
  },
  {
    "physic_test_posit_type_id": 8,
    "physic_test_posit_type_name": "Hand",
    "active": "Y",
    "posit_group": "P",
    "use_side": "Y",
    "action_test_type_list": null
  }
]
```
