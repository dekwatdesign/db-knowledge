# `provis_garbage`

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
    "name": "ฝัง"
  },
  {
    "code": "2",
    "name": "เผา"
  },
  {
    "code": "3",
    "name": "หมักทำปุ๋ย"
  },
  {
    "code": "4",
    "name": "ส่งไปกำจัดที่อื่น"
  },
  {
    "code": "9",
    "name": "ไม่ทราบ"
  }
]
```
