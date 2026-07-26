# `physic_snmrc_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_snmrc_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_snmrc_type_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_snmrc_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_snmrc_type_id": 1,
    "physic_snmrc_type_name": "Feeding"
  },
  {
    "physic_snmrc_type_id": 2,
    "physic_snmrc_type_name": "Grooming"
  },
  {
    "physic_snmrc_type_id": 3,
    "physic_snmrc_type_name": "Cleaning"
  },
  {
    "physic_snmrc_type_id": 4,
    "physic_snmrc_type_name": "Dressing"
  },
  {
    "physic_snmrc_type_id": 5,
    "physic_snmrc_type_name": "Bowel&Bladder management"
  },
  {
    "physic_snmrc_type_id": 6,
    "physic_snmrc_type_name": "Mobility"
  },
  {
    "physic_snmrc_type_id": 7,
    "physic_snmrc_type_name": "Walking"
  },
  {
    "physic_snmrc_type_id": 8,
    "physic_snmrc_type_name": "Communication"
  }
]
```
