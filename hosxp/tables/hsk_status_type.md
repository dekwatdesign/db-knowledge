# `hsk_status_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| status_type | int(3) | NO | PRI | 0 |  |  |
| status_name | varchar(100) | YES |  | NULL |  |  |
| status_st | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | status_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "status_type": 1,
    "status_name": "ติดตามต่อเนื่อง",
    "status_st": "Y"
  },
  {
    "status_type": 2,
    "status_name": "ติดต่อไม่ได้",
    "status_st": "Y"
  },
  {
    "status_type": 3,
    "status_name": "ผู้ป่วยเสียชีวิต",
    "status_st": "Y"
  },
  {
    "status_type": 4,
    "status_name": "ไม่ให้ความร่วมมือ",
    "status_st": "Y"
  }
]
```
