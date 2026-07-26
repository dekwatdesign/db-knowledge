# `pttypeno`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| expiredate | date | YES |  | NULL |  |  |
| pttype | char(2) | NO | PRI |  |  |  |
| pttypeno | varchar(20) | YES |  | NULL |  |  |
| begindate | date | YES |  | NULL |  |  |
| hospmain | varchar(9) | YES |  | NULL |  |  |
| hospsub | varchar(9) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |
| PRIMARY | pttype | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "0000002",
    "expiredate": "2006-09-01",
    "pttype": "10",
    "pttypeno": "",
    "begindate": "1990-01-01",
    "hospmain": "",
    "hospsub": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "470000013",
    "expiredate": null,
    "pttype": "10",
    "pttypeno": "",
    "begindate": null,
    "hospmain": "",
    "hospsub": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "4900001",
    "expiredate": "2006-09-02",
    "pttype": "10",
    "pttypeno": "",
    "begindate": "1990-01-01",
    "hospmain": "",
    "hospsub": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "53 161754",
    "expiredate": "2011-11-25",
    "pttype": "10",
    "pttypeno": "",
    "begindate": "1990-01-01",
    "hospmain": "",
    "hospsub": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000152",
    "expiredate": null,
    "pttype": "74",
    "pttypeno": "ท7466205210",
    "begindate": null,
    "hospmain": "10685",
    "hospsub": "00937",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000153",
    "expiredate": "1990-01-01",
    "pttype": "11",
    "pttypeno": "B71100002465562",
    "begindate": "2012-03-15",
    "hospmain": "11552",
    "hospsub": "23849",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000154",
    "expiredate": "2011-12-12",
    "pttype": "10",
    "pttypeno": "",
    "begindate": "1990-01-01",
    "hospmain": "",
    "hospsub": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000243",
    "expiredate": "2012-11-10",
    "pttype": "01",
    "pttypeno": "1-xxxx-xxxxx-xx-x",
    "begindate": "2012-07-16",
    "hospmain": "14591",
    "hospsub": "",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
