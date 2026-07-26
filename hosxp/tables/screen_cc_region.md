# `screen_cc_region`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| screen_cc_region_id | int(11) | NO | PRI | 0 |  |  |
| screen_cc_region_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_screen_cc_region_name | screen_cc_region_name | yes | 1 |
| PRIMARY | screen_cc_region_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "screen_cc_region_id": 2,
    "screen_cc_region_name": "ระบบกล้ามเนื้อ"
  },
  {
    "screen_cc_region_id": 9,
    "screen_cc_region_name": "ระบบขับถ่าย"
  },
  {
    "screen_cc_region_id": 3,
    "screen_cc_region_name": "ระบบโครงกระดูก"
  },
  {
    "screen_cc_region_id": 7,
    "screen_cc_region_name": "ระบบต่อมต่าง ๆ"
  },
  {
    "screen_cc_region_id": 6,
    "screen_cc_region_name": "ระบบประสาท"
  },
  {
    "screen_cc_region_id": 1,
    "screen_cc_region_name": "ระบบผิวหนัง"
  },
  {
    "screen_cc_region_id": 8,
    "screen_cc_region_name": "ระบบย่อยอาหาร"
  },
  {
    "screen_cc_region_id": 10,
    "screen_cc_region_name": "ระบบสืบพันธุ์"
  }
]
```
