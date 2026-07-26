# `ipt_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| rx_date | date | NO | PRI | 0000-00-00 |  |  |
| rx_queue | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |
| PRIMARY | rx_date | yes | 2 |
| rx_date | rx_date | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "an": "540000786",
    "rx_date": "2011-10-13",
    "rx_queue": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000786",
    "rx_date": "2011-10-26",
    "rx_queue": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000787",
    "rx_date": "2011-10-13",
    "rx_queue": 2,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000787",
    "rx_date": "2011-10-14",
    "rx_queue": 3,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000787",
    "rx_date": "2011-10-26",
    "rx_queue": 2,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000788",
    "rx_date": "2011-10-13",
    "rx_queue": 5,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000788",
    "rx_date": "2011-10-14",
    "rx_queue": 4,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000788",
    "rx_date": "2011-10-25",
    "rx_queue": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
