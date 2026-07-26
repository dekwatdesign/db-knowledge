# `hrd_position_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| POSITION_TYPE_SP_ID | int | NO | PRI | NULL | auto_increment |  |
| POSITION_TYPE_SP_NAME | varchar(100) | YES |  |  |  |  |
| DETAIL | varchar(150) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| IX_POSITION_TYPE_SP_ID | POSITION_TYPE_SP_ID | no | 1 |
| PRIMARY | POSITION_TYPE_SP_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "POSITION_TYPE_SP_ID": 1,
    "POSITION_TYPE_SP_NAME": "วิชาการ",
    "DETAIL": "-"
  },
  {
    "POSITION_TYPE_SP_ID": 2,
    "POSITION_TYPE_SP_NAME": "ทั่วไป",
    "DETAIL": "-"
  }
]
```
