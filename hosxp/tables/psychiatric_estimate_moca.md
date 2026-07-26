# `psychiatric_estimate_moca`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_moca_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_estimate_moca_date | date | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| test_point1 | int(11) | YES |  | NULL |  |  |
| test_point2 | int(11) | YES |  | NULL |  |  |
| test_point3 | int(11) | YES |  | NULL |  |  |
| test_point4 | int(11) | YES |  | NULL |  |  |
| test_point5 | int(11) | YES |  | NULL |  |  |
| test_point6 | int(11) | YES |  | NULL |  |  |
| test_point7 | int(11) | YES |  | NULL |  |  |
| test_point8 | int(11) | YES |  | NULL |  |  |
| test_point9 | int(11) | YES |  | NULL |  |  |
| test_point10 | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_moca_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_moca_staff | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_moca_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "psychiatric_estimate_moca_id": 1,
    "psychiatric_estimate_moca_date": "2014-10-20",
    "vn": "571020060000",
    "test_point1": null,
    "test_point2": null,
    "test_point3": 5,
    "test_point4": 5,
    "test_point5": 5,
    "test_point6": 0,
    "test_point7": null,
    "test_point8": null,
    "test_point9": null,
    "test_point10": null,
    "psychiatric_estimate_moca_point": 15,
    "psychiatric_estimate_moca_staff": "yuwa125",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_moca_id": 2,
    "psychiatric_estimate_moca_date": "2014-10-21",
    "vn": "571021060000",
    "test_point1": null,
    "test_point2": null,
    "test_point3": 5,
    "test_point4": 5,
    "test_point5": 5,
    "test_point6": null,
    "test_point7": null,
    "test_point8": 0,
    "test_point9": null,
    "test_point10": null,
    "psychiatric_estimate_moca_point": 15,
    "psychiatric_estimate_moca_staff": "yuwa125",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_moca_id": 3,
    "psychiatric_estimate_moca_date": "2014-10-22",
    "vn": "571022083059",
    "test_point1": null,
    "test_point2": null,
    "test_point3": 5,
    "test_point4": 5,
    "test_point5": 5,
    "test_point6": null,
    "test_point7": null,
    "test_point8": null,
    "test_point9": null,
    "test_point10": null,
    "psychiatric_estimate_moca_point": 15,
    "psychiatric_estimate_moca_staff": "yuwa166",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_moca_id": 5,
    "psychiatric_estimate_moca_date": "2014-10-24",
    "vn": "571024060000",
    "test_point1": 5,
    "test_point2": 5,
    "test_point3": 5,
    "test_point4": 5,
    "test_point5": 5,
    "test_point6": 5,
    "test_point7": 5,
    "test_point8": 5,
    "test_point9": 5,
    "test_point10": 5,
    "psychiatric_estimate_moca_point": 50,
    "psychiatric_estimate_moca_staff": "yuwa125",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_moca_id": 6,
    "psychiatric_estimate_moca_date": "2014-10-29",
    "vn": "571029060000",
    "test_point1": 5,
    "test_point2": 5,
    "test_point3": 5,
    "test_point4": 5,
    "test_point5": 5,
    "test_point6": 5,
    "test_point7": 5,
    "test_point8": 5,
    "test_point9": 5,
    "test_point10": 5,
    "psychiatric_estimate_moca_point": 50,
    "psychiatric_estimate_moca_staff": "yuwa125",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_moca_id": 7,
    "psychiatric_estimate_moca_date": "2014-11-03",
    "vn": "571103060000",
    "test_point1": 5,
    "test_point2": 5,
    "test_point3": 5,
    "test_point4": 5,
    "test_point5": 5,
    "test_point6": 5,
    "test_point7": 5,
    "test_point8": 5,
    "test_point9": 5,
    "test_point10": 5,
    "psychiatric_estimate_moca_point": 50,
    "psychiatric_estimate_moca_staff": "yuwa182",
    "hos_guid": null
  }
]
```
