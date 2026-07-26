# `operate_color`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| OPERATE_COLOR_ID | int | NO | PRI | NULL |  |  |
| OPERATE_COLOR_CODE | varchar(255) | YES |  | NULL |  |  |
| OPERATE_COLOR_NAME | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | OPERATE_COLOR_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "OPERATE_COLOR_ID": 1,
    "OPERATE_COLOR_CODE": "#FFFF99",
    "OPERATE_COLOR_NAME": "สีเหลือง"
  },
  {
    "OPERATE_COLOR_ID": 2,
    "OPERATE_COLOR_CODE": "#CCFFFF",
    "OPERATE_COLOR_NAME": "สีฟ้า"
  },
  {
    "OPERATE_COLOR_ID": 3,
    "OPERATE_COLOR_CODE": "#66CC00",
    "OPERATE_COLOR_NAME": "สีเขียว"
  },
  {
    "OPERATE_COLOR_ID": 4,
    "OPERATE_COLOR_CODE": "#FF9933",
    "OPERATE_COLOR_NAME": "สีส้ม"
  },
  {
    "OPERATE_COLOR_ID": 5,
    "OPERATE_COLOR_CODE": "#FF99CC",
    "OPERATE_COLOR_NAME": "สีชมพู"
  },
  {
    "OPERATE_COLOR_ID": 6,
    "OPERATE_COLOR_CODE": "#3366FF",
    "OPERATE_COLOR_NAME": "สีน้ำเงิน"
  },
  {
    "OPERATE_COLOR_ID": 7,
    "OPERATE_COLOR_CODE": "#FF3300",
    "OPERATE_COLOR_NAME": "สีแดง"
  },
  {
    "OPERATE_COLOR_ID": 8,
    "OPERATE_COLOR_CODE": "#CC9933",
    "OPERATE_COLOR_NAME": "สีน้ำตาล"
  }
]
```
