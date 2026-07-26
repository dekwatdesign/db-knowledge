# `ckup_service_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_service_type_id | int(11) | NO | PRI | 0 |  |  |
| ckup_service_type_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_service_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ckup_service_type_id": 1,
    "ckup_service_type_name": "ตรวจก่อนเข้างาน"
  },
  {
    "ckup_service_type_id": 2,
    "ckup_service_type_name": "ตรวจประจำปี"
  },
  {
    "ckup_service_type_id": 3,
    "ckup_service_type_name": "Walk-in"
  }
]
```
