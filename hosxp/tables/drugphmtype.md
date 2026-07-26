# `drugphmtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| phmtype | char(1) | YES | UNI | NULL |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| phmtype_unique | phmtype | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "phmtype": "A",
    "name": "บริษัท",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "phmtype": "B",
    "name": "โรงพยาบาลทั่วไป",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "phmtype": "C",
    "name": "โรงพยาบาลชุมชน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "phmtype": "D",
    "name": "สถานีอนามัย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "phmtype": "E",
    "name": "ร้านขายส่งยา",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "phmtype": "F",
    "name": "หน่วยงานราชการ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "phmtype": "Z",
    "name": "ไม่ทราบ",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
