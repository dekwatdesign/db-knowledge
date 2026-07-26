# `emp_service_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_service_plan_id | int(11) | NO | PRI | 0 |  |  |
| emp_service_plan_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_service_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_service_plan_id": 1,
    "emp_service_plan_name": "สาขาโรคหัวใจ"
  },
  {
    "emp_service_plan_id": 2,
    "emp_service_plan_name": "สาขาโรคหลอดเลือดสมอง"
  },
  {
    "emp_service_plan_id": 3,
    "emp_service_plan_name": "สาขาทารกแรกเกิด"
  },
  {
    "emp_service_plan_id": 4,
    "emp_service_plan_name": "สาขาโรคมะเร็ง"
  },
  {
    "emp_service_plan_id": 5,
    "emp_service_plan_name": "สาขาอุบัติเหตุ"
  },
  {
    "emp_service_plan_id": 6,
    "emp_service_plan_name": "สาขาจิตเวช"
  },
  {
    "emp_service_plan_id": 7,
    "emp_service_plan_name": "สาขาโรคไม่ติดต่อ"
  },
  {
    "emp_service_plan_id": 8,
    "emp_service_plan_name": "สาขาตา"
  }
]
```
