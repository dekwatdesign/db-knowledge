# `ipt_ward_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_ward_stat_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| ward | varchar(4) | YES | MUL | NULL |  |  |
| admdate | int(11) | YES |  | NULL |  |  |
| admit_hour | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_ward | ward | no | 1 |
| PRIMARY | ipt_ward_stat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_ward_stat_id": 2,
    "an": "540000788",
    "ward": "03",
    "admdate": 15,
    "admit_hour": 344,
    "hos_guid": null
  },
  {
    "ipt_ward_stat_id": 3,
    "an": "000000376",
    "ward": "01",
    "admdate": 1,
    "admit_hour": 15,
    "hos_guid": "{B4D07487-E5D9-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "ipt_ward_stat_id": 4,
    "an": "000000373",
    "ward": "01",
    "admdate": 1,
    "admit_hour": 25,
    "hos_guid": "{B4D07875-E5D9-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "ipt_ward_stat_id": 5,
    "an": "000000370",
    "ward": "01",
    "admdate": 2,
    "admit_hour": 43,
    "hos_guid": "{B4D07B3F-E5D9-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "ipt_ward_stat_id": 6,
    "an": "000000337",
    "ward": "01",
    "admdate": 5,
    "admit_hour": 117,
    "hos_guid": "{B4D07E03-E5D9-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "ipt_ward_stat_id": 7,
    "an": "000000368",
    "ward": "01",
    "admdate": 2,
    "admit_hour": 47,
    "hos_guid": "{B4D080A9-E5D9-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "ipt_ward_stat_id": 8,
    "an": "000000366",
    "ward": "01",
    "admdate": 2,
    "admit_hour": 48,
    "hos_guid": "{B4D08344-E5D9-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "ipt_ward_stat_id": 9,
    "an": "000000379",
    "ward": "01",
    "admdate": 1,
    "admit_hour": 19,
    "hos_guid": "{B4D085DF-E5D9-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
