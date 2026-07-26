# `sks_benefit_plan_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sks_benefit_plan_type_id | int(11) | NO | PRI | 0 |  |  |
| sks_benefit_plan_type_name | varchar(200) | YES | UNI | NULL |  |  |
| sks_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| cipn_instype_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sks_benefit_plan_type_name | sks_benefit_plan_type_name | yes | 1 |
| PRIMARY | sks_benefit_plan_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sks_benefit_plan_type_id": 1,
    "sks_benefit_plan_type_name": "ไม่มีประกันสุขภาพ",
    "sks_code": "NB",
    "hos_guid": null,
    "cipn_instype_code": null
  },
  {
    "sks_benefit_plan_type_id": 2,
    "sks_benefit_plan_type_name": "สวัสดิการข้าราชการ",
    "sks_code": "CS",
    "hos_guid": null,
    "cipn_instype_code": null
  },
  {
    "sks_benefit_plan_type_id": 3,
    "sks_benefit_plan_type_name": "หลักประกันสุขภาพแห่งชาติ",
    "sks_code": "UC",
    "hos_guid": null,
    "cipn_instype_code": null
  },
  {
    "sks_benefit_plan_type_id": 4,
    "sks_benefit_plan_type_name": "ประกันสังคม",
    "sks_code": "SS",
    "hos_guid": null,
    "cipn_instype_code": null
  },
  {
    "sks_benefit_plan_type_id": 5,
    "sks_benefit_plan_type_name": "องค์กรรัฐอื่น",
    "sks_code": "GO",
    "hos_guid": null,
    "cipn_instype_code": null
  },
  {
    "sks_benefit_plan_type_id": 6,
    "sks_benefit_plan_type_name": "รัฐวิสาหกิจ",
    "sks_code": "GE",
    "hos_guid": null,
    "cipn_instype_code": null
  },
  {
    "sks_benefit_plan_type_id": 7,
    "sks_benefit_plan_type_name": "พ.ร.บ. ผู้ประสบภัยจากรถ",
    "sks_code": "RT",
    "hos_guid": null,
    "cipn_instype_code": null
  },
  {
    "sks_benefit_plan_type_id": 8,
    "sks_benefit_plan_type_name": "ประกันชีวิตส่วนบุคคล",
    "sks_code": "PI",
    "hos_guid": null,
    "cipn_instype_code": null
  }
]
```
