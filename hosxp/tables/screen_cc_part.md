# `screen_cc_part`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| screen_cc_part_id | int(11) | NO | PRI | 0 |  |  |
| screen_cc_region_id | int(11) | YES | MUL | NULL |  |  |
| screen_cc_part_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_region_id | screen_cc_region_id | no | 1 |
| PRIMARY | screen_cc_part_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "screen_cc_part_id": 1,
    "screen_cc_region_id": 1,
    "screen_cc_part_name": "ผิวหนัง"
  },
  {
    "screen_cc_part_id": 2,
    "screen_cc_region_id": 1,
    "screen_cc_part_name": "ขน"
  },
  {
    "screen_cc_part_id": 3,
    "screen_cc_region_id": 1,
    "screen_cc_part_name": "ผม"
  },
  {
    "screen_cc_part_id": 4,
    "screen_cc_region_id": 1,
    "screen_cc_part_name": "เล็บ"
  },
  {
    "screen_cc_part_id": 5,
    "screen_cc_region_id": 1,
    "screen_cc_part_name": "ต่อมเหงื่อ"
  },
  {
    "screen_cc_part_id": 6,
    "screen_cc_region_id": 1,
    "screen_cc_part_name": "ต่อมน้ำมัน"
  },
  {
    "screen_cc_part_id": 7,
    "screen_cc_region_id": 2,
    "screen_cc_part_name": "กล้ามเนื้อ หน้า"
  },
  {
    "screen_cc_part_id": 8,
    "screen_cc_region_id": 2,
    "screen_cc_part_name": "กล้ามเนื้อ อก"
  }
]
```
