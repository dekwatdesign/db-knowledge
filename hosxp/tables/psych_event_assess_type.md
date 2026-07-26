# `psych_event_assess_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_event_assess_type_id | int(11) | NO | PRI | 0 |  |  |
| psych_event_assess_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_event_assess_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "psych_event_assess_type_id": 1,
    "psych_event_assess_type_name": "ก่อนทำกิจกรรม",
    "active": null
  },
  {
    "psych_event_assess_type_id": 2,
    "psych_event_assess_type_name": "หลังทำกิจกรรม",
    "active": null
  }
]
```
