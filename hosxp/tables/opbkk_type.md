# `opbkk_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opbkk_type_code | varchar(2) | NO | PRI |  |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | opbkk_type_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opbkk_type_code": "0",
    "name": "Refer ในบัญชีเครือข่ายเดียวกัน"
  },
  {
    "opbkk_type_code": "1",
    "name": "Refer นอกบัญชีเครือข่าย"
  },
  {
    "opbkk_type_code": "2",
    "name": "AE ในบัญชีเครือข่าย"
  },
  {
    "opbkk_type_code": "3",
    "name": "AE นอกบัญชีเครือข่าย"
  },
  {
    "opbkk_type_code": "4",
    "name": "OP พิการ"
  },
  {
    "opbkk_type_code": "5",
    "name": "OP บัตรตัวเอง"
  },
  {
    "opbkk_type_code": "6",
    "name": "Clearing House ศบศ"
  },
  {
    "opbkk_type_code": "7",
    "name": "OP อื่นๆ (Individual data)"
  }
]
```
