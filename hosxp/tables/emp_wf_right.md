# `emp_wf_right`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_wf_right_id | int(11) | NO | PRI | 0 |  |  |
| emp_wf_right_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_wf_right_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "emp_wf_right_id": 1,
    "emp_wf_right_name": "ตามสิทธิ"
  },
  {
    "emp_wf_right_id": 2,
    "emp_wf_right_name": "เฉพาะส่วนที่ยังขาดจากสิทธิ"
  }
]
```
