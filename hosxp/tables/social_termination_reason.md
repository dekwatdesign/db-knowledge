# `social_termination_reason`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| social_termination_reason_id | int(11) | NO | PRI | 0 |  |  |
| social_termination_reason_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | social_termination_reason_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "social_termination_reason_id": 1,
    "social_termination_reason_name": "ผู้ใช้บริการถึงแก่กรรม"
  },
  {
    "social_termination_reason_id": 2,
    "social_termination_reason_name": "ผู้ใช้บริการสามารถดำรงชีวิตได้ปกติ"
  }
]
```
