# `psych_acuity_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_acuity_type_id | int(11) | NO | PRI | 0 |  |  |
| psych_acuity_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_acuity_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "psych_acuity_type_id": 1,
    "psych_acuity_type_name": "ระดับ 1",
    "active": null
  },
  {
    "psych_acuity_type_id": 2,
    "psych_acuity_type_name": "ระดับ 2",
    "active": null
  },
  {
    "psych_acuity_type_id": 3,
    "psych_acuity_type_name": "ระดับ 3",
    "active": null
  },
  {
    "psych_acuity_type_id": 4,
    "psych_acuity_type_name": "ระดับ 3+",
    "active": null
  }
]
```
