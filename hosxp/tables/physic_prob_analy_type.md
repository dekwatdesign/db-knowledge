# `physic_prob_analy_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_prob_analy_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_prob_analy_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_prob_analy_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_prob_analy_type_id": 1,
    "physic_prob_analy_type_name": "Pain",
    "active": "Y"
  },
  {
    "physic_prob_analy_type_id": 2,
    "physic_prob_analy_type_name": "Swelling",
    "active": "Y"
  },
  {
    "physic_prob_analy_type_id": 3,
    "physic_prob_analy_type_name": "Range of Motion (ROM)",
    "active": "Y"
  },
  {
    "physic_prob_analy_type_id": 4,
    "physic_prob_analy_type_name": "Strength / Muscle Power",
    "active": "Y"
  },
  {
    "physic_prob_analy_type_id": 5,
    "physic_prob_analy_type_name": "Endurance",
    "active": "Y"
  },
  {
    "physic_prob_analy_type_id": 6,
    "physic_prob_analy_type_name": "ADL",
    "active": "Y"
  },
  {
    "physic_prob_analy_type_id": 7,
    "physic_prob_analy_type_name": "Balance",
    "active": "Y"
  },
  {
    "physic_prob_analy_type_id": 8,
    "physic_prob_analy_type_name": "Flexibility",
    "active": "Y"
  }
]
```
