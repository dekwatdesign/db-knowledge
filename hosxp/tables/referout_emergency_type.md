# `referout_emergency_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| referout_emergency_type_id | int(11) | NO | PRI | 0 |  |  |
| referout_emergency_type_name | varchar(200) | YES | UNI | NULL |  |  |
| export_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_referout_emergency_type_name | referout_emergency_type_name | yes | 1 |
| PRIMARY | referout_emergency_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "referout_emergency_type_id": 1,
    "referout_emergency_type_name": "Life threatening",
    "export_code": "1"
  },
  {
    "referout_emergency_type_id": 2,
    "referout_emergency_type_name": "Emergency",
    "export_code": "2"
  },
  {
    "referout_emergency_type_id": 3,
    "referout_emergency_type_name": "Urgent",
    "export_code": "3"
  },
  {
    "referout_emergency_type_id": 4,
    "referout_emergency_type_name": "Acute",
    "export_code": "4"
  },
  {
    "referout_emergency_type_id": 5,
    "referout_emergency_type_name": "Non acute",
    "export_code": "5"
  }
]
```
