# `emp_wf_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_wf_status_id | int(11) | NO | PRI | 0 |  |  |
| emp_wf_status_name | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_wf_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "emp_wf_status_id": 1,
    "emp_wf_status_name": "รอการอนุมัติ"
  },
  {
    "emp_wf_status_id": 2,
    "emp_wf_status_name": "อนุมัติ"
  },
  {
    "emp_wf_status_id": 3,
    "emp_wf_status_name": "ยกเลิก"
  }
]
```
