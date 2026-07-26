# `billbookreg`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| reg_id | int(11) | NO | PRI | 0 |  |  |
| billbook | varchar(50) | YES | UNI | NULL |  |  |
| endnumber | int(11) | YES | MUL | NULL |  |  |
| receiver | varchar(100) | YES |  | NULL |  |  |
| regdate | datetime | YES |  | NULL |  |  |
| startnumber | int(11) | YES | MUL | NULL |  |  |
| status_active | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| billbook_unique | billbook | yes | 1 |
| endnumber | endnumber | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_startnumber_endnumber | billbook | no | 1 |
| ix_startnumber_endnumber | endnumber | no | 2 |
| ix_startnumber_endnumber | startnumber | no | 3 |
| PRIMARY | reg_id | yes | 1 |
| startnumber | startnumber | no | 1 |
| startnumber_endnumber | startnumber | no | 1 |
| startnumber_endnumber | endnumber | no | 2 |
| startnumber_endnumber | billbook | no | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "reg_id": 2,
    "billbook": "0004",
    "endnumber": 100,
    "receiver": "[MASKED_FULLNAME]",
    "regdate": "2017-03-13 00:00:00",
    "startnumber": 14,
    "status_active": "Y",
    "hos_guid": null
  },
  {
    "reg_id": 3,
    "billbook": "0005",
    "endnumber": 100,
    "receiver": "[MASKED_FULLNAME]",
    "regdate": "2017-03-14 00:00:00",
    "startnumber": 1,
    "status_active": "Y",
    "hos_guid": null
  },
  {
    "reg_id": 4,
    "billbook": "0006",
    "endnumber": 100,
    "receiver": "[MASKED_FULLNAME]",
    "regdate": "2017-03-16 00:00:00",
    "startnumber": 1,
    "status_active": "Y",
    "hos_guid": null
  },
  {
    "reg_id": 5,
    "billbook": "0007",
    "endnumber": 100,
    "receiver": "[MASKED_FULLNAME]",
    "regdate": "2017-03-21 00:00:00",
    "startnumber": 1,
    "status_active": "Y",
    "hos_guid": null
  },
  {
    "reg_id": 6,
    "billbook": "0008",
    "endnumber": 100,
    "receiver": "[MASKED_FULLNAME]",
    "regdate": "2017-03-22 00:00:00",
    "startnumber": 1,
    "status_active": "Y",
    "hos_guid": null
  },
  {
    "reg_id": 7,
    "billbook": "0009",
    "endnumber": 100,
    "receiver": "[MASKED_FULLNAME]",
    "regdate": "2017-03-28 00:00:00",
    "startnumber": 1,
    "status_active": "Y",
    "hos_guid": null
  },
  {
    "reg_id": 8,
    "billbook": "0010",
    "endnumber": 100,
    "receiver": "[MASKED_FULLNAME]",
    "regdate": "2017-03-31 00:00:00",
    "startnumber": 1,
    "status_active": "Y",
    "hos_guid": null
  },
  {
    "reg_id": 9,
    "billbook": "0011",
    "endnumber": 100,
    "receiver": "[MASKED_FULLNAME]",
    "regdate": "2017-04-04 00:00:00",
    "startnumber": 1,
    "status_active": "Y",
    "hos_guid": null
  }
]
```
