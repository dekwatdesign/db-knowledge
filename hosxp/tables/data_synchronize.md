# `data_synchronize`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| vn_guid | varchar(38) | YES | MUL | NULL |  |  |
| hn_guid | varchar(38) | YES | MUL | NULL |  |  |
| cid | varchar(17) | YES | MUL | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| last_sync | datetime | YES | MUL | NULL |  |  |
| sync_complete | char(1) | YES | MUL | NULL |  |  |
| sync_mode | varchar(10) | YES | MUL | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| cid | cid | no | 1 |
| hn_guid | hn_guid | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| last_sync | last_sync | no | 1 |
| last_update | last_update | no | 1 |
| PRIMARY | vn | yes | 1 |
| sync_complete | sync_complete | no | 1 |
| sync_mode | sync_mode | no | 1 |
| vn_guid | vn_guid | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "051017175759",
    "vn_guid": "{E3A6C03A-BA19-4A49-86C5-8FA1A955CF51}",
    "hn_guid": null,
    "cid": "1xxxxxxxxxxxx",
    "last_update": "2011-10-19 17:59:22",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "department": null,
    "hos_guid": null
  },
  {
    "vn": "240614151330",
    "vn_guid": "{484D4860-DAB6-4FE0-A550-8DD8DC42D96B}",
    "hn_guid": null,
    "cid": "1xxxxxxxxxxxx",
    "last_update": "2013-06-13 15:22:44",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "DELETE",
    "department": null,
    "hos_guid": null
  },
  {
    "vn": "250101153511",
    "vn_guid": "{0C522B6A-DF05-4E88-8330-F2163CF7CCFD}",
    "hn_guid": null,
    "cid": "1xxxxxxxxxxxx",
    "last_update": "2011-12-30 15:35:41",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "department": null,
    "hos_guid": null
  },
  {
    "vn": "250109164252",
    "vn_guid": "{EF10F233-302F-4B8E-900E-6AB4707599A4}",
    "hn_guid": null,
    "cid": "1xxxxxxxxxxxx",
    "last_update": "2012-01-06 16:43:46",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "department": null,
    "hos_guid": null
  },
  {
    "vn": "250112144831",
    "vn_guid": "{56EA33A4-2294-4115-B78C-1C76C90065AA}",
    "hn_guid": null,
    "cid": "1xxxxxxxxxxxx",
    "last_update": "2022-01-11 14:49:19",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "department": null,
    "hos_guid": null
  },
  {
    "vn": "250119130001",
    "vn_guid": "{38B5F9B4-0817-405F-9E34-7AF0CC229470}",
    "hn_guid": null,
    "cid": "1xxxxxxxxxxxx",
    "last_update": "2012-01-18 13:15:34",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "department": null,
    "hos_guid": null
  },
  {
    "vn": "250201113358",
    "vn_guid": "{67311229-AA81-4113-81D1-31F7DDCF68C9}",
    "hn_guid": null,
    "cid": "1xxxxxxxxxxxx",
    "last_update": "2016-01-29 11:34:40",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "department": null,
    "hos_guid": null
  },
  {
    "vn": "250201135641",
    "vn_guid": "{6D43C30A-1B82-42E5-909B-EF845448294C}",
    "hn_guid": null,
    "cid": "1xxxxxxxxxxxx",
    "last_update": "2016-01-29 13:57:12",
    "last_sync": null,
    "sync_complete": "N",
    "sync_mode": "UPDATE",
    "department": null,
    "hos_guid": null
  }
]
```
