# `provider_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provider_type_code | varchar(3) | NO | PRI |  |  |  |
| provider_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_provider_type_name | provider_type_name | yes | 1 |
| PRIMARY | provider_type_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "provider_type_code": "01",
    "provider_type_name": "แพทย์",
    "hos_guid": "",
    "hos_guid_ext": ""
  },
  {
    "provider_type_code": "011",
    "provider_type_name": "แพทย์เวชศาสตร์ครอบครัว (Family Medicine: FM)",
    "hos_guid": "",
    "hos_guid_ext": ""
  },
  {
    "provider_type_code": "02",
    "provider_type_name": "ทันตแพทย์",
    "hos_guid": "",
    "hos_guid_ext": ""
  },
  {
    "provider_type_code": "03",
    "provider_type_name": "พยาบาลวิชาชีพ (ที่ทำหน้าที่ตรวจรักษา)",
    "hos_guid": "",
    "hos_guid_ext": ""
  },
  {
    "provider_type_code": "04",
    "provider_type_name": "เจ้าพนักงานสาธารณสุขชุมชน",
    "hos_guid": "",
    "hos_guid_ext": ""
  },
  {
    "provider_type_code": "05",
    "provider_type_name": "นักวิชาการสาธารณสุข",
    "hos_guid": "",
    "hos_guid_ext": ""
  },
  {
    "provider_type_code": "06",
    "provider_type_name": "ทันตาภิบาล ",
    "hos_guid": "",
    "hos_guid_ext": ""
  },
  {
    "provider_type_code": "07",
    "provider_type_name": "อสม. (ผู้ให้บริการชุมชน)",
    "hos_guid": "",
    "hos_guid_ext": ""
  }
]
```
