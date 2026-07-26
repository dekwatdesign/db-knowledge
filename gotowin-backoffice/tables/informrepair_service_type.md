# `informrepair_service_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| REPAIR_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| REPAIR_TYPE_NAME | varchar(255) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | REPAIR_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "REPAIR_TYPE_ID": 1,
    "REPAIR_TYPE_NAME": "ซ่อม"
  },
  {
    "REPAIR_TYPE_ID": 2,
    "REPAIR_TYPE_NAME": "เปลี่ยน"
  },
  {
    "REPAIR_TYPE_ID": 3,
    "REPAIR_TYPE_NAME": "อื่นๆ"
  }
]
```
