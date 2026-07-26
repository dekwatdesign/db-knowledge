# `lab_head_reason_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_head_reason_type_id | int(11) | NO | PRI | 0 |  |  |
| lab_head_reason_type_name | varchar(250) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_head_reason_type_name | lab_head_reason_type_name | yes | 1 |
| PRIMARY | lab_head_reason_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "lab_head_reason_type_id": 1,
    "lab_head_reason_type_name": "แพทย์ยืนยันสั่งซ้ำ"
  },
  {
    "lab_head_reason_type_id": 2,
    "lab_head_reason_type_name": "ต้องการผลล่าสุด"
  }
]
```
