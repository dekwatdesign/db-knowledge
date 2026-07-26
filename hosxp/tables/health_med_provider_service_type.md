# `health_med_provider_service_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_provider_service_type_id | int(11) | NO | PRI | 0 |  |  |
| health_med_provider_service_type_name | varchar(150) | YES | UNI | NULL |  |  |
| health_med_provider_service_type_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_provider_service_type_name | health_med_provider_service_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_provider_service_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "health_med_provider_service_type_id": 1,
    "health_med_provider_service_type_name": "การรักษาด้วยยาสมุนไพร",
    "health_med_provider_service_type_code": "A",
    "hos_guid": null
  },
  {
    "health_med_provider_service_type_id": 2,
    "health_med_provider_service_type_name": "การนวดเพื่อรักษา/ฟื้นฟูสภาพ",
    "health_med_provider_service_type_code": "B",
    "hos_guid": null
  },
  {
    "health_med_provider_service_type_id": 3,
    "health_med_provider_service_type_name": "การอบไอน้ำสมุนไพรเพื่อรักษา/ฟื้นฟูสภาพ",
    "health_med_provider_service_type_code": "C",
    "hos_guid": null
  },
  {
    "health_med_provider_service_type_id": 4,
    "health_med_provider_service_type_name": "การประคบสมุนไพรเพื่อรักษา/ฟื้นฟูสภาพ",
    "health_med_provider_service_type_code": "D",
    "hos_guid": null
  },
  {
    "health_med_provider_service_type_id": 5,
    "health_med_provider_service_type_name": "การให้คำแนะนำการสอน สาธิต ด้านการแพทย์แผนไทย",
    "health_med_provider_service_type_code": "E",
    "hos_guid": null
  },
  {
    "health_med_provider_service_type_id": 6,
    "health_med_provider_service_type_name": "การฝึกสมาธิบำบัด",
    "health_med_provider_service_type_code": "F",
    "hos_guid": null
  },
  {
    "health_med_provider_service_type_id": 7,
    "health_med_provider_service_type_name": "การฝึกอบรมหลักสูตรด้านการแพทย์แผนไทย",
    "health_med_provider_service_type_code": "G",
    "hos_guid": null
  },
  {
    "health_med_provider_service_type_id": 8,
    "health_med_provider_service_type_name": "การนวดเพื่อส่งเสริมสุขภาพ",
    "health_med_provider_service_type_code": "H",
    "hos_guid": null
  }
]
```
