# `ovst_icf_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_icf_type_id | int(11) | NO | PRI | 0 |  |  |
| ovst_icf_type_name | varchar(200) | YES | UNI | NULL |  |  |
| export_code | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ovst_icf_type_name | ovst_icf_type_name | yes | 1 |
| PRIMARY | ovst_icf_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_icf_type_id": 1,
    "ovst_icf_type_name": "การทำงานด้านสติปัญญาไม่มีความบกพร่อง:  ระดับสติปัญญา 70 หรือสูงกว่า (NO)",
    "export_code": "b117.0",
    "hos_guid": null
  },
  {
    "ovst_icf_type_id": 2,
    "ovst_icf_type_name": "การทำงานด้านสติปัญญามีความบกพร่องเล็กน้อย:  ระดับสติปัญญา 50 - 69 (MILD)",
    "export_code": "b117.1",
    "hos_guid": null
  },
  {
    "ovst_icf_type_id": 3,
    "ovst_icf_type_name": "การทำงานด้านสติปัญญามีความบกพร่องปานกลาง:  ระดับสติปัญญา 35 - 49  (MODERATE)",
    "export_code": "b117.2",
    "hos_guid": null
  },
  {
    "ovst_icf_type_id": 4,
    "ovst_icf_type_name": "การทำงานด้านสติปัญญามีความบกพร่องรุนแรง:  ระดับสติปัญญา 20 ? 34  (SEVERE)",
    "export_code": "b117.3",
    "hos_guid": null
  },
  {
    "ovst_icf_type_id": 5,
    "ovst_icf_type_name": "การทำงานด้านสติปัญญามีความบกพร่องทั้งหมด:  ระดับสติปัญญาต่ำกว่า 20  (COMPLETE)",
    "export_code": "b117.4",
    "hos_guid": null
  },
  {
    "ovst_icf_type_id": 6,
    "ovst_icf_type_name": "การทำงานด้านสติปัญญามีความบกพร่องที่ไม่ระบุรายละเอียด  (Not specified)",
    "export_code": "b117.8",
    "hos_guid": null
  },
  {
    "ovst_icf_type_id": 7,
    "ovst_icf_type_name": "การทำงานด้านสติปัญญาไม่เกี่ยวข้อง  (Not applicable)",
    "export_code": "b117.9",
    "hos_guid": null
  },
  {
    "ovst_icf_type_id": 8,
    "ovst_icf_type_name": "การทำงานด้านความสนใจไม่มีความบกพร่อง:  ไม่มีปัญหาด้านสมาธิและความตั้งใจทำงาน(NO:  0 ? 4 %)",
    "export_code": "b140.0",
    "hos_guid": null
  }
]
```
