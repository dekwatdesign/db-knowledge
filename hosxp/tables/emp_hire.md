# `emp_hire`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_hire_id | int(11) | NO | PRI | 0 |  |  |
| emp_hire_name | varchar(50) | YES |  | NULL |  |  |
| emp_welfare_right | char(1) | YES |  | NULL |  |  |
| emp_annual_leave_used | char(1) | YES |  | NULL |  |  |
| emp_work_age_less1 | int(11) | YES |  | NULL |  |  |
| emp_work_age_less10 | int(11) | YES |  | NULL |  |  |
| emp_work_age_less10_vacation | int(11) | YES |  | NULL |  |  |
| emp_work_age_more10 | int(11) | YES |  | NULL |  |  |
| emp_work_age_more10_vacation | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_hire_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "emp_hire_id": 1,
    "emp_hire_name": "ข้าราชการการเมือง",
    "emp_welfare_right": "Y",
    "emp_annual_leave_used": null,
    "emp_work_age_less1": null,
    "emp_work_age_less10": null,
    "emp_work_age_less10_vacation": null,
    "emp_work_age_more10": null,
    "emp_work_age_more10_vacation": null
  },
  {
    "emp_hire_id": 2,
    "emp_hire_name": "พนักงานเทศบาล",
    "emp_welfare_right": "Y",
    "emp_annual_leave_used": null,
    "emp_work_age_less1": null,
    "emp_work_age_less10": null,
    "emp_work_age_less10_vacation": null,
    "emp_work_age_more10": null,
    "emp_work_age_more10_vacation": null
  },
  {
    "emp_hire_id": 3,
    "emp_hire_name": "ลูกจ้างประจำ",
    "emp_welfare_right": "Y",
    "emp_annual_leave_used": null,
    "emp_work_age_less1": null,
    "emp_work_age_less10": null,
    "emp_work_age_less10_vacation": null,
    "emp_work_age_more10": null,
    "emp_work_age_more10_vacation": null
  },
  {
    "emp_hire_id": 4,
    "emp_hire_name": "พนักงานจ้างตามภารกิจ",
    "emp_welfare_right": "N",
    "emp_annual_leave_used": null,
    "emp_work_age_less1": null,
    "emp_work_age_less10": null,
    "emp_work_age_less10_vacation": null,
    "emp_work_age_more10": null,
    "emp_work_age_more10_vacation": null
  },
  {
    "emp_hire_id": 5,
    "emp_hire_name": "พนักงานจ้างทั่วไป",
    "emp_welfare_right": "N",
    "emp_annual_leave_used": null,
    "emp_work_age_less1": null,
    "emp_work_age_less10": null,
    "emp_work_age_less10_vacation": null,
    "emp_work_age_more10": null,
    "emp_work_age_more10_vacation": null
  },
  {
    "emp_hire_id": 6,
    "emp_hire_name": "ข้าราชการครู",
    "emp_welfare_right": "Y",
    "emp_annual_leave_used": null,
    "emp_work_age_less1": null,
    "emp_work_age_less10": null,
    "emp_work_age_less10_vacation": null,
    "emp_work_age_more10": null,
    "emp_work_age_more10_vacation": null
  },
  {
    "emp_hire_id": 7,
    "emp_hire_name": "ข้าราชการบำนาญ",
    "emp_welfare_right": "Y",
    "emp_annual_leave_used": null,
    "emp_work_age_less1": null,
    "emp_work_age_less10": null,
    "emp_work_age_less10_vacation": null,
    "emp_work_age_more10": null,
    "emp_work_age_more10_vacation": null
  }
]
```
