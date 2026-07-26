# `dw_report_subtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dw_report_subtype_id | int(11) | NO | PRI | 0 |  |  |
| dw_report_subtype_name | varchar(200) | YES | UNI | NULL |  |  |
| dw_report_type_id | int(11) | YES |  | NULL |  |  |
| dw_report_subtype_description | longtext | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dw_report_subtype_name | dw_report_subtype_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dw_report_subtype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dw_report_subtype_id": 1,
    "dw_report_subtype_name": "gov1",
    "dw_report_type_id": 1,
    "dw_report_subtype_description": "1.ข้าราชการ / รัฐวิสาหกิจ / เบิกต้นสังกัด   หมายถึง ผู้มาใช้บริการที่มีสิทธิสวัสดิการค่ารักษาพยาบาลที่มีลักษณะของการเบิกจ่ายจากต้นสังกัด  เช่น    ข้าราชการ  รัฐวิสาหกิจ หน่วยงานบริหารราชการส่วนท้องถิ่น  ลูกจ้างประจำ พนักงานของรัฐ บิดา มารดา คู่สมรส และบุตร  รวมทั้งที่มีสิทธิตามความครอบคลุมของสวัสดิการแต่ละแบบ  ",
    "hos_guid": null
  },
  {
    "dw_report_subtype_id": 2,
    "dw_report_subtype_name": "pks1",
    "dw_report_type_id": 1,
    "dw_report_subtype_description": null,
    "hos_guid": null
  },
  {
    "dw_report_subtype_id": 3,
    "dw_report_subtype_name": "uc1",
    "dw_report_type_id": 1,
    "dw_report_subtype_description": null,
    "hos_guid": null
  },
  {
    "dw_report_subtype_id": 4,
    "dw_report_subtype_name": "uct1",
    "dw_report_type_id": 1,
    "dw_report_subtype_description": null,
    "hos_guid": null
  },
  {
    "dw_report_subtype_id": 5,
    "dw_report_subtype_name": "onat1",
    "dw_report_type_id": 1,
    "dw_report_subtype_description": null,
    "hos_guid": null
  },
  {
    "dw_report_subtype_id": 6,
    "dw_report_subtype_name": "other1",
    "dw_report_type_id": 1,
    "dw_report_subtype_description": null,
    "hos_guid": null
  },
  {
    "dw_report_subtype_id": 7,
    "dw_report_subtype_name": "sum1",
    "dw_report_type_id": 1,
    "dw_report_subtype_description": null,
    "hos_guid": null
  },
  {
    "dw_report_subtype_id": 8,
    "dw_report_subtype_name": "pks2",
    "dw_report_type_id": 1,
    "dw_report_subtype_description": null,
    "hos_guid": null
  }
]
```
