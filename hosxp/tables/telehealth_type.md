# `telehealth_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| telehealth_type_id | int(11) | NO | PRI | 0 |  |  |
| telehealth_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_telehealth_type_name | telehealth_type_name | yes | 1 |
| PRIMARY | telehealth_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "telehealth_type_id": 1,
    "telehealth_type_name": "Telemedicine"
  },
  {
    "telehealth_type_id": 2,
    "telehealth_type_name": "Medical imaging"
  }
]
```
