# `ipt_home_stay_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_home_stay_detail_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| remark | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_home_stay_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_home_stay_detail_id": 1,
    "an": "540000808",
    "begin_date": "2011-10-12",
    "end_date": "2011-10-14",
    "remark": null,
    "hos_guid": null
  },
  {
    "ipt_home_stay_detail_id": 2,
    "an": "540000808",
    "begin_date": "2011-10-15",
    "end_date": "2011-10-17",
    "remark": null,
    "hos_guid": null
  },
  {
    "ipt_home_stay_detail_id": 3,
    "an": "540000808",
    "begin_date": "2011-10-18",
    "end_date": "2011-10-20",
    "remark": null,
    "hos_guid": null
  },
  {
    "ipt_home_stay_detail_id": 5,
    "an": "540000807",
    "begin_date": "2011-10-12",
    "end_date": "2011-10-17",
    "remark": null,
    "hos_guid": null
  },
  {
    "ipt_home_stay_detail_id": 6,
    "an": "540000806",
    "begin_date": "2011-10-12",
    "end_date": "2011-10-17",
    "remark": null,
    "hos_guid": null
  },
  {
    "ipt_home_stay_detail_id": 7,
    "an": "540000870",
    "begin_date": "2011-10-13",
    "end_date": "2011-10-17",
    "remark": null,
    "hos_guid": null
  },
  {
    "ipt_home_stay_detail_id": 8,
    "an": "540000870",
    "begin_date": "2011-10-18",
    "end_date": "2011-10-19",
    "remark": null,
    "hos_guid": null
  },
  {
    "ipt_home_stay_detail_id": 9,
    "an": "540000804",
    "begin_date": "2011-10-12",
    "end_date": "2011-10-17",
    "remark": null,
    "hos_guid": null
  }
]
```
