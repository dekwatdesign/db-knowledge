# `person_deformed_assesment_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_deformed_assesment_group_id | int(11) | NO | PRI | 0 |  |  |
| person_deformed_type_id | int(11) | YES | MUL | NULL |  |  |
| person_deformed_assesment_type_code | varchar(10) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique | person_deformed_type_id | yes | 1 |
| ix_unique | person_deformed_assesment_type_code | yes | 2 |
| ix_unique_index | person_deformed_assesment_type_code | yes | 1 |
| ix_unique_index | person_deformed_type_id | yes | 2 |
| PRIMARY | person_deformed_assesment_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_deformed_assesment_group_id": 1,
    "person_deformed_type_id": 1,
    "person_deformed_assesment_type_code": "b210"
  },
  {
    "person_deformed_assesment_group_id": 2,
    "person_deformed_type_id": 1,
    "person_deformed_assesment_type_code": "d460"
  },
  {
    "person_deformed_assesment_group_id": 3,
    "person_deformed_type_id": 1,
    "person_deformed_assesment_type_code": "d470"
  },
  {
    "person_deformed_assesment_group_id": 4,
    "person_deformed_type_id": 1,
    "person_deformed_assesment_type_code": "d570"
  },
  {
    "person_deformed_assesment_group_id": 5,
    "person_deformed_type_id": 1,
    "person_deformed_assesment_type_code": "d630"
  },
  {
    "person_deformed_assesment_group_id": 6,
    "person_deformed_type_id": 1,
    "person_deformed_assesment_type_code": "d640"
  },
  {
    "person_deformed_assesment_group_id": 7,
    "person_deformed_type_id": 1,
    "person_deformed_assesment_type_code": "d839"
  },
  {
    "person_deformed_assesment_group_id": 8,
    "person_deformed_type_id": 1,
    "person_deformed_assesment_type_code": "d870"
  }
]
```
