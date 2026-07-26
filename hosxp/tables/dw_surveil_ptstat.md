# `dw_surveil_ptstat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(1) | NO | PRI |  |  |  |
| name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "code": "1",
    "name": "ไม่ระบุ"
  },
  {
    "code": "2",
    "name": "หาย"
  },
  {
    "code": "3",
    "name": "ตาย"
  },
  {
    "code": "4",
    "name": "ยังรักษาอยู่"
  },
  {
    "code": "5",
    "name": "ไม่ทราบ"
  }
]
```
