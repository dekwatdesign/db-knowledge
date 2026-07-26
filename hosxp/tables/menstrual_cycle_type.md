# `menstrual_cycle_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| menstrual_cycle_type_id | int(11) | NO | PRI | 0 |  |  |
| menstrual_cycle_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_menstrual_cycle_type_name | menstrual_cycle_type_name | yes | 1 |
| PRIMARY | menstrual_cycle_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "menstrual_cycle_type_id": 1,
    "menstrual_cycle_type_name": "ปกติ"
  },
  {
    "menstrual_cycle_type_id": 2,
    "menstrual_cycle_type_name": "ผิดปกติ"
  },
  {
    "menstrual_cycle_type_id": 3,
    "menstrual_cycle_type_name": "Menopause"
  }
]
```
