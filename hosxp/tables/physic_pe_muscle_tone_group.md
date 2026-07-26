# `physic_pe_muscle_tone_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_muscle_tone_group_id | int(11) | NO | PRI | 0 |  |  |
| muscle_tone_group_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_muscle_tone_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "physic_pe_muscle_tone_group_id": 1,
    "muscle_tone_group_name": "upper extremities"
  },
  {
    "physic_pe_muscle_tone_group_id": 2,
    "muscle_tone_group_name": "lower extremities"
  }
]
```
