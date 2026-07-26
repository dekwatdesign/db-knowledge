# `psychiatric_estimate_critical18`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_critical18_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_estimate_critical18_date | date | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
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
| psychiatric_estimate_critical18_result | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_critical18_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_critical18_staff | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_critical18_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "psychiatric_estimate_critical18_id": 1,
    "psychiatric_estimate_critical18_date": "2014-10-20",
    "vn": "571020060000",
    "an": "",
    "c1": "1",
    "c2": "0",
    "c3": "1",
    "c4": "1",
    "c5": "1",
    "c6": "0",
    "c7": "1",
    "c8": "1",
    "c9": "1",
    "c10": "1",
    "c11": "1",
    "c12": "1",
    "c13": "1",
    "c14": "1",
    "c15": "0",
    "c16": "0",
    "c17": "1",
    "c18": "0",
    "psychiatric_estimate_critical18_result": "ทุกข์ทรมานทางจิตใจเล็กน้อย",
    "psychiatric_estimate_critical18_point": 13,
    "psychiatric_estimate_critical18_staff": "yuwa125",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_critical18_id": 2,
    "psychiatric_estimate_critical18_date": "2014-10-21",
    "vn": "571021060000",
    "an": "",
    "c1": "1",
    "c2": "1",
    "c3": "2",
    "c4": "1",
    "c5": "1",
    "c6": "1",
    "c7": "1",
    "c8": "1",
    "c9": "1",
    "c10": "1",
    "c11": "1",
    "c12": "1",
    "c13": "1",
    "c14": "1",
    "c15": "1",
    "c16": "0",
    "c17": "1",
    "c18": "1",
    "psychiatric_estimate_critical18_result": "ทุกข์ทรมานทางจิตใจเล็กน้อย",
    "psychiatric_estimate_critical18_point": 18,
    "psychiatric_estimate_critical18_staff": "yuwa125",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_critical18_id": 3,
    "psychiatric_estimate_critical18_date": "2014-10-22",
    "vn": "571022083059",
    "an": "",
    "c1": "0",
    "c2": "0",
    "c3": "1",
    "c4": "1",
    "c5": "1",
    "c6": "0",
    "c7": "1",
    "c8": "1",
    "c9": "1",
    "c10": "1",
    "c11": "1",
    "c12": "1",
    "c13": "1",
    "c14": "1",
    "c15": "1",
    "c16": "0",
    "c17": "0",
    "c18": "0",
    "psychiatric_estimate_critical18_result": "ปกติ",
    "psychiatric_estimate_critical18_point": 12,
    "psychiatric_estimate_critical18_staff": "yuwa166",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_critical18_id": 5,
    "psychiatric_estimate_critical18_date": "2014-10-24",
    "vn": "571024060000",
    "an": "",
    "c1": "1",
    "c2": "0",
    "c3": "1",
    "c4": "1",
    "c5": "1",
    "c6": "0",
    "c7": "1",
    "c8": "1",
    "c9": "0",
    "c10": "1",
    "c11": "0",
    "c12": "1",
    "c13": "0",
    "c14": "1",
    "c15": "1",
    "c16": "0",
    "c17": "0",
    "c18": "0",
    "psychiatric_estimate_critical18_result": "ปกติ",
    "psychiatric_estimate_critical18_point": 10,
    "psychiatric_estimate_critical18_staff": "yuwa125",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_critical18_id": 6,
    "psychiatric_estimate_critical18_date": "2014-10-27",
    "vn": "571027060001",
    "an": "",
    "c1": "1",
    "c2": "0",
    "c3": "1",
    "c4": "1",
    "c5": "1",
    "c6": "0",
    "c7": "1",
    "c8": "0",
    "c9": "0",
    "c10": "1",
    "c11": "0",
    "c12": "1",
    "c13": "0",
    "c14": "1",
    "c15": "1",
    "c16": "0",
    "c17": "0",
    "c18": "0",
    "psychiatric_estimate_critical18_result": "ปกติ",
    "psychiatric_estimate_critical18_point": 9,
    "psychiatric_estimate_critical18_staff": "yuwa166",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_critical18_id": 7,
    "psychiatric_estimate_critical18_date": "2014-10-29",
    "vn": "571029060000",
    "an": "",
    "c1": "1",
    "c2": "0",
    "c3": "1",
    "c4": "1",
    "c5": "1",
    "c6": "0",
    "c7": "1",
    "c8": "1",
    "c9": "0",
    "c10": "1",
    "c11": "0",
    "c12": "2",
    "c13": "1",
    "c14": "1",
    "c15": "1",
    "c16": "1",
    "c17": "0",
    "c18": "0",
    "psychiatric_estimate_critical18_result": "ทุกข์ทรมานทางจิตใจเล็กน้อย",
    "psychiatric_estimate_critical18_point": 13,
    "psychiatric_estimate_critical18_staff": "yuwa125",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_critical18_id": 8,
    "psychiatric_estimate_critical18_date": "2014-11-03",
    "vn": "571103060000",
    "an": "",
    "c1": "1",
    "c2": "0",
    "c3": "1",
    "c4": "1",
    "c5": "1",
    "c6": "0",
    "c7": "1",
    "c8": "1",
    "c9": "0",
    "c10": "1",
    "c11": "0",
    "c12": "2",
    "c13": "1",
    "c14": "1",
    "c15": "1",
    "c16": "1",
    "c17": "0",
    "c18": "0",
    "psychiatric_estimate_critical18_result": "ทุกข์ทรมานทางจิตใจเล็กน้อย",
    "psychiatric_estimate_critical18_point": 13,
    "psychiatric_estimate_critical18_staff": "yuwa182",
    "hos_guid": null
  }
]
```
