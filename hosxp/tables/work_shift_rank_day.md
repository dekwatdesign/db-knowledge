# `work_shift_rank_day`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| work_shift_rank_day_id | int(11) | NO | PRI | 0 |  |  |
| work_shift_rank_day_name | varchar(100) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_work_shift_rank_day_name | work_shift_rank_day_name | yes | 1 |
| PRIMARY | work_shift_rank_day_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "work_shift_rank_day_id": 2,
    "work_shift_rank_day_name": "จันทร์"
  },
  {
    "work_shift_rank_day_id": 5,
    "work_shift_rank_day_name": "พฤหัสบดี"
  },
  {
    "work_shift_rank_day_id": 4,
    "work_shift_rank_day_name": "พุธ"
  },
  {
    "work_shift_rank_day_id": 6,
    "work_shift_rank_day_name": "ศุกร์"
  },
  {
    "work_shift_rank_day_id": 7,
    "work_shift_rank_day_name": "เสาร์"
  },
  {
    "work_shift_rank_day_id": 3,
    "work_shift_rank_day_name": "อังคาร"
  },
  {
    "work_shift_rank_day_id": 1,
    "work_shift_rank_day_name": "อาทิตย์"
  }
]
```
