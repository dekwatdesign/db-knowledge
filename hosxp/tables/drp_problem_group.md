# `drp_problem_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_problem_group_code | varchar(5) | NO | PRI |  |  |  |
| drp_problem_group_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_problem_group_name | drp_problem_group_name | yes | 1 |
| PRIMARY | drp_problem_group_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "drp_problem_group_code": "P1",
    "drp_problem_group_name": "ประสิทธิภาพของการรักษา"
  },
  {
    "drp_problem_group_code": "P2",
    "drp_problem_group_name": "ความปลอดภัยของการรักษา"
  },
  {
    "drp_problem_group_code": "P3",
    "drp_problem_group_name": "อื่นๆ"
  }
]
```
