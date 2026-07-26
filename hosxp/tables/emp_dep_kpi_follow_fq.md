# `emp_dep_kpi_follow_fq`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_dep_kpi_follow_fq_id | int(11) | NO | PRI | 0 |  |  |
| emp_dep_kpi_follow_fq_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_dep_kpi_follow_fq_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "emp_dep_kpi_follow_fq_id": 1,
    "emp_dep_kpi_follow_fq_name": "รายวัน"
  },
  {
    "emp_dep_kpi_follow_fq_id": 2,
    "emp_dep_kpi_follow_fq_name": "รายสัปดาห์"
  },
  {
    "emp_dep_kpi_follow_fq_id": 3,
    "emp_dep_kpi_follow_fq_name": "รายเดือน"
  },
  {
    "emp_dep_kpi_follow_fq_id": 4,
    "emp_dep_kpi_follow_fq_name": "รายไตรมาส"
  },
  {
    "emp_dep_kpi_follow_fq_id": 5,
    "emp_dep_kpi_follow_fq_name": "รายปี"
  },
  {
    "emp_dep_kpi_follow_fq_id": 6,
    "emp_dep_kpi_follow_fq_name": "ราย 6 เดือน"
  }
]
```
