# `pttype_std_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_std_code | char(4) | NO | PRI |  |  |  |
| pttype_std_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_pttype_std_name | pttype_std_name | yes | 1 |
| PRIMARY | pttype_std_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pttype_std_code": "0100",
    "pttype_std_name": "หลักประกันสุขภาพ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pttype_std_code": "1100",
    "pttype_std_name": "ข้าราชการประจำ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pttype_std_code": "1200",
    "pttype_std_name": "ข้าราชการบำนาญ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pttype_std_code": "1300",
    "pttype_std_name": "ลูกจ้างประจำ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pttype_std_code": "1400",
    "pttype_std_name": "ลูกจ้างประจำบำนาญ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pttype_std_code": "1900",
    "pttype_std_name": "ข้าราชการการเมือง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pttype_std_code": "2101",
    "pttype_std_name": "ข้าราชการประจำกรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "pttype_std_code": "2102",
    "pttype_std_name": "ข้าราชการบำนาญกรุงเทพมหานคร",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
