# `drugrecipient`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| recpcode | varchar(4) | YES | UNI | NULL |  |  |
| recipient | varchar(45) | YES |  | NULL |  |  |
| recptype | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| recpcode_unique | recpcode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "recpcode": "C001",
    "recipient": "แผนกห้องคลอด",
    "recptype": "C",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "recpcode": "C002",
    "recipient": "แผนกทันตกรรม",
    "recptype": "C",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "recpcode": "C003",
    "recipient": "แผนกส่งเสริมสุขภาพ",
    "recptype": "C",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "recpcode": "C004",
    "recipient": "แผนกบริหาร",
    "recptype": "C",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "recpcode": "C005",
    "recipient": "แผนกสุขาภิบาล",
    "recptype": "C",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "recpcode": "C006",
    "recipient": "แผนกงานซ่อมบำรุง",
    "recptype": "C",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "recpcode": "C007",
    "recipient": "แผนกผู้ป่วยใน",
    "recptype": "C",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "recpcode": "D000",
    "recipient": "ไม่ทราบแผนก",
    "recptype": "C",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
