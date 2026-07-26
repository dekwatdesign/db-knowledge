# `psychiatric_estimate_bprs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_bprs_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_estimate_bprs_date | date | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| symptom1 | int(11) | YES |  | NULL |  |  |
| symptom2 | int(11) | YES |  | NULL |  |  |
| symptom3 | int(11) | YES |  | NULL |  |  |
| symptom4 | int(11) | YES |  | NULL |  |  |
| symptom5 | int(11) | YES |  | NULL |  |  |
| symptom6 | int(11) | YES |  | NULL |  |  |
| symptom7 | int(11) | YES |  | NULL |  |  |
| symptom8 | int(11) | YES |  | NULL |  |  |
| symptom9 | int(11) | YES |  | NULL |  |  |
| symptom10 | int(11) | YES |  | NULL |  |  |
| symptom11 | int(11) | YES |  | NULL |  |  |
| symptom12 | int(11) | YES |  | NULL |  |  |
| symptom13 | int(11) | YES |  | NULL |  |  |
| symptom14 | int(11) | YES |  | NULL |  |  |
| symptom15 | int(11) | YES |  | NULL |  |  |
| symptom16 | int(11) | YES |  | NULL |  |  |
| symptom17 | int(11) | YES |  | NULL |  |  |
| symptom18 | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_bprs_result | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_bprs_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_bprs_staff | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_bprs_time | time | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_bprs_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "psychiatric_estimate_bprs_id": 22327,
    "psychiatric_estimate_bprs_date": "2014-10-20",
    "vn": "571020060000",
    "an": "",
    "symptom1": 1,
    "symptom2": 4,
    "symptom3": 1,
    "symptom4": 1,
    "symptom5": 1,
    "symptom6": 7,
    "symptom7": 1,
    "symptom8": 1,
    "symptom9": 1,
    "symptom10": 1,
    "symptom11": 1,
    "symptom12": 1,
    "symptom13": 2,
    "symptom14": 1,
    "symptom15": 1,
    "symptom16": 1,
    "symptom17": 3,
    "symptom18": 1,
    "psychiatric_estimate_bprs_result": "อาการทางจิตทุเลา สามารถเข้ากลุ่มกิจกรรม /จำหน่ายได้",
    "psychiatric_estimate_bprs_point": 30,
    "psychiatric_estimate_bprs_staff": "yuwa125",
    "psychiatric_estimate_bprs_time": null,
    "hos_guid": null
  },
  {
    "psychiatric_estimate_bprs_id": 22328,
    "psychiatric_estimate_bprs_date": "2014-10-21",
    "vn": "571021060000",
    "an": "",
    "symptom1": 1,
    "symptom2": 1,
    "symptom3": 3,
    "symptom4": 2,
    "symptom5": 3,
    "symptom6": 6,
    "symptom7": 4,
    "symptom8": 1,
    "symptom9": 1,
    "symptom10": 1,
    "symptom11": 1,
    "symptom12": 1,
    "symptom13": 3,
    "symptom14": 1,
    "symptom15": 3,
    "symptom16": 1,
    "symptom17": 1,
    "symptom18": 1,
    "psychiatric_estimate_bprs_result": "อาการทางจิตทุเลา สามารถเข้ากลุ่มกิจกรรม /จำหน่ายได้",
    "psychiatric_estimate_bprs_point": 35,
    "psychiatric_estimate_bprs_staff": "yuwa125",
    "psychiatric_estimate_bprs_time": null,
    "hos_guid": null
  },
  {
    "psychiatric_estimate_bprs_id": 22329,
    "psychiatric_estimate_bprs_date": "2014-10-22",
    "vn": "571022083059",
    "an": "",
    "symptom1": 3,
    "symptom2": 3,
    "symptom3": 1,
    "symptom4": 3,
    "symptom5": 1,
    "symptom6": 6,
    "symptom7": 1,
    "symptom8": 1,
    "symptom9": 1,
    "symptom10": 1,
    "symptom11": 1,
    "symptom12": 1,
    "symptom13": 1,
    "symptom14": 1,
    "symptom15": 1,
    "symptom16": 1,
    "symptom17": 2,
    "symptom18": 1,
    "psychiatric_estimate_bprs_result": "อาการทางจิตทุเลา สามารถเข้ากลุ่มกิจกรรม /จำหน่ายได้",
    "psychiatric_estimate_bprs_point": 30,
    "psychiatric_estimate_bprs_staff": "yuwa166",
    "psychiatric_estimate_bprs_time": null,
    "hos_guid": null
  },
  {
    "psychiatric_estimate_bprs_id": 22331,
    "psychiatric_estimate_bprs_date": "2014-10-24",
    "vn": "571024060000",
    "an": "",
    "symptom1": 2,
    "symptom2": 1,
    "symptom3": 1,
    "symptom4": 1,
    "symptom5": 1,
    "symptom6": 5,
    "symptom7": 1,
    "symptom8": 1,
    "symptom9": 1,
    "symptom10": 1,
    "symptom11": 4,
    "symptom12": 1,
    "symptom13": 1,
    "symptom14": 1,
    "symptom15": 1,
    "symptom16": 1,
    "symptom17": 2,
    "symptom18": 1,
    "psychiatric_estimate_bprs_result": "อาการทางจิตทุเลา สามารถเข้ากลุ่มกิจกรรม /จำหน่ายได้",
    "psychiatric_estimate_bprs_point": 27,
    "psychiatric_estimate_bprs_staff": "yuwa125",
    "psychiatric_estimate_bprs_time": null,
    "hos_guid": null
  },
  {
    "psychiatric_estimate_bprs_id": 22332,
    "psychiatric_estimate_bprs_date": "2014-10-29",
    "vn": "571029060000",
    "an": "",
    "symptom1": 1,
    "symptom2": 2,
    "symptom3": 1,
    "symptom4": 2,
    "symptom5": 1,
    "symptom6": 5,
    "symptom7": 1,
    "symptom8": 1,
    "symptom9": 1,
    "symptom10": 1,
    "symptom11": 1,
    "symptom12": 1,
    "symptom13": 1,
    "symptom14": 1,
    "symptom15": 4,
    "symptom16": 2,
    "symptom17": 2,
    "symptom18": 1,
    "psychiatric_estimate_bprs_result": "อาการทางจิตทุเลา สามารถเข้ากลุ่มกิจกรรม /จำหน่ายได้",
    "psychiatric_estimate_bprs_point": 29,
    "psychiatric_estimate_bprs_staff": "yuwa125",
    "psychiatric_estimate_bprs_time": null,
    "hos_guid": null
  },
  {
    "psychiatric_estimate_bprs_id": 22333,
    "psychiatric_estimate_bprs_date": "2014-11-03",
    "vn": "571103060000",
    "an": "",
    "symptom1": 2,
    "symptom2": 4,
    "symptom3": 1,
    "symptom4": 2,
    "symptom5": 3,
    "symptom6": 6,
    "symptom7": 1,
    "symptom8": 1,
    "symptom9": 3,
    "symptom10": 1,
    "symptom11": 1,
    "symptom12": 1,
    "symptom13": 1,
    "symptom14": 1,
    "symptom15": 1,
    "symptom16": 1,
    "symptom17": 3,
    "symptom18": 1,
    "psychiatric_estimate_bprs_result": "อาการทางจิตทุเลา สามารถเข้ากลุ่มกิจกรรม /จำหน่ายได้",
    "psychiatric_estimate_bprs_point": 34,
    "psychiatric_estimate_bprs_staff": "yuwa182",
    "psychiatric_estimate_bprs_time": null,
    "hos_guid": null
  }
]
```
