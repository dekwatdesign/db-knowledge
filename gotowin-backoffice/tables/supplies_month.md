# `supplies_month`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| MONTH_ID | int | NO | PRI | NULL |  |  |
| MONTH_NAME | varchar(100) | YES |  |  |  |  |
| MONTH_NAME_EN | varchar(100) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | MONTH_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "MONTH_ID": 1,
    "MONTH_NAME": "มกราคม",
    "MONTH_NAME_EN": "JANUARY"
  },
  {
    "MONTH_ID": 2,
    "MONTH_NAME": "กุมพาพันธ์",
    "MONTH_NAME_EN": "FABUARY"
  },
  {
    "MONTH_ID": 3,
    "MONTH_NAME": "มีนาคม",
    "MONTH_NAME_EN": "MARCH"
  },
  {
    "MONTH_ID": 4,
    "MONTH_NAME": "เมษายน",
    "MONTH_NAME_EN": "APRIL"
  },
  {
    "MONTH_ID": 5,
    "MONTH_NAME": "พฤษภาคม",
    "MONTH_NAME_EN": "MAY"
  },
  {
    "MONTH_ID": 6,
    "MONTH_NAME": "[MASKED_FULLNAME]",
    "MONTH_NAME_EN": "JUN"
  },
  {
    "MONTH_ID": 7,
    "MONTH_NAME": "กรกฎาคม",
    "MONTH_NAME_EN": "JULY"
  },
  {
    "MONTH_ID": 8,
    "MONTH_NAME": "สิงหาคม",
    "MONTH_NAME_EN": "AUGUEST"
  }
]
```
