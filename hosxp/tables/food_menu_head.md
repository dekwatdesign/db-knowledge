# `food_menu_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| food_menu_head_id | int(11) | NO | PRI | 0 |  |  |
| menu_name | varchar(250) | YES | MUL | NULL |  |  |
| create_date | date | YES |  | NULL |  |  |
| create_staff | varchar(50) | YES |  | NULL |  |  |
| menu_detail | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_menu_name | menu_name | no | 1 |
| PRIMARY | food_menu_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "food_menu_head_id": 1,
    "menu_name": "ข้าวต้ม",
    "create_date": "2020-11-11",
    "create_staff": "chatchawal",
    "menu_detail": "ข้าวต้ม",
    "hos_guid": ""
  },
  {
    "food_menu_head_id": 2,
    "menu_name": "อาหารสำหรับผู้แพ้ไข่",
    "create_date": "2020-11-11",
    "create_staff": "chatchawal",
    "menu_detail": "อาหารสำหรับผู้แพ้ไข่",
    "hos_guid": ""
  },
  {
    "food_menu_head_id": 3,
    "menu_name": "อาหารสำหรับผู้แพ้แป้ง",
    "create_date": "2020-11-11",
    "create_staff": "chatchawal",
    "menu_detail": "อาหารสำหรับผู้แพ้แป้ง",
    "hos_guid": ""
  },
  {
    "food_menu_head_id": 4,
    "menu_name": "อาหารสำหรับผู้แพ้อาหารทะเล",
    "create_date": "2020-11-11",
    "create_staff": "chatchawal",
    "menu_detail": "อาหารสำหรับผู้แพ้อาหารทะเล",
    "hos_guid": ""
  },
  {
    "food_menu_head_id": 5,
    "menu_name": "อาหารกากใยต่ำ",
    "create_date": "2020-11-11",
    "create_staff": "chatchawal",
    "menu_detail": "อาหารกากใยต่ำ",
    "hos_guid": ""
  },
  {
    "food_menu_head_id": 6,
    "menu_name": "อาหารกากใยสูง",
    "create_date": "2020-11-11",
    "create_staff": "chatchawal",
    "menu_detail": "อาหารกากใยสูง",
    "hos_guid": ""
  },
  {
    "food_menu_head_id": 7,
    "menu_name": "อาหารแคลอรี่ต่ำ",
    "create_date": "2020-11-11",
    "create_staff": "chatchawal",
    "menu_detail": "อาหารแคลอรี่ต่ำ",
    "hos_guid": ""
  },
  {
    "food_menu_head_id": 8,
    "menu_name": "อาหารแคลอรี่สูง",
    "create_date": "2020-11-11",
    "create_staff": "chatchawal",
    "menu_detail": "อาหารแคลอรี่สูง",
    "hos_guid": ""
  }
]
```
