# `fp_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| fp_code | tinyint(4) | NO | PRI | 0 |  |  |
| fp_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | fp_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "fp_code": 1,
    "fp_name": "ยาเม็ดคุมกำเนิด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "fp_code": 2,
    "fp_name": "ยาฉีดคุมกำเนิด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "fp_code": 3,
    "fp_name": "ยาฝังคุมกำเนิด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "fp_code": 4,
    "fp_name": "ห่วงอนามัย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "fp_code": 5,
    "fp_name": "ถุงยางอนามัย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "fp_code": 6,
    "fp_name": "ทำหมันชาย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "fp_code": 7,
    "fp_name": "ทำหมันหญิง",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
