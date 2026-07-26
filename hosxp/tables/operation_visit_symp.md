# `operation_visit_symp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_visit_symp_id | int(11) | NO | PRI | 0 |  |  |
| operation_visit_symp_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_visit_symp_name | operation_visit_symp_name | yes | 1 |
| PRIMARY | operation_visit_symp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "operation_visit_symp_id": 1,
    "operation_visit_symp_name": "กระจกตาเป็นแผลถลอก"
  },
  {
    "operation_visit_symp_id": 4,
    "operation_visit_symp_name": "การบาดเจ็บของเส้นประสาท"
  },
  {
    "operation_visit_symp_id": 2,
    "operation_visit_symp_name": "เกิดแผลกดทับบริเวณร่างกาย"
  },
  {
    "operation_visit_symp_id": 9,
    "operation_visit_symp_name": "เกิดแผลริมปาก เยื่อบุช่องปาก"
  },
  {
    "operation_visit_symp_id": 14,
    "operation_visit_symp_name": "คลื่นไส้อาเจียน"
  },
  {
    "operation_visit_symp_id": 6,
    "operation_visit_symp_name": "ปวดแผลมาก"
  },
  {
    "operation_visit_symp_id": 15,
    "operation_visit_symp_name": "ปัสสาวะไม่ออก"
  },
  {
    "operation_visit_symp_id": 3,
    "operation_visit_symp_name": "ผิวหนังระคายเคืองจากสารเคมี"
  }
]
```
