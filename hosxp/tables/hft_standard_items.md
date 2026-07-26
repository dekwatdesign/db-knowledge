# `hft_standard_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hft_std_item_id | int(11) | NO | PRI | 0 |  |  |
| hft_std_item_name | varchar(255) | YES |  | NULL |  |  |
| hft_std_item_code | varchar(255) | YES |  | NULL |  |  |
| hft_hosxp_item_id | int(11) | YES |  | NULL |  |  |
| hft_hosxp_table_name | varchar(255) | YES |  | NULL |  |  |
| hft_is_active | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | hft_std_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hft_std_item_id": 1,
    "hft_std_item_name": "ไม่เคยสูบ",
    "hft_std_item_code": "1B52",
    "hft_hosxp_item_id": 1,
    "hft_hosxp_table_name": "smoking_type",
    "hft_is_active": "Y"
  },
  {
    "hft_std_item_id": 2,
    "hft_std_item_name": "ยังสูบอยู่ หรือเลิกสูบได้ยังไม่ถึง 1 เดือน",
    "hft_std_item_code": null,
    "hft_hosxp_item_id": 2,
    "hft_hosxp_table_name": "smoking_type",
    "hft_is_active": "Y"
  },
  {
    "hft_std_item_id": 3,
    "hft_std_item_name": "เลิกสูบแล้วอย่างน้อย 1 เดือน",
    "hft_std_item_code": null,
    "hft_hosxp_item_id": 3,
    "hft_hosxp_table_name": "smoking_type",
    "hft_is_active": "Y"
  },
  {
    "hft_std_item_id": 4,
    "hft_std_item_name": "ไม่ได้ซัก",
    "hft_std_item_code": null,
    "hft_hosxp_item_id": 4,
    "hft_hosxp_table_name": "smoking_type",
    "hft_is_active": "Y"
  },
  {
    "hft_std_item_id": 5,
    "hft_std_item_name": "ไม่ดื่ม",
    "hft_std_item_code": null,
    "hft_hosxp_item_id": 1,
    "hft_hosxp_table_name": "drinking_type",
    "hft_is_active": "Y"
  },
  {
    "hft_std_item_id": 6,
    "hft_std_item_name": "ดื่ม",
    "hft_std_item_code": null,
    "hft_hosxp_item_id": 2,
    "hft_hosxp_table_name": "drinking_type",
    "hft_is_active": "Y"
  },
  {
    "hft_std_item_id": 7,
    "hft_std_item_name": "เคยดื่ม แต่เลิกแล้ว",
    "hft_std_item_code": null,
    "hft_hosxp_item_id": 3,
    "hft_hosxp_table_name": "drinking_type",
    "hft_is_active": "Y"
  },
  {
    "hft_std_item_id": 8,
    "hft_std_item_name": "ทดสอบ",
    "hft_std_item_code": null,
    "hft_hosxp_item_id": 1,
    "hft_hosxp_table_name": "drinking_type",
    "hft_is_active": "N"
  }
]
```
