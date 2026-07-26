# `physic_pe_muscle_tone_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_muscle_tone_type_id | int(11) | NO | PRI | 0 |  |  |
| muscle_tone_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_muscle_tone_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "physic_pe_muscle_tone_type_id": 1,
    "muscle_tone_type_name": "normal tone"
  },
  {
    "physic_pe_muscle_tone_type_id": 2,
    "muscle_tone_type_name": "hypotone"
  },
  {
    "physic_pe_muscle_tone_type_id": 3,
    "muscle_tone_type_name": "hypertone"
  }
]
```
