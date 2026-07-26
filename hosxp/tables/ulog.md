# `ulog`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| uid | varchar(50) | YES |  | NULL |  |  |
| pwd | varchar(50) | YES |  | NULL |  |  |
| sect | varchar(50) | YES |  | NULL |  |  |
| uname | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "uid": "refer",
    "pwd": "referadm",
    "sect": "admin",
    "uname": "ผู้ดูแลระบบ"
  },
  {
    "uid": "10672",
    "pwd": "1234",
    "sect": "user",
    "uname": "10672"
  },
  {
    "uid": "k",
    "pwd": "k",
    "sect": "user",
    "uname": "k"
  },
  {
    "uid": "r",
    "pwd": "r",
    "sect": "admin",
    "uname": "r"
  }
]
```
