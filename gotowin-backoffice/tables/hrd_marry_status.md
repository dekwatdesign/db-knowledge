# `hrd_marry_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HR_MARRY_STATUS_ID | varchar(2) | NO | PRI |  |  | รหัสสถานะบุคคล |
| HR_MARRY_STATUS_NAME | varchar(50) | YES |  |  |  | ชื่อสถานะ |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | HR_MARRY_STATUS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "HR_MARRY_STATUS_ID": "01",
    "HR_MARRY_STATUS_NAME": "โสด"
  },
  {
    "HR_MARRY_STATUS_ID": "02",
    "HR_MARRY_STATUS_NAME": "คู่"
  },
  {
    "HR_MARRY_STATUS_ID": "03",
    "HR_MARRY_STATUS_NAME": "หม้าย"
  },
  {
    "HR_MARRY_STATUS_ID": "04",
    "HR_MARRY_STATUS_NAME": "หย่า"
  }
]
```
