# `beauty_service_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| beauty_service_type_id | int(11) | NO | PRI | 0 |  |  |
| beauty_service_type_name | varchar(100) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | beauty_service_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "beauty_service_type_id": 1,
    "beauty_service_type_name": "นับจำนวนครั้ง",
    "active_status": "Y"
  },
  {
    "beauty_service_type_id": 2,
    "beauty_service_type_name": "ปริมาณคงเหลือ(เช่น ยูนิต, CC)",
    "active_status": "Y"
  },
  {
    "beauty_service_type_id": 3,
    "beauty_service_type_name": "ระยะเวลา",
    "active_status": "Y"
  }
]
```
