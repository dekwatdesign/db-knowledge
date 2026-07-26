# `drugbdgtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bdgtype | char(1) | YES | UNI | NULL |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| bdgtype_unique | bdgtype | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "bdgtype": "0",
    "name": "ไม่ทราบประเภท",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "bdgtype": "1",
    "name": "เงินงบประมาณ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "bdgtype": "2",
    "name": "เงินบำรุง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "bdgtype": "3",
    "name": "งบกลาง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "bdgtype": "4",
    "name": "เงินกัน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "bdgtype": "5",
    "name": "เงินทดรองราชการ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "bdgtype": "6",
    "name": "เงินสวัสดิการ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "bdgtype": "7",
    "name": "เงินนอกงบประมาณ",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
