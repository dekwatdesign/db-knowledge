# `pttypehistory`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| expiredate | date | YES |  | NULL |  |  |
| hospmain | varchar(9) | YES |  | NULL |  |  |
| hospsub | varchar(9) | YES |  | NULL |  |  |
| pttype | varchar(10) | NO | PRI |  |  |  |
| pttypeno | varchar(50) | NO | PRI |  |  |  |
| begindate | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |
| PRIMARY | pttype | yes | 2 |
| PRIMARY | pttypeno | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "360112536",
    "expiredate": "2012-02-24",
    "hospmain": "",
    "hospsub": "",
    "pttype": "10",
    "pttypeno": "",
    "begindate": "1990-01-01",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "470000013",
    "expiredate": "1958-01-01",
    "hospmain": "",
    "hospsub": "",
    "pttype": "10",
    "pttypeno": "",
    "begindate": "1990-01-01",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000149",
    "expiredate": "1990-01-01",
    "hospmain": "12251",
    "hospsub": "12251",
    "pttype": "10",
    "pttypeno": "",
    "begindate": "1990-01-01",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000152",
    "expiredate": "1990-01-01",
    "hospmain": "",
    "hospsub": "",
    "pttype": "10",
    "pttypeno": "",
    "begindate": "1990-01-01",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000152",
    "expiredate": "2011-10-09",
    "hospmain": "12251",
    "hospsub": "12251",
    "pttype": "74",
    "pttypeno": "",
    "begindate": "1990-01-01",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000152",
    "expiredate": "2011-12-20",
    "hospmain": "10755",
    "hospsub": "00979",
    "pttype": "74",
    "pttypeno": "7174630904",
    "begindate": "1990-01-01",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000152",
    "expiredate": "2011-12-20",
    "hospmain": "10685",
    "hospsub": "00937",
    "pttype": "74",
    "pttypeno": "7466205210",
    "begindate": "1990-01-01",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000152",
    "expiredate": null,
    "hospmain": "10685",
    "hospsub": "00937",
    "pttype": "74",
    "pttypeno": "ท7466205210",
    "begindate": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
