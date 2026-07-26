# `function_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| Type | varchar(20) | NO | PRI |  |  |  |
| Name | varchar(60) | NO | PRI |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | Type | yes | 1 |
| PRIMARY | Name | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "Type": "Function",
    "Name": "ADDRESS"
  },
  {
    "Type": "Function",
    "Name": "ADDRESSNAME"
  },
  {
    "Type": "Function",
    "Name": "ADDRESSNAMES"
  },
  {
    "Type": "Function",
    "Name": "ADDRESSNO"
  },
  {
    "Type": "Function",
    "Name": "ADDRESSOLD"
  },
  {
    "Type": "Function",
    "Name": "ADDZERO"
  },
  {
    "Type": "Function",
    "Name": "AIPN"
  },
  {
    "Type": "Function",
    "Name": "ALLNUMBER"
  }
]
```
