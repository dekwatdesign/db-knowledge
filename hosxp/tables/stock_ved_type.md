# `stock_ved_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ved_code | char(1) | NO | PRI |  |  |  |
| ved_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ved_name | ved_name | yes | 1 |
| PRIMARY | ved_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ved_code": "V",
    "ved_name": "Vital"
  },
  {
    "ved_code": "E",
    "ved_name": "Essential"
  },
  {
    "ved_code": "D",
    "ved_name": "Desirable"
  }
]
```
