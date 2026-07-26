# `pcu_spclty`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| spclty | varchar(4) | NO | PRI |  |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |
| nhso_code | char(2) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | spclty | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "spclty": "01",
    "name": "ตรวจโรคทั่วไป",
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "spclty": "03",
    "name": "โรคเรื้อรัง",
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "spclty": "09",
    "name": "จิตเวช",
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "spclty": "11",
    "name": "ทันตกรรม",
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "spclty": "12",
    "name": "อนามัยมารดา",
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "spclty": "13",
    "name": "อนามัยเด็กดี",
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "spclty": "14",
    "name": "วางแผนครอบครัว",
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "spclty": "15",
    "name": "อื่น ๆ",
    "nhso_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
