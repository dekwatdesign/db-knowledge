# `screen_check_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| screen_check_type_id | int(11) | NO | PRI | 0 |  |  |
| screen_check_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_screen_check_type_name | screen_check_type_name | yes | 1 |
| PRIMARY | screen_check_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "screen_check_type_id": 8,
    "screen_check_type_name": "Allergy"
  },
  {
    "screen_check_type_id": 1,
    "screen_check_type_name": "Blood Pressure"
  },
  {
    "screen_check_type_id": 4,
    "screen_check_type_name": "Body Height"
  },
  {
    "screen_check_type_id": 3,
    "screen_check_type_name": "Body Weight"
  },
  {
    "screen_check_type_id": 5,
    "screen_check_type_name": "Cheif Complaint"
  },
  {
    "screen_check_type_id": 7,
    "screen_check_type_name": "Drinking"
  },
  {
    "screen_check_type_id": 6,
    "screen_check_type_name": "Smoking"
  },
  {
    "screen_check_type_id": 2,
    "screen_check_type_name": "Temperature"
  }
]
```
