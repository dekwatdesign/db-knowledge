# `cause_referback`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cause_referback_id | varchar(5) | NO | PRI |  |  |  |
| cause_referback_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | cause_referback_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "cause_referback_id": "1",
    "cause_referback_name": "Admit รักษาต่อเนื่อง"
  },
  {
    "cause_referback_id": "2",
    "cause_referback_name": "Discharge/Follow up รพช."
  },
  {
    "cause_referback_id": "3",
    "cause_referback_name": "หลังคลอด"
  },
  {
    "cause_referback_id": "4",
    "cause_referback_name": "อื่นๆ"
  }
]
```
