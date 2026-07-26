# `meet`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| meet_id | int(11) | NO | PRI | 0 |  |  |
| meet_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | meet_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "meet_id": 1,
    "meet_name": "ตาย/arrest"
  },
  {
    "meet_id": 2,
    "meet_name": "ชัก, ซึมมาก"
  },
  {
    "meet_id": 3,
    "meet_name": "ซึม, ไม่ร้อง"
  },
  {
    "meet_id": 4,
    "meet_name": "active"
  },
  {
    "meet_id": 0,
    "meet_name": "ไม่ทราบ"
  }
]
```
