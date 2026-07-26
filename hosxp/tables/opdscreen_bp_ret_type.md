# `opdscreen_bp_ret_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscreen_bp_ret_type_id | int(11) | NO | PRI | 0 |  |  |
| opdscreen_bp_ret_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opdscreen_bp_ret_type_name | opdscreen_bp_ret_type_name | yes | 1 |
| PRIMARY | opdscreen_bp_ret_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "opdscreen_bp_ret_type_id": 1,
    "opdscreen_bp_ret_type_name": "ก่อนกลับบ้าน"
  },
  {
    "opdscreen_bp_ret_type_id": 2,
    "opdscreen_bp_ret_type_name": "ก่อน Admit"
  },
  {
    "opdscreen_bp_ret_type_id": 3,
    "opdscreen_bp_ret_type_name": "ก่อนส่งไปจุดอื่น"
  },
  {
    "opdscreen_bp_ret_type_id": 4,
    "opdscreen_bp_ret_type_name": "ประเมินอาการซ้ำ"
  },
  {
    "opdscreen_bp_ret_type_id": 5,
    "opdscreen_bp_ret_type_name": "อื่นๆ"
  }
]
```
