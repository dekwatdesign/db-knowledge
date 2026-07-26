# `asset_group_cal`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CAL_TYPE_ID | varchar(10) | NO | PRI | NULL |  |  |
| CAL_TYPE_NAME | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CAL_TYPE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "CAL_TYPE_ID": "EC",
    "CAL_TYPE_NAME": "โดยหน่วยงานภายนอก"
  },
  {
    "CAL_TYPE_ID": "IC",
    "CAL_TYPE_NAME": "โดยหน่วยงานภายใน"
  },
  {
    "CAL_TYPE_ID": "Null",
    "CAL_TYPE_NAME": "ไม่ระบุ"
  }
]
```
