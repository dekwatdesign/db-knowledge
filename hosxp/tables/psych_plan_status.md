# `psych_plan_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_plan_status_id | int(11) | NO | PRI | 0 |  |  |
| psych_plan_status_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_plan_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "psych_plan_status_id": 1,
    "psych_plan_status_name": "รอดำเนินการ",
    "active": null
  },
  {
    "psych_plan_status_id": 2,
    "psych_plan_status_name": "อยู่ระหว่างการดำเนินการ",
    "active": null
  },
  {
    "psych_plan_status_id": 3,
    "psych_plan_status_name": "ดำเนินการเสร็จสิ้น",
    "active": null
  },
  {
    "psych_plan_status_id": 4,
    "psych_plan_status_name": "ยกเลิก",
    "active": null
  }
]
```
