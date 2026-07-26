# `gleave_leader_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| STATUS_CODE | varchar(2) | NO | PRI |  |  |  |
| STATUS_NAME | varchar(50) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | STATUS_CODE | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "STATUS_CODE": "D",
    "STATUS_NAME": "หน. ไม่เห็นชอบ"
  },
  {
    "STATUS_CODE": "E",
    "STATUS_NAME": "หน. เห็นชอบ"
  }
]
```
