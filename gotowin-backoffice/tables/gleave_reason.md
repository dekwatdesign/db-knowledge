# `gleave_reason`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| REASON_TYPE_ID | int | NO | PRI | NULL | auto_increment |  |
| REASON_TYPE_NAME | varchar(100) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | REASON_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "REASON_TYPE_ID": 1,
    "REASON_TYPE_NAME": "ทั่วไป"
  },
  {
    "REASON_TYPE_ID": 2,
    "REASON_TYPE_NAME": "เลี้ยงดูบุตร"
  }
]
```
