# `xe_user_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xe_user_type_id | int(11) | NO | PRI | 0 |  |  |
| xe_user_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xe_user_type_name | xe_user_type_name | yes | 1 |
| PRIMARY | xe_user_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "xe_user_type_id": 1,
    "xe_user_type_name": "ข้อมูลเวชระเบียน"
  },
  {
    "xe_user_type_id": 2,
    "xe_user_type_name": "ข้อมูลการส่งตรวจ"
  },
  {
    "xe_user_type_id": 3,
    "xe_user_type_name": "ข้อมูลการซักประวัติ"
  },
  {
    "xe_user_type_id": 4,
    "xe_user_type_name": "ข้อมูลห้องตรวจแพทย์"
  },
  {
    "xe_user_type_id": 5,
    "xe_user_type_name": "ข้อมูลการชำระเงิน"
  },
  {
    "xe_user_type_id": 6,
    "xe_user_type_name": "ข้อมูลการ Admit"
  }
]
```
