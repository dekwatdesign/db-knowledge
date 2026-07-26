# `healthflow_std_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hft_std_type_id | int(11) | NO | PRI | 0 |  |  |
| hft_std_type_name | varchar(255) | NO | PRI |  |  |  |
| hosxp_std_type_id | varchar(50) | YES |  | NULL |  |  |
| hosxp_std_type_name | varchar(255) | YES |  | NULL |  |  |
| is_active | char(1) | NO | PRI |  |  |  |
| hosxp_std_category_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | hft_std_type_id | yes | 1 |
| PRIMARY | hft_std_type_name | yes | 2 |
| PRIMARY | is_active | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hft_std_type_id": 1,
    "hft_std_type_name": "ไม่เคยสูบ",
    "hosxp_std_type_id": "1",
    "hosxp_std_type_name": "ไม่เคยสูบ",
    "is_active": "Y",
    "hosxp_std_category_id": 1
  },
  {
    "hft_std_type_id": 2,
    "hft_std_type_name": "ยังสูบอยู่ หรือเลิกสูบได้ยังไม่ถึง 1 เดือน",
    "hosxp_std_type_id": "2",
    "hosxp_std_type_name": "ยังสูบอยู่ หรือเลิกสูบได้ยังไม่ถึง 1 เดือน",
    "is_active": "Y",
    "hosxp_std_category_id": 1
  },
  {
    "hft_std_type_id": 3,
    "hft_std_type_name": "เลิกสูบได้ยังไม่ถึง 1 เดือน",
    "hosxp_std_type_id": "3",
    "hosxp_std_type_name": "เลิกสูบแล้วอย่างน้อย 1 เดือน",
    "is_active": "Y",
    "hosxp_std_category_id": 1
  },
  {
    "hft_std_type_id": 4,
    "hft_std_type_name": "ไม่ไดซัก",
    "hosxp_std_type_id": "4",
    "hosxp_std_type_name": "ไม่ได้ซัก",
    "is_active": "Y",
    "hosxp_std_category_id": 1
  },
  {
    "hft_std_type_id": 5,
    "hft_std_type_name": "ไม่ดื่ม",
    "hosxp_std_type_id": "1",
    "hosxp_std_type_name": "ไม่ดื่ม",
    "is_active": "Y",
    "hosxp_std_category_id": 2
  },
  {
    "hft_std_type_id": 6,
    "hft_std_type_name": "ดื่ม",
    "hosxp_std_type_id": "2",
    "hosxp_std_type_name": "ดื่ม",
    "is_active": "Y",
    "hosxp_std_category_id": 2
  },
  {
    "hft_std_type_id": 7,
    "hft_std_type_name": "เคยดื่ม แต่เลิกแล้ว",
    "hosxp_std_type_id": "3",
    "hosxp_std_type_name": "เคยดื่ม แต่เลิกแล้ว",
    "is_active": "Y",
    "hosxp_std_category_id": 2
  },
  {
    "hft_std_type_id": 8,
    "hft_std_type_name": "ปฏิเสธการแพ้ยา",
    "hosxp_std_type_id": "N",
    "hosxp_std_type_name": "ปฏิเสธการแพ้",
    "is_active": "Y",
    "hosxp_std_category_id": 3
  }
]
```
