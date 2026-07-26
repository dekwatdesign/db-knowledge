# `ipt_coll_status_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_coll_status_type_id | int(11) | NO | PRI | 0 |  |  |
| ipt_coll_status_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_coll_status_type_name | ipt_coll_status_type_name | yes | 1 |
| PRIMARY | ipt_coll_status_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ipt_coll_status_type_id": 1,
    "ipt_coll_status_type_name": "ยังไม่ได้ตรวจสอบค่าใช้จ่าย"
  },
  {
    "ipt_coll_status_type_id": 2,
    "ipt_coll_status_type_name": "รอตรวจสอบค่าใช้จ่าย"
  },
  {
    "ipt_coll_status_type_id": 3,
    "ipt_coll_status_type_name": "ตรวจสอบค่าใช้จ่ายแล้ว"
  },
  {
    "ipt_coll_status_type_id": 4,
    "ipt_coll_status_type_name": "อยู่ในระหว่างการอุทธรณ์"
  }
]
```
