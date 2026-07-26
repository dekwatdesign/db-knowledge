# `asset_group_pm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PM_TYPE_ID | varchar(10) | NO | PRI | NULL |  |  |
| PM_TYPE_NAME | varchar(50) | YES |  | NULL |  |  |
| PM_TYPE_NAME_EN | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | PM_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "PM_TYPE_ID": "EM",
    "PM_TYPE_NAME": "โดยหน่วยงานภายใน",
    "PM_TYPE_NAME_EN": "Intenal Maintenance"
  },
  {
    "PM_TYPE_ID": "IM",
    "PM_TYPE_NAME": "โดยหน่วยงานภายนอก",
    "PM_TYPE_NAME_EN": "External Maintenance"
  },
  {
    "PM_TYPE_ID": "Null",
    "PM_TYPE_NAME": "ไม่ระบุ",
    "PM_TYPE_NAME_EN": "No Comment"
  }
]
```
