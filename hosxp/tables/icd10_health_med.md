# `icd10_health_med`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icd10 | varchar(9) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | icd10 | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "icd10": "U50",
    "name": "ความผิดปกติของสตรีตั้งครรภ์และหลังคลอด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10": "U500",
    "name": "แพ้ท้อง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10": "U501",
    "name": "สตรีหลังคลอดบุตรโลหิตแห้งไป",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10": "U502",
    "name": "สตรีหลังคลอดน้ำคาวปลาไม่เดิน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10": "U503",
    "name": "สตรีหลังคลอดอยู่ไฟไม่ได้",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10": "U504",
    "name": "สตรีหลังคลอดมีน้ำนมน้อย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10": "U505",
    "name": "สตรีหลังคลอดไม่มีน้ำนม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icd10": "U508",
    "name": "ความผิดปกติชนิดอื่นของสตรีตั้งครรภ์และหลังคลอด  ที่ระบุรายละเอียด",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
