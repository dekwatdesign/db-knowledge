# `strength`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| strength_id | varchar(5) | NO | PRI |  |  |  |
| strength_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | strength_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "strength_id": "01",
    "strength_name": "Resuscitation"
  },
  {
    "strength_id": "02",
    "strength_name": "Emergency"
  },
  {
    "strength_id": "03",
    "strength_name": "Urgency"
  },
  {
    "strength_id": "04",
    "strength_name": "Semi-urgency"
  },
  {
    "strength_id": "05",
    "strength_name": "Non-urgency"
  }
]
```
