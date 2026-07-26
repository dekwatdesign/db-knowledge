# `pharm_type_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pharm_type_group_id | int(11) | NO | PRI | 0 |  |  |
| pharm_type_group_code | varchar(15) | YES |  | NULL |  |  |
| pharm_type_group_name | varchar(200) | YES |  | NULL |  |  |
| pharm_type_group_nameth | varchar(200) | YES |  | NULL |  |  |
| pharm_type_group_namefull | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | pharm_type_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "pharm_type_group_id": 1,
    "pharm_type_group_code": "1",
    "pharm_type_group_name": "medication review and reconciliation",
    "pharm_type_group_nameth": "การทบทวนและประสานรายการยาของผู้ป่วย",
    "pharm_type_group_namefull": "หมวดที่ 1 การทบทวนและประสานรายการยาของผู้ป่วย"
  },
  {
    "pharm_type_group_id": 2,
    "pharm_type_group_code": "2",
    "pharm_type_group_name": "medication assessment and management plan",
    "pharm_type_group_nameth": "การประเมินและการวางแผนการจัดการด้านการใช้ยา",
    "pharm_type_group_namefull": "หมวดที่ 2 การประเมินและการวางแผนการจัดการด้านการใช้ยา"
  },
  {
    "pharm_type_group_id": 3,
    "pharm_type_group_code": "3",
    "pharm_type_group_name": "pharmaceutical care implementation",
    "pharm_type_group_nameth": "การดูแลการใช้ยาของผู้ป่วย",
    "pharm_type_group_namefull": "หมวดที่ 3 การดูแลการใช้ยาของผู้ป่วย"
  },
  {
    "pharm_type_group_id": 4,
    "pharm_type_group_code": "4",
    "pharm_type_group_name": "medication monitoring and evaluation",
    "pharm_type_group_nameth": "การติดตามและประเมินผลการใช้ยา",
    "pharm_type_group_namefull": "หมวดที่ 4 การติดตามและประเมินผลการใช้ยา"
  },
  {
    "pharm_type_group_id": 5,
    "pharm_type_group_code": "5",
    "pharm_type_group_name": "specialized pharmacy services",
    "pharm_type_group_nameth": "การบริการเภสัชกรรมเฉพาะทาง",
    "pharm_type_group_namefull": "หมวดที่ 5 การบริการเภสัชกรรมเฉพาะทาง"
  },
  {
    "pharm_type_group_id": 6,
    "pharm_type_group_code": "6",
    "pharm_type_group_name": "medication preparation",
    "pharm_type_group_nameth": "การเตรียมยา",
    "pharm_type_group_namefull": "หมวดที่ 6 การเตรียมยา"
  }
]
```
