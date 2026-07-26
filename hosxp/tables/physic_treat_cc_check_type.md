# `physic_treat_cc_check_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_treat_cc_check_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_treat_cc_check_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_treat_cc_check_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "physic_treat_cc_check_type_id": 1,
    "physic_treat_cc_check_type_name": "Pain",
    "active": "Y",
    "name": null
  },
  {
    "physic_treat_cc_check_type_id": 2,
    "physic_treat_cc_check_type_name": "Limited ROM",
    "active": "Y",
    "name": null
  },
  {
    "physic_treat_cc_check_type_id": 3,
    "physic_treat_cc_check_type_name": "Poor Ability in ADL",
    "active": "Y",
    "name": null
  },
  {
    "physic_treat_cc_check_type_id": 4,
    "physic_treat_cc_check_type_name": "Poor Ventilation",
    "active": "Y",
    "name": null
  },
  {
    "physic_treat_cc_check_type_id": 5,
    "physic_treat_cc_check_type_name": "Swelling",
    "active": "Y",
    "name": null
  },
  {
    "physic_treat_cc_check_type_id": 6,
    "physic_treat_cc_check_type_name": "Weakness",
    "active": "Y",
    "name": null
  },
  {
    "physic_treat_cc_check_type_id": 7,
    "physic_treat_cc_check_type_name": "Poor Balance",
    "active": "Y",
    "name": null
  }
]
```
