# `provis_traffic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(2) | NO | PRI |  |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "code": "1",
    "name": "ผู้ขับขี่"
  },
  {
    "code": "2",
    "name": "ผู้โดยสาร"
  },
  {
    "code": "3",
    "name": "คนเดินเท้า"
  },
  {
    "code": "8",
    "name": "อื่นๆ"
  },
  {
    "code": "9",
    "name": "ไม่ทราบ"
  }
]
```
