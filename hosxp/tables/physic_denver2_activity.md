# `physic_denver2_activity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_denver2_activity_id | int(11) | NO | PRI | 0 |  |  |
| physic_denver2_activity_name | varchar(150) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_denver2_activity_no | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_denver2_activity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "physic_denver2_activity_id": 1,
    "physic_denver2_activity_name": "Gross motor",
    "active_status": "Y",
    "physic_denver2_activity_no": 1
  },
  {
    "physic_denver2_activity_id": 2,
    "physic_denver2_activity_name": "Fine motor-Adaptive",
    "active_status": "Y",
    "physic_denver2_activity_no": 2
  },
  {
    "physic_denver2_activity_id": 3,
    "physic_denver2_activity_name": "Language",
    "active_status": "Y",
    "physic_denver2_activity_no": 3
  },
  {
    "physic_denver2_activity_id": 4,
    "physic_denver2_activity_name": "Personal-Social",
    "active_status": "Y",
    "physic_denver2_activity_no": 4
  }
]
```
