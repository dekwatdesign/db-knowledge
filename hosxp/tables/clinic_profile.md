# `clinic_profile`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| clinic | char(3) | NO | PRI |  |  |  |
| icode | varchar(7) | NO | PRI |  |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| drugusage | varchar(9) | YES |  | NULL |  |  |
| sp_use | varchar(7) | YES |  | NULL |  |  |
| shortlist | varchar(50) | YES |  | NULL |  |  |
| unitprice | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| doctor | varchar(15) | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| note | varchar(250) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| clinic | clinic | no | 1 |
| hn | hn | no | 1 |
| icode | icode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | clinic | yes | 1 |
| PRIMARY | hn | yes | 2 |
| PRIMARY | icode | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "530036253",
    "clinic": "",
    "icode": "1000143",
    "qty": 60,
    "drugusage": "0263",
    "sp_use": null,
    "shortlist": null,
    "unitprice": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor": null,
    "begin_date": null,
    "end_date": null,
    "note": null,
    "update_datetime": null
  },
  {
    "hn": "530036253",
    "clinic": "",
    "icode": "3000001",
    "qty": 1,
    "drugusage": "",
    "sp_use": null,
    "shortlist": null,
    "unitprice": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor": null,
    "begin_date": null,
    "end_date": null,
    "note": null,
    "update_datetime": null
  },
  {
    "hn": "530036253",
    "clinic": "",
    "icode": "3000020",
    "qty": 1,
    "drugusage": "",
    "sp_use": null,
    "shortlist": null,
    "unitprice": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor": null,
    "begin_date": null,
    "end_date": null,
    "note": null,
    "update_datetime": null
  },
  {
    "hn": "530036253",
    "clinic": "",
    "icode": "3000037",
    "qty": 1,
    "drugusage": "",
    "sp_use": null,
    "shortlist": null,
    "unitprice": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor": null,
    "begin_date": null,
    "end_date": null,
    "note": null,
    "update_datetime": null
  },
  {
    "hn": "530044151",
    "clinic": "",
    "icode": "1000033",
    "qty": 66,
    "drugusage": "0000840",
    "sp_use": null,
    "shortlist": null,
    "unitprice": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor": null,
    "begin_date": null,
    "end_date": null,
    "note": null,
    "update_datetime": null
  },
  {
    "hn": "530044151",
    "clinic": "",
    "icode": "1000145",
    "qty": 100,
    "drugusage": "0124",
    "sp_use": null,
    "shortlist": null,
    "unitprice": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor": null,
    "begin_date": null,
    "end_date": null,
    "note": null,
    "update_datetime": null
  },
  {
    "hn": "530044151",
    "clinic": "",
    "icode": "1000153",
    "qty": 132,
    "drugusage": "0154",
    "sp_use": null,
    "shortlist": null,
    "unitprice": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor": null,
    "begin_date": null,
    "end_date": null,
    "note": null,
    "update_datetime": null
  },
  {
    "hn": "530068148",
    "clinic": "",
    "icode": "1000143",
    "qty": 45,
    "drugusage": "0116",
    "sp_use": null,
    "shortlist": null,
    "unitprice": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor": null,
    "begin_date": null,
    "end_date": null,
    "note": null,
    "update_datetime": null
  }
]
```
