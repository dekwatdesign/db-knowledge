# `fpspclty`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(2) | NO | PRI |  |  |  |
| icd10 | varchar(7) | YES |  | NULL |  |  |
| name | varchar(150) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| name | name | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "code": "01",
    "icd10": "Z304",
    "name": "ยาเม็ดคุมกำเนิด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "02",
    "icd10": "Z309",
    "name": "ยาฉีดคุมกำเนิด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "03",
    "icd10": "Z301",
    "name": "ห่วงอนามัย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "04",
    "icd10": "Z309",
    "name": "ยาฝังคุมกำเนิด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "05",
    "icd10": "Z302",
    "name": "ทำหมันหญิง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "06",
    "icd10": "Z302",
    "name": "ทำหมันชาย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "07",
    "icd10": "Z309",
    "name": "ถุงยางอนามัย",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
