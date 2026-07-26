# `drugdepartment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| phmdlr | char(3) | YES | UNI | NULL |  |  |
| phmname | varchar(250) | YES |  | NULL |  |  |
| phmtype | char(1) | YES |  | NULL |  |  |
| recpcode | varchar(4) | YES |  | NULL |  |  |
| contact | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| phmdlr_unique | phmdlr | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "phmdlr": "000",
    "phmname": "U.S Summit",
    "phmtype": "Z",
    "recpcode": null,
    "contact": "3770086-7   3779551-2  Fax. 377-9553    Tel. 01-3204504",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "phmdlr": "001",
    "phmname": "Siam Pharmaceutical",
    "phmtype": "A",
    "recpcode": null,
    "contact": "02-6900360-8",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "phmdlr": "002",
    "phmname": "องค์การเภสัชกรรม",
    "phmtype": "B",
    "recpcode": null,
    "contact": "274-3030  274-3500-16  Fax. (02) 245-4480     Tel. 01-8554915",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "phmdlr": "003",
    "phmname": "ส.เจริญเภสัช trading",
    "phmtype": "A",
    "recpcode": null,
    "contact": "0-2675-8470-3  Tel. 0-1564-8505",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "phmdlr": "004",
    "phmname": "BEMED PHARMACEUTICALS",
    "phmtype": "A",
    "recpcode": null,
    "contact": "427-3938   428-3580   Tel.   09-8404200",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "phmdlr": "005",
    "phmname": "Berlin",
    "phmtype": "A",
    "recpcode": null,
    "contact": "02-2231011-2/02-2233865",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "phmdlr": "006",
    "phmname": "สีลมการแพทย์",
    "phmtype": "A",
    "recpcode": null,
    "contact": "02-951-8001-11  Free. 088 2 58909  Fax Free. 088 2 58909  Tel. 01-8394611",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "phmdlr": "007",
    "phmname": "Biopharm",
    "phmtype": "A",
    "recpcode": null,
    "contact": "02-2580575-7  2590990-7  Free. 088-226015-16  Tel. 01-2616483",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
