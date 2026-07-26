# `ipt_operation_status_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_status | char(1) | NO | PRI |  |  |  |
| operation_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_status_name | operation_status_name | yes | 1 |
| PRIMARY | operation_status | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "operation_status": "I",
    "operation_status_name": "ยืนยันรับตัว"
  },
  {
    "operation_status": "Y",
    "operation_status_name": "รอผ่าตัด"
  },
  {
    "operation_status": "C",
    "operation_status_name": "ผ่าตัดเสร็จ"
  }
]
```
