# `er_emergency_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_emergency_level_id | int(11) | NO | PRI | 0 |  |  |
| er_emergency_level_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_er_emergency_level_name | er_emergency_level_name | yes | 1 |
| PRIMARY | er_emergency_level_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "er_emergency_level_id": 2,
    "er_emergency_level_name": "Emergency (ฉุกเฉินเร่งด่วน)"
  },
  {
    "er_emergency_level_id": 5,
    "er_emergency_level_name": "Non Urgency (รอได้)"
  },
  {
    "er_emergency_level_id": 1,
    "er_emergency_level_name": "Resuscitate (กู้ชีพทันที)"
  },
  {
    "er_emergency_level_id": 4,
    "er_emergency_level_name": "Semi Urgency (ด่วน)"
  },
  {
    "er_emergency_level_id": 3,
    "er_emergency_level_name": "Urgency (ด่วนมาก)"
  }
]
```
