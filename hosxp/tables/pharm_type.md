# `pharm_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pharm_type_id | int(11) | NO | PRI | 0 |  |  |
| pharm_type_code | varchar(18) | YES |  | NULL |  |  |
| pharm_type_name | varchar(200) | YES |  | NULL |  |  |
| pharm_type_group_id | int(11) | YES | MUL | NULL |  |  |
| pharm_type_nameth | varchar(200) | YES |  | NULL |  |  |
| pharm_type_namefull | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refpharm_type_group16 | pharm_type_group_id | no | 1 |
| PRIMARY | pharm_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pharm_type_id": 1,
    "pharm_type_code": "013-01-00",
    "pharm_type_name": "Medication review and reconciliation",
    "pharm_type_group_id": 1,
    "pharm_type_nameth": "การทบทวนและประสานรายการยาของผู้ป่วย",
    "pharm_type_namefull": "013-01-00 การทบทวนและประสานรายการยาของผู้ป่วย"
  },
  {
    "pharm_type_id": 2,
    "pharm_type_code": "013-01-01",
    "pharm_type_name": "Medication assessment and management plan",
    "pharm_type_group_id": 2,
    "pharm_type_nameth": "การประเมินและการวางแผนการจัดการด้านการใช้ยา",
    "pharm_type_namefull": "013-01-01 การประเมินและการวางแผนการจัดการด้านการใช้ยา"
  },
  {
    "pharm_type_id": 3,
    "pharm_type_code": "014-03-00 ",
    "pharm_type_name": "Therapeutic drug monitoring",
    "pharm_type_group_id": 3,
    "pharm_type_nameth": "การตรวจและควบคุมระดับยาในเลือด",
    "pharm_type_namefull": "014-03-00 การตรวจและควบคุมระดับยาในเลือด"
  },
  {
    "pharm_type_id": 4,
    "pharm_type_code": "014-03-01",
    "pharm_type_name": "Medication information services",
    "pharm_type_group_id": 3,
    "pharm_type_nameth": "การให้คำปรึกษาและบริการข้อมูลด้านการรักษาด้วยยาในการดูแลผู้ป่วยเฉพาะราย ",
    "pharm_type_namefull": "014-03-01 การให้คำปรึกษาและบริการข้อมูลด้านการรักษาด้วยยาในการดูแลผู้ป่วยเฉพาะราย "
  },
  {
    "pharm_type_id": 5,
    "pharm_type_code": "014-95-00",
    "pharm_type_name": "Medication counseling",
    "pharm_type_group_id": 3,
    "pharm_type_nameth": "การให้คำปรึกษาด้านยา",
    "pharm_type_namefull": "014-95-00 การให้คำปรึกษาด้านยา"
  },
  {
    "pharm_type_id": 6,
    "pharm_type_code": "014-98-00",
    "pharm_type_name": "Pharmacogenomics services",
    "pharm_type_group_id": 3,
    "pharm_type_nameth": "การให้บริการเภสัชพันธุศาสตร์",
    "pharm_type_namefull": "014-98-00 การให้บริการเภสัชพันธุศาสตร์"
  },
  {
    "pharm_type_id": 7,
    "pharm_type_code": "014-98-01",
    "pharm_type_name": "Telepharmacy services",
    "pharm_type_group_id": 3,
    "pharm_type_nameth": "การให้บริการเภสัชกรรมทางไกล",
    "pharm_type_namefull": "014-98-01 การให้บริการเภสัชกรรมทางไกล"
  },
  {
    "pharm_type_id": 8,
    "pharm_type_code": "014-98-02",
    "pharm_type_name": "Pharmacy refilled clinic",
    "pharm_type_group_id": 3,
    "pharm_type_nameth": "การให้บริการเติมยา",
    "pharm_type_namefull": "014-98-02 การให้บริการเติมยา"
  }
]
```
