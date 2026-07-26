# `asset_care_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CARE_CHECK_ID | int | NO | PRI | NULL | auto_increment |  |
| CARE_CHECK_NAME | varchar(100) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CARE_CHECK_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "CARE_CHECK_ID": 1,
    "CARE_CHECK_NAME": "ปกติ"
  },
  {
    "CARE_CHECK_ID": 2,
    "CARE_CHECK_NAME": "ผิดปกติ"
  }
]
```
