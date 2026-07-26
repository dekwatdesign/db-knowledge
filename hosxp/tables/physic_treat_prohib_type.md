# `physic_treat_prohib_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_treat_prohib_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_treat_prohib_type_name | varchar(250) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_treat_prohib_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_treat_prohib_type_id": 1,
    "physic_treat_prohib_type_name": "Fall",
    "active": "Y"
  },
  {
    "physic_treat_prohib_type_id": 2,
    "physic_treat_prohib_type_name": "Diabetes Mellitus",
    "active": "Y"
  },
  {
    "physic_treat_prohib_type_id": 3,
    "physic_treat_prohib_type_name": "Hypertension",
    "active": "Y"
  },
  {
    "physic_treat_prohib_type_id": 4,
    "physic_treat_prohib_type_name": "Hypotension",
    "active": "Y"
  },
  {
    "physic_treat_prohib_type_id": 5,
    "physic_treat_prohib_type_name": "Heart Disease",
    "active": "Y"
  },
  {
    "physic_treat_prohib_type_id": 6,
    "physic_treat_prohib_type_name": "Lost Sensation",
    "active": "Y"
  },
  {
    "physic_treat_prohib_type_id": 7,
    "physic_treat_prohib_type_name": "UnStable Mental Status",
    "active": "Y"
  },
  {
    "physic_treat_prohib_type_id": 8,
    "physic_treat_prohib_type_name": "Other",
    "active": "Y"
  }
]
```
