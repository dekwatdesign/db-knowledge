# `psych_baby_health_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_baby_health_type_id | int(11) | NO | PRI | 0 |  |  |
| psych_baby_health_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_baby_health_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "psych_baby_health_type_id": 1,
    "psych_baby_health_type_name": "ปกติ, แข็งแรงดี",
    "active": null
  },
  {
    "psych_baby_health_type_id": 2,
    "psych_baby_health_type_name": "มีภาวะแทรกซ้อน",
    "active": null
  }
]
```
