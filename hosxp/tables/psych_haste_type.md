# `psych_haste_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_haste_type_id | int(11) | NO | PRI | 0 |  |  |
| psych_haste_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_haste_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "psych_haste_type_id": 1,
    "psych_haste_type_name": "ทั่วไป",
    "active": null
  },
  {
    "psych_haste_type_id": 2,
    "psych_haste_type_name": "ด่วน",
    "active": null
  },
  {
    "psych_haste_type_id": 3,
    "psych_haste_type_name": "ฉุกเฉิน",
    "active": null
  }
]
```
