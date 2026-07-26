# `asset_color`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| COLOR_ID | int | NO | PRI | NULL | auto_increment |  |
| COLOR_NAME | varchar(100) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | COLOR_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "COLOR_ID": 1,
    "COLOR_NAME": "ขาว"
  },
  {
    "COLOR_ID": 2,
    "COLOR_NAME": "สีฟ้า"
  },
  {
    "COLOR_ID": 3,
    "COLOR_NAME": "ดำ"
  },
  {
    "COLOR_ID": 4,
    "COLOR_NAME": "ทู-โทน บรอนซ์เงิน"
  },
  {
    "COLOR_ID": 5,
    "COLOR_NAME": "แดง"
  },
  {
    "COLOR_ID": 6,
    "COLOR_NAME": "สีส้มขาว"
  },
  {
    "COLOR_ID": 7,
    "COLOR_NAME": "ชมพู"
  },
  {
    "COLOR_ID": 8,
    "COLOR_NAME": "น้ำเงิน-แดง"
  }
]
```
