# `ipd_data_synchronize`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| hn_guid | varchar(38) | YES | MUL | NULL |  |  |
| an_guid | varchar(38) | YES | MUL | NULL |  |  |
| cid | varchar(17) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| last_sync | datetime | YES |  | NULL |  |  |
| sync_complete | char(1) | YES | MUL | NULL |  |  |
| sync_mode | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an_guid | an_guid | no | 1 |
| ix_hn_guid | hn_guid | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_lastupdate | last_update | no | 1 |
| ix_sync_complete | sync_complete | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "an": "",
    "hn_guid": null,
    "an_guid": null,
    "cid": null,
    "last_update": "2024-01-19 11:34:44",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000786",
    "hn_guid": null,
    "an_guid": "{4D5536D1-9CD9-4D61-A9E6-92C7051AF2B9}",
    "cid": null,
    "last_update": "2011-10-26 10:23:43",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000787",
    "hn_guid": null,
    "an_guid": "{2CD0CA74-8B9E-4CCC-8470-BB638C248EA3}",
    "cid": null,
    "last_update": "2011-10-26 10:42:16",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000788",
    "hn_guid": null,
    "an_guid": "{5B76DDE7-1A9F-4676-9688-43DDC7FDF575}",
    "cid": null,
    "last_update": "2011-10-26 08:23:31",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000789",
    "hn_guid": null,
    "an_guid": "{F9505F64-9BB0-486F-B9CB-5362B479CA71}",
    "cid": null,
    "last_update": "2011-10-27 08:05:59",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000791",
    "hn_guid": null,
    "an_guid": "{0E8A211E-4813-47CF-A6B4-A61536DF78F5}",
    "cid": null,
    "last_update": "2011-10-27 08:13:38",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000792",
    "hn_guid": null,
    "an_guid": "{C9B41B17-90EB-482C-87E2-EA74C3E4F242}",
    "cid": null,
    "last_update": "2011-10-27 08:19:49",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000793",
    "hn_guid": null,
    "an_guid": "{517167C7-5BC2-4F9B-9513-B29866721469}",
    "cid": null,
    "last_update": "2011-10-26 14:57:53",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
