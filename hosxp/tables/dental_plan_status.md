# `dental_plan_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_plan_status_id | int(11) | NO | PRI | 0 |  |  |
| dental_plan_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dental_plan_status_name | dental_plan_status_name | yes | 1 |
| PRIMARY | dental_plan_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "dental_plan_status_id": 3,
    "dental_plan_status_name": "ดำเนินการเสร็จสิ้น"
  },
  {
    "dental_plan_status_id": 4,
    "dental_plan_status_name": "ยกเลิก"
  },
  {
    "dental_plan_status_id": 1,
    "dental_plan_status_name": "รอดำเนินการ"
  },
  {
    "dental_plan_status_id": 2,
    "dental_plan_status_name": "อยู่ระหว่างการดำเนินการ"
  }
]
```
