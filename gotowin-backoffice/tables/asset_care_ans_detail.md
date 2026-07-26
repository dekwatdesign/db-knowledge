# `asset_care_ans_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| CARE_ANS_DETAIL_ID | int | NO | PRI | NULL | auto_increment |  |
| CARE_ANS_DETAIL_NAME | varchar(100) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | CARE_ANS_DETAIL_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "CARE_ANS_DETAIL_ID": 1,
    "CARE_ANS_DETAIL_NAME": "ปกติ"
  },
  {
    "CARE_ANS_DETAIL_ID": 2,
    "CARE_ANS_DETAIL_NAME": "ผิดปกติ"
  }
]
```
