# `pcode`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(2) | NO | PRI |  |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| age_min | int(11) | YES |  | NULL |  |  |
| age_max | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| tph_pttype_group | varchar(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "A1",
    "name": "ชำระเงินเอง",
    "age_min": null,
    "age_max": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "tph_pttype_group": null
  },
  {
    "code": "A2",
    "name": "เบิกหน่วยงานต้นสังกัด",
    "age_min": null,
    "age_max": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "tph_pttype_group": null
  },
  {
    "code": "A3",
    "name": "สิทธิลดหย่อน ประเภท ก",
    "age_min": null,
    "age_max": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "tph_pttype_group": null
  },
  {
    "code": "A4",
    "name": "สิทธิลดหย่อน ประเภท ข",
    "age_min": null,
    "age_max": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "tph_pttype_group": null
  },
  {
    "code": "A5",
    "name": "สิทธิลดหย่อน ประเภท ค",
    "age_min": null,
    "age_max": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "tph_pttype_group": null
  },
  {
    "code": "A6",
    "name": "สิทธิลดหย่อน ประเภท ง",
    "age_min": null,
    "age_max": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "tph_pttype_group": null
  },
  {
    "code": "A7",
    "name": "ผู้ประกันตนตาม พรบ.ประกันสังคม",
    "age_min": null,
    "age_max": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "tph_pttype_group": null
  },
  {
    "code": "A8",
    "name": "กองทุนเงินทดแทน",
    "age_min": null,
    "age_max": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "tph_pttype_group": null
  }
]
```
