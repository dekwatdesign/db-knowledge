# `pname`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(100) | NO | PRI |  |  |  |
| class | int(11) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| provis_code | varchar(5) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| min_age | int(11) | YES |  | NULL |  |  |
| marrystatus | char(1) | YES |  | NULL |  |  |
| ename | varchar(100) | YES |  | NULL |  |  |

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
    "name": "BOY",
    "class": 68,
    "sex": "1",
    "provis_code": "068",
    "hos_guid": null,
    "hos_guid_ext": null,
    "min_age": null,
    "marrystatus": null,
    "ename": null
  },
  {
    "name": "GIRL",
    "class": 69,
    "sex": "2",
    "provis_code": "069",
    "hos_guid": null,
    "hos_guid_ext": null,
    "min_age": null,
    "marrystatus": null,
    "ename": null
  },
  {
    "name": "MISS",
    "class": 70,
    "sex": "2",
    "provis_code": "070",
    "hos_guid": null,
    "hos_guid_ext": null,
    "min_age": null,
    "marrystatus": null,
    "ename": null
  },
  {
    "name": "MR.",
    "class": 71,
    "sex": "1",
    "provis_code": "071",
    "hos_guid": null,
    "hos_guid_ext": null,
    "min_age": null,
    "marrystatus": null,
    "ename": null
  },
  {
    "name": "MRS.",
    "class": 72,
    "sex": "2",
    "provis_code": "072",
    "hos_guid": null,
    "hos_guid_ext": null,
    "min_age": null,
    "marrystatus": null,
    "ename": null
  },
  {
    "name": "MS.",
    "class": 73,
    "sex": "2",
    "provis_code": "073",
    "hos_guid": null,
    "hos_guid_ext": null,
    "min_age": null,
    "marrystatus": null,
    "ename": null
  },
  {
    "name": "ขุน",
    "class": 125,
    "sex": "1",
    "provis_code": "125",
    "hos_guid": null,
    "hos_guid_ext": null,
    "min_age": null,
    "marrystatus": null,
    "ename": null
  },
  {
    "name": "คุณ",
    "class": 129,
    "sex": "1",
    "provis_code": "129",
    "hos_guid": null,
    "hos_guid_ext": null,
    "min_age": null,
    "marrystatus": null,
    "ename": null
  }
]
```
