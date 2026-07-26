# `ipt_home_stay`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| begin_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "an": "540000808",
    "begin_date": "2011-10-12",
    "end_date": "2011-10-14",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "550000235",
    "begin_date": "2012-03-07",
    "end_date": "2012-03-08",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "550000399",
    "begin_date": "2012-04-28",
    "end_date": "2012-04-29",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "550000615",
    "begin_date": "2012-06-17",
    "end_date": "2012-07-24",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "550000666",
    "begin_date": "2012-06-30",
    "end_date": "2012-07-06",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "560001281",
    "begin_date": "2013-09-28",
    "end_date": "2013-09-29",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "560001525",
    "begin_date": "2013-11-09",
    "end_date": "2013-11-11",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "560001680",
    "begin_date": "2013-11-30",
    "end_date": "2013-12-05",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
