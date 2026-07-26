# `provis_fptype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(1) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "0",
    "name": "ไม่ได้คุม",
    "hos_guid": null
  },
  {
    "code": "1",
    "name": "ยาเม็ด",
    "hos_guid": null
  },
  {
    "code": "2",
    "name": "ยาฉีด",
    "hos_guid": null
  },
  {
    "code": "3",
    "name": "ห่วงอนามัย",
    "hos_guid": null
  },
  {
    "code": "4",
    "name": "ยาฝัง",
    "hos_guid": null
  },
  {
    "code": "5",
    "name": "ถุงยางอนามัย",
    "hos_guid": null
  },
  {
    "code": "6",
    "name": "หมันชาย",
    "hos_guid": null
  },
  {
    "code": "7",
    "name": "หมันหญิง",
    "hos_guid": null
  }
]
```
