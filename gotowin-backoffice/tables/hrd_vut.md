# `hrd_vut`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| VUT_ID | varchar(10) | NO | PRI |  |  |  |
| VUT_NAME | varchar(200) | YES |  |  |  |  |
| VUT_ORDER | int | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | VUT_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "VUT_ID": "01",
    "VUT_NAME": "มัธยมศึกษาปีที่ 6",
    "VUT_ORDER": 2
  },
  {
    "VUT_ID": "02",
    "VUT_NAME": "ปวช.",
    "VUT_ORDER": 4
  },
  {
    "VUT_ID": "03",
    "VUT_NAME": "ปวท.",
    "VUT_ORDER": 5
  },
  {
    "VUT_ID": "04",
    "VUT_NAME": "ปวส.",
    "VUT_ORDER": 5
  },
  {
    "VUT_ID": "05",
    "VUT_NAME": "อนุปริญญา",
    "VUT_ORDER": 7
  },
  {
    "VUT_ID": "06",
    "VUT_NAME": "ปริญญาตรี",
    "VUT_ORDER": 8
  },
  {
    "VUT_ID": "07",
    "VUT_NAME": "ปริญญาโท",
    "VUT_ORDER": 9
  },
  {
    "VUT_ID": "08",
    "VUT_NAME": "ปริญญาเอก",
    "VUT_ORDER": 10
  }
]
```
