# `psychiatric_estimate_tgds`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_tgds_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_estimate_tgds_date | date | YES |  | NULL |  |  |
| c1 | char(1) | YES |  | NULL |  |  |
| c2 | char(1) | YES |  | NULL |  |  |
| c3 | char(1) | YES |  | NULL |  |  |
| c4 | char(1) | YES |  | NULL |  |  |
| c5 | char(1) | YES |  | NULL |  |  |
| c6 | char(1) | YES |  | NULL |  |  |
| c7 | char(1) | YES |  | NULL |  |  |
| c8 | char(1) | YES |  | NULL |  |  |
| c9 | char(1) | YES |  | NULL |  |  |
| c10 | char(1) | YES |  | NULL |  |  |
| c11 | char(1) | YES |  | NULL |  |  |
| c12 | char(1) | YES |  | NULL |  |  |
| c13 | char(1) | YES |  | NULL |  |  |
| c14 | char(1) | YES |  | NULL |  |  |
| c15 | char(1) | YES |  | NULL |  |  |
| c16 | char(1) | YES |  | NULL |  |  |
| c17 | char(1) | YES |  | NULL |  |  |
| c18 | char(1) | YES |  | NULL |  |  |
| c19 | char(1) | YES |  | NULL |  |  |
| c20 | char(1) | YES |  | NULL |  |  |
| c21 | char(1) | YES |  | NULL |  |  |
| c22 | char(1) | YES |  | NULL |  |  |
| c23 | char(1) | YES |  | NULL |  |  |
| c24 | char(1) | YES |  | NULL |  |  |
| c25 | char(1) | YES |  | NULL |  |  |
| c26 | char(1) | YES |  | NULL |  |  |
| c27 | char(1) | YES |  | NULL |  |  |
| c28 | char(1) | YES |  | NULL |  |  |
| c29 | char(1) | YES |  | NULL |  |  |
| c30 | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_tgds_result | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_tgds_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_tgds_staff | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_tgds_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "psychiatric_estimate_tgds_id": 1,
    "psychiatric_estimate_tgds_date": "2014-10-20",
    "c1": "0",
    "c2": "1",
    "c3": "1",
    "c4": "0",
    "c5": "0",
    "c6": "1",
    "c7": "0",
    "c8": "1",
    "c9": "0",
    "c10": "0",
    "c11": "1",
    "c12": "0",
    "c13": "0",
    "c14": "1",
    "c15": "1",
    "c16": null,
    "c17": null,
    "c18": null,
    "c19": null,
    "c20": null,
    "c21": null,
    "c22": null,
    "c23": null,
    "c24": null,
    "c25": null,
    "c26": null,
    "c27": null,
    "c28": null,
    "c29": null,
    "c30": null,
    "psychiatric_estimate_tgds_result": "S: Suggestive",
    "psychiatric_estimate_tgds_point": 7,
    "psychiatric_estimate_tgds_staff": "yuwa125",
    "hos_guid": null,
    "vn": "571020060000",
    "an": ""
  },
  {
    "psychiatric_estimate_tgds_id": 2,
    "psychiatric_estimate_tgds_date": "2014-10-21",
    "c1": "0",
    "c2": "1",
    "c3": "0",
    "c4": "1",
    "c5": "0",
    "c6": "1",
    "c7": "1",
    "c8": "1",
    "c9": "0",
    "c10": "0",
    "c11": "1",
    "c12": "0",
    "c13": "0",
    "c14": "1",
    "c15": "1",
    "c16": null,
    "c17": null,
    "c18": null,
    "c19": null,
    "c20": null,
    "c21": null,
    "c22": null,
    "c23": null,
    "c24": null,
    "c25": null,
    "c26": null,
    "c27": null,
    "c28": null,
    "c29": null,
    "c30": null,
    "psychiatric_estimate_tgds_result": "S: Suggestive",
    "psychiatric_estimate_tgds_point": 8,
    "psychiatric_estimate_tgds_staff": "yuwa125",
    "hos_guid": null,
    "vn": "571021060000",
    "an": ""
  },
  {
    "psychiatric_estimate_tgds_id": 3,
    "psychiatric_estimate_tgds_date": "2014-10-22",
    "c1": "0",
    "c2": "1",
    "c3": "0",
    "c4": "1",
    "c5": "1",
    "c6": "1",
    "c7": "0",
    "c8": "1",
    "c9": "0",
    "c10": "0",
    "c11": "1",
    "c12": "1",
    "c13": "0",
    "c14": "1",
    "c15": "0",
    "c16": null,
    "c17": null,
    "c18": null,
    "c19": null,
    "c20": null,
    "c21": null,
    "c22": null,
    "c23": null,
    "c24": null,
    "c25": null,
    "c26": null,
    "c27": null,
    "c28": null,
    "c29": null,
    "c30": null,
    "psychiatric_estimate_tgds_result": "S: Suggestive",
    "psychiatric_estimate_tgds_point": 8,
    "psychiatric_estimate_tgds_staff": "yuwa166",
    "hos_guid": null,
    "vn": "571022083059",
    "an": ""
  },
  {
    "psychiatric_estimate_tgds_id": 5,
    "psychiatric_estimate_tgds_date": "2014-10-24",
    "c1": "0",
    "c2": "1",
    "c3": "1",
    "c4": "1",
    "c5": "0",
    "c6": "1",
    "c7": "0",
    "c8": "0",
    "c9": "0",
    "c10": "0",
    "c11": "1",
    "c12": "1",
    "c13": "0",
    "c14": "1",
    "c15": "1",
    "c16": null,
    "c17": null,
    "c18": null,
    "c19": null,
    "c20": null,
    "c21": null,
    "c22": null,
    "c23": null,
    "c24": null,
    "c25": null,
    "c26": null,
    "c27": null,
    "c28": null,
    "c29": null,
    "c30": null,
    "psychiatric_estimate_tgds_result": "S: Suggestive",
    "psychiatric_estimate_tgds_point": 8,
    "psychiatric_estimate_tgds_staff": "yuwa125",
    "hos_guid": null,
    "vn": "571024060000",
    "an": ""
  },
  {
    "psychiatric_estimate_tgds_id": 6,
    "psychiatric_estimate_tgds_date": "2014-10-29",
    "c1": "0",
    "c2": "1",
    "c3": "1",
    "c4": "1",
    "c5": "0",
    "c6": "1",
    "c7": "0",
    "c8": "0",
    "c9": "1",
    "c10": "0",
    "c11": "1",
    "c12": "1",
    "c13": "0",
    "c14": "1",
    "c15": "1",
    "c16": null,
    "c17": null,
    "c18": null,
    "c19": null,
    "c20": null,
    "c21": null,
    "c22": null,
    "c23": null,
    "c24": null,
    "c25": null,
    "c26": null,
    "c27": null,
    "c28": null,
    "c29": null,
    "c30": null,
    "psychiatric_estimate_tgds_result": "S: Suggestive",
    "psychiatric_estimate_tgds_point": 9,
    "psychiatric_estimate_tgds_staff": "yuwa125",
    "hos_guid": null,
    "vn": "571029060000",
    "an": ""
  },
  {
    "psychiatric_estimate_tgds_id": 7,
    "psychiatric_estimate_tgds_date": "2014-11-03",
    "c1": "0",
    "c2": "1",
    "c3": "1",
    "c4": "1",
    "c5": "0",
    "c6": "1",
    "c7": "0",
    "c8": "0",
    "c9": "0",
    "c10": "1",
    "c11": "0",
    "c12": "1",
    "c13": "0",
    "c14": "1",
    "c15": "1",
    "c16": null,
    "c17": null,
    "c18": null,
    "c19": null,
    "c20": null,
    "c21": null,
    "c22": null,
    "c23": null,
    "c24": null,
    "c25": null,
    "c26": null,
    "c27": null,
    "c28": null,
    "c29": null,
    "c30": null,
    "psychiatric_estimate_tgds_result": "S: Suggestive",
    "psychiatric_estimate_tgds_point": 8,
    "psychiatric_estimate_tgds_staff": "yuwa182",
    "hos_guid": null,
    "vn": "571103060000",
    "an": ""
  }
]
```
