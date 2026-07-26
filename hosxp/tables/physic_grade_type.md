# `physic_grade_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_grade_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_grade_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| value | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_grade_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "physic_grade_type_id": 1,
    "physic_grade_type_name": "Zero",
    "active": "Y",
    "value": 0
  },
  {
    "physic_grade_type_id": 2,
    "physic_grade_type_name": "Trace",
    "active": "Y",
    "value": 1
  },
  {
    "physic_grade_type_id": 3,
    "physic_grade_type_name": "Poor",
    "active": "Y",
    "value": 2
  },
  {
    "physic_grade_type_id": 4,
    "physic_grade_type_name": "Fair",
    "active": "Y",
    "value": 3
  },
  {
    "physic_grade_type_id": 5,
    "physic_grade_type_name": "Good",
    "active": "Y",
    "value": 4
  },
  {
    "physic_grade_type_id": 6,
    "physic_grade_type_name": "Normal",
    "active": "Y",
    "value": 5
  }
]
```
