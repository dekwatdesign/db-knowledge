# `icd10tm_operation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icd10tm_operation_code | varchar(7) | NO | PRI |  |  |  |
| description_english | varchar(250) | YES |  | NULL |  |  |
| description_thai | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | icd10tm_operation_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "icd10tm_operation_code": "0010000",
    "description_english": "First Outpatient Care",
    "description_thai": "การตรวจรักษากรณีผู้ป่วยนอก ครั้งแรก",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10tm_operation_code": "0020000",
    "description_english": "Follow up Outpatient Care for the Same Illness",
    "description_thai": "การตรวจรักษากรณีผู้ป่วยนอก ครั้งต่อไป สำหรับปัญหาเดียวกัน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10tm_operation_code": "0030000",
    "description_english": "Regular Follow Up Outpatient Care for a Chronic Condition",
    "description_thai": "การตรวจรักษากรณีผู้ป่วยนอก ครั้งต่อไป สำหรับปัญหาเรื้อรัง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10tm_operation_code": "0040000",
    "description_english": "Emergency Outpatient Care",
    "description_thai": "การตรวจรักษาผู้ป่วยนอก กรณีฉุกเฉินทั่วไป",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10tm_operation_code": "0120000",
    "description_english": "Checkups",
    "description_thai": "การตรวจสุขภาพต่าง ๆ อาทิ เพื่อประเมินทั่วไป เพื่อการสมัครงานและเพื่อการประกันชีวิต",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10tm_operation_code": "0130000",
    "description_english": "Home visit",
    "description_thai": "การตรวจประเมินผู้ป่วยที่บ้าน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10tm_operation_code": "1007700",
    "description_english": "การบริบาลหญิงตั้งครรภ์ด้วยการนวด ที่ศีรษะ",
    "description_thai": "การบริบาลหญิงตั้งครรภ์ด้วยการนวด ที่ศีรษะ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10tm_operation_code": "1007701",
    "description_english": "การบริบาลหญิงตั้งครรภ์ด้วยการประคบ ที่ศีรษะ",
    "description_thai": "การบริบาลหญิงตั้งครรภ์ด้วยการประคบ ที่ศีรษะ",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
