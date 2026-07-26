# `hrd_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_LEVEL_ID | int | NO | PRI | NULL | auto_increment |  |
| HR_LEVEL_NAME | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | HR_LEVEL_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HR_LEVEL_ID": 1,
    "HR_LEVEL_NAME": "ปฏิบัติงาน",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_LEVEL_ID": 2,
    "HR_LEVEL_NAME": "ชำนาญงาน",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_LEVEL_ID": 3,
    "HR_LEVEL_NAME": "ปฏิบัติการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_LEVEL_ID": 4,
    "HR_LEVEL_NAME": "ชำนาญการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_LEVEL_ID": 5,
    "HR_LEVEL_NAME": "ชำนาญการพิเศษ",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_LEVEL_ID": 6,
    "HR_LEVEL_NAME": "เชี่ยวชาญ",
    "updated_at": null,
    "created_at": null
  },
  {
    "HR_LEVEL_ID": 10,
    "HR_LEVEL_NAME": "อาวุโส",
    "updated_at": "2020-09-16 03:11:18",
    "created_at": "2020-09-16 03:11:18"
  },
  {
    "HR_LEVEL_ID": 11,
    "HR_LEVEL_NAME": "ทรงคุณวุฒิ",
    "updated_at": "2020-09-18 07:54:37",
    "created_at": "2020-09-18 07:54:37"
  }
]
```
