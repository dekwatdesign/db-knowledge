# `officer_operation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_operation_id | int(11) | NO | PRI | 0 |  |  |
| officer_operation_name | varchar(200) | YES | UNI | NULL |  |  |
| officer_operation_code | varchar(100) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_operation_code | officer_operation_code | no | 1 |
| ix_officer_operation_name | officer_operation_name | yes | 1 |
| PRIMARY | officer_operation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "officer_operation_id": 1,
    "officer_operation_name": "แสดงข้อมูล",
    "officer_operation_code": "VIEW"
  },
  {
    "officer_operation_id": 2,
    "officer_operation_name": "เพิ่มรายการใหม่",
    "officer_operation_code": "ADD"
  },
  {
    "officer_operation_id": 3,
    "officer_operation_name": "แก้ไขรายการ",
    "officer_operation_code": "EDIT"
  },
  {
    "officer_operation_id": 4,
    "officer_operation_name": "ลบรายการ",
    "officer_operation_code": "DELETE"
  }
]
```
