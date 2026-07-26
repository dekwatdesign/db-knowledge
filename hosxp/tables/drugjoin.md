# `drugjoin`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | char(7) | YES |  | NULL |  |  |
| bdgyear | date | YES | MUL | NULL |  |  |
| startdate | date | YES |  | NULL |  |  |
| enddate | date | YES |  | NULL |  |  |
| price | double(22,3) | YES |  | NULL |  |  |
| phmdlr | char(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| bdgyear_icode | bdgyear | no | 1 |
| bdgyear_icode | icode | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "icode": "1440810",
    "bdgyear": "2002-01-01",
    "startdate": null,
    "enddate": null,
    "price": 20.325,
    "phmdlr": "041",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1440771",
    "bdgyear": "2002-01-01",
    "startdate": null,
    "enddate": null,
    "price": 4125.02,
    "phmdlr": "000",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
