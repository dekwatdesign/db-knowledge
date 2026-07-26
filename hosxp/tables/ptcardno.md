# `ptcardno`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| cardtype | char(2) | NO | PRI |  |  |  |
| cardno | varchar(20) | YES | MUL | NULL |  |  |
| expiredate | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| cardtype | cardtype | no | 1 |
| hn | hn | no | 1 |
| ix_cardno | cardno | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |
| PRIMARY | cardtype | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "470000013",
    "cardtype": "01",
    "cardno": "1-xxxx-xxxxx-xx-x",
    "expiredate": "2026-04-24",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "53 161754",
    "cardtype": "01",
    "cardno": "1-xxxx-xxxxx-xx-x",
    "expiredate": "2016-03-29",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000149",
    "cardtype": "01",
    "cardno": "1-xxxx-xxxxx-xx-x",
    "expiredate": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000152",
    "cardtype": "01",
    "cardno": "1-xxxx-xxxxx-xx-x",
    "expiredate": "2027-01-30",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000153",
    "cardtype": "01",
    "cardno": "1-xxxx-xxxxx-xx-x",
    "expiredate": "2016-09-20",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000154",
    "cardtype": "01",
    "cardno": "1-xxxx-xxxxx-xx-x",
    "expiredate": "2016-04-16",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000243",
    "cardtype": "01",
    "cardno": "1-xxxx-xxxxx-xx-x",
    "expiredate": "2017-03-12",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530000245",
    "cardtype": "01",
    "cardno": "1-xxxx-xxxxx-xx-x",
    "expiredate": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
