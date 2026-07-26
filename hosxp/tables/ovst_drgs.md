# `ovst_drgs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| drg | varchar(10) | YES |  | NULL |  |  |
| rw | double(15,5) | YES |  | NULL |  |  |
| los | double(15,3) | YES |  | NULL |  |  |
| ot | double(15,3) | YES |  | NULL |  |  |
| res | varchar(10) | YES |  | NULL |  |  |
| adjrw | double(15,3) | YES |  | NULL |  |  |
| mdc | varchar(10) | YES |  | NULL |  |  |
| err | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "541013060000",
    "drg": "",
    "rw": 0.0,
    "los": 0.0,
    "ot": 0.0,
    "res": "",
    "adjrw": 0.0,
    "mdc": "",
    "err": 0,
    "hos_guid": null
  },
  {
    "vn": "541013135510",
    "drg": "26509",
    "rw": 0.0,
    "los": 0.0,
    "ot": 0.0,
    "res": "",
    "adjrw": 0.0,
    "mdc": "26",
    "err": 0,
    "hos_guid": null
  },
  {
    "vn": "541014082901",
    "drg": "",
    "rw": 0.0,
    "los": 0.0,
    "ot": 0.0,
    "res": "",
    "adjrw": 0.0,
    "mdc": "",
    "err": 0,
    "hos_guid": null
  },
  {
    "vn": "541017095245",
    "drg": "",
    "rw": 0.0,
    "los": 0.0,
    "ot": 0.0,
    "res": "",
    "adjrw": 0.0,
    "mdc": "",
    "err": 0,
    "hos_guid": null
  },
  {
    "vn": "541021060011",
    "drg": "26509",
    "rw": 0.0,
    "los": 0.0,
    "ot": 0.0,
    "res": "",
    "adjrw": 0.0,
    "mdc": "26",
    "err": 0,
    "hos_guid": null
  },
  {
    "vn": "541021060037",
    "drg": "26509",
    "rw": 0.0,
    "los": 0.0,
    "ot": 0.0,
    "res": "2",
    "adjrw": 0.0,
    "mdc": "26",
    "err": 1,
    "hos_guid": null
  },
  {
    "vn": "541026091840",
    "drg": "",
    "rw": 0.0,
    "los": 0.0,
    "ot": 0.0,
    "res": "",
    "adjrw": 0.0,
    "mdc": "",
    "err": 0,
    "hos_guid": null
  },
  {
    "vn": "541026130005",
    "drg": "26509",
    "rw": 0.0,
    "los": 0.0,
    "ot": 0.0,
    "res": "2",
    "adjrw": 0.0,
    "mdc": "26",
    "err": 1,
    "hos_guid": null
  }
]
```
