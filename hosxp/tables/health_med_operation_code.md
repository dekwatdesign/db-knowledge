# `health_med_operation_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(9) | NO | PRI |  |  |  |
| name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| icd10tm | varchar(15) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "100-77-00",
    "name": "การบริบาลหญิงตั้งครรภ์ด้วยการนวดที่ศีรษะ",
    "hos_guid": null,
    "icd10tm": null,
    "hos_guid_ext": null
  },
  {
    "code": "100-77-01",
    "name": "การบริบาลหญิงตั้งครรภ์ด้วยการประคบที่ศีรษะ",
    "hos_guid": null,
    "icd10tm": null,
    "hos_guid_ext": null
  },
  {
    "code": "100-77-08",
    "name": "การบริบาลหญิงตั้งครรภ์ด้วยวิธีอื่นที่ศีรษะ",
    "hos_guid": null,
    "icd10tm": null,
    "hos_guid_ext": null
  },
  {
    "code": "100-77-09",
    "name": "การบริบาลหญิงตั้งครรภ์ ไม่ระบุวิธีที่ศีรษะ",
    "hos_guid": null,
    "icd10tm": null,
    "hos_guid_ext": null
  },
  {
    "code": "100-77-10",
    "name": "การบริบาลหญิงหลังคลอดด้วยการใช้ยาสมุนไพรที่ศีรษะ",
    "hos_guid": null,
    "icd10tm": null,
    "hos_guid_ext": null
  },
  {
    "code": "100-77-13",
    "name": "การบริบาลหญิงหลังคลอดด้วยการนวดที่ศีรษะ",
    "hos_guid": null,
    "icd10tm": null,
    "hos_guid_ext": null
  },
  {
    "code": "100-77-14",
    "name": "การบริบาลหญิงหลังคลอดด้วยการประคบสมุนไพรที่ศีรษะ",
    "hos_guid": null,
    "icd10tm": null,
    "hos_guid_ext": null
  },
  {
    "code": "100-77-48",
    "name": "การบริบาลหญิงหลังคลอดด้วยวิธีอื่นที่ศีรษะ",
    "hos_guid": null,
    "icd10tm": null,
    "hos_guid_ext": null
  }
]
```
