# `oapp_contact`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(250) | NO | PRI |  |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "name": "เคาน์เตอร์หน้าห้องตรวจ 1",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "เคาน์เตอร์หน้าห้องตรวจ 2",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "จุดคัดกรองฉีดวัคซีน covid-19",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "จุดรับยาเดิม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "โต๊ะคัดกรอง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "ร้านยา คลังยาสมุทรปราการ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "ร้านยา ต้นน้ำฟาร์มาเชน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "ร้านยา เทสโก้โลตัส ฟาร์มาซี สาขาบางปู",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
