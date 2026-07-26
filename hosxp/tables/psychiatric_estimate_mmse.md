# `psychiatric_estimate_mmse`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_mmse_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_estimate_mmse_date | date | YES |  | NULL |  |  |
| test1_point1 | int(11) | YES |  | NULL |  |  |
| test1_point2 | int(11) | YES |  | NULL |  |  |
| test1_point3 | int(11) | YES |  | NULL |  |  |
| test1_point4 | int(11) | YES |  | NULL |  |  |
| test1_point5 | int(11) | YES |  | NULL |  |  |
| test2_point1 | int(11) | YES |  | NULL |  |  |
| test2_point2 | int(11) | YES |  | NULL |  |  |
| test2_point3 | int(11) | YES |  | NULL |  |  |
| test2_point4 | int(11) | YES |  | NULL |  |  |
| test2_point5 | int(11) | YES |  | NULL |  |  |
| test2_point6 | int(11) | YES |  | NULL |  |  |
| test2_point7 | int(11) | YES |  | NULL |  |  |
| test2_point8 | int(11) | YES |  | NULL |  |  |
| test2_point9 | int(11) | YES |  | NULL |  |  |
| test2_point10 | int(11) | YES |  | NULL |  |  |
| test3_point1 | int(11) | YES |  | NULL |  |  |
| test3_point2 | int(11) | YES |  | NULL |  |  |
| test4_point1 | int(11) | YES |  | NULL |  |  |
| test4_point2 | int(11) | YES |  | NULL |  |  |
| test5_point1 | int(11) | YES |  | NULL |  |  |
| test5_point2 | int(11) | YES |  | NULL |  |  |
| test6_point1 | int(11) | YES |  | NULL |  |  |
| test6_point2 | int(11) | YES |  | NULL |  |  |
| test7_point1 | int(11) | YES |  | NULL |  |  |
| test8_point1 | int(11) | YES |  | NULL |  |  |
| test8_point2 | int(11) | YES |  | NULL |  |  |
| test8_point3 | int(11) | YES |  | NULL |  |  |
| test9_point1 | int(11) | YES |  | NULL |  |  |
| test10_point1 | int(11) | YES |  | NULL |  |  |
| test11_point1 | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_mmse_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_mmse_staff | varchar(250) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_mmse_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "psychiatric_estimate_mmse_id": 2,
    "psychiatric_estimate_mmse_date": "2014-10-20",
    "test1_point1": 5,
    "test1_point2": 5,
    "test1_point3": 5,
    "test1_point4": 5,
    "test1_point5": 5,
    "test2_point1": 5,
    "test2_point2": 5,
    "test2_point3": 5,
    "test2_point4": 5,
    "test2_point5": 5,
    "test2_point6": 5,
    "test2_point7": 5,
    "test2_point8": 5,
    "test2_point9": 5,
    "test2_point10": 5,
    "test3_point1": 5,
    "test3_point2": 3,
    "test4_point1": 5,
    "test4_point2": 3,
    "test5_point1": 5,
    "test5_point2": 3,
    "test6_point1": 5,
    "test6_point2": 3,
    "test7_point1": 5,
    "test8_point1": 5,
    "test8_point2": 5,
    "test8_point3": 5,
    "test9_point1": 5,
    "test10_point1": 5,
    "test11_point1": 5,
    "psychiatric_estimate_mmse_point": 142,
    "psychiatric_estimate_mmse_staff": "yuwa125",
    "vn": "571020060000",
    "an": "",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_mmse_id": 3,
    "psychiatric_estimate_mmse_date": "2014-10-21",
    "test1_point1": 5,
    "test1_point2": 5,
    "test1_point3": 5,
    "test1_point4": 5,
    "test1_point5": 5,
    "test2_point1": 5,
    "test2_point2": 5,
    "test2_point3": 5,
    "test2_point4": 5,
    "test2_point5": 5,
    "test2_point6": 5,
    "test2_point7": 5,
    "test2_point8": 5,
    "test2_point9": 5,
    "test2_point10": 5,
    "test3_point1": 5,
    "test3_point2": 1,
    "test4_point1": 5,
    "test4_point2": 1,
    "test5_point1": 5,
    "test5_point2": 1,
    "test6_point1": 5,
    "test6_point2": 3,
    "test7_point1": 5,
    "test8_point1": 5,
    "test8_point2": 5,
    "test8_point3": 5,
    "test9_point1": 5,
    "test10_point1": 5,
    "test11_point1": 5,
    "psychiatric_estimate_mmse_point": 136,
    "psychiatric_estimate_mmse_staff": "yuwa125",
    "vn": "571021060000",
    "an": "",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_mmse_id": 4,
    "psychiatric_estimate_mmse_date": "2014-10-22",
    "test1_point1": 5,
    "test1_point2": 5,
    "test1_point3": 5,
    "test1_point4": 5,
    "test1_point5": 5,
    "test2_point1": 5,
    "test2_point2": 5,
    "test2_point3": 5,
    "test2_point4": 5,
    "test2_point5": 5,
    "test2_point6": 5,
    "test2_point7": 5,
    "test2_point8": 5,
    "test2_point9": 5,
    "test2_point10": 5,
    "test3_point1": 5,
    "test3_point2": 1,
    "test4_point1": 5,
    "test4_point2": 1,
    "test5_point1": 5,
    "test5_point2": 1,
    "test6_point1": 5,
    "test6_point2": 1,
    "test7_point1": 5,
    "test8_point1": 5,
    "test8_point2": 5,
    "test8_point3": 5,
    "test9_point1": 5,
    "test10_point1": 5,
    "test11_point1": 1,
    "psychiatric_estimate_mmse_point": 130,
    "psychiatric_estimate_mmse_staff": "yuwa166",
    "vn": "571022083059",
    "an": "",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_mmse_id": 6,
    "psychiatric_estimate_mmse_date": "2014-10-24",
    "test1_point1": 5,
    "test1_point2": 5,
    "test1_point3": 5,
    "test1_point4": 5,
    "test1_point5": 5,
    "test2_point1": 5,
    "test2_point2": 5,
    "test2_point3": 5,
    "test2_point4": 5,
    "test2_point5": 5,
    "test2_point6": 5,
    "test2_point7": 5,
    "test2_point8": 5,
    "test2_point9": 5,
    "test2_point10": 5,
    "test3_point1": 5,
    "test3_point2": 1,
    "test4_point1": 5,
    "test4_point2": 1,
    "test5_point1": 5,
    "test5_point2": 1,
    "test6_point1": 5,
    "test6_point2": 1,
    "test7_point1": 5,
    "test8_point1": 5,
    "test8_point2": 5,
    "test8_point3": 5,
    "test9_point1": 5,
    "test10_point1": 5,
    "test11_point1": 5,
    "psychiatric_estimate_mmse_point": 134,
    "psychiatric_estimate_mmse_staff": "yuwa125",
    "vn": "571024060000",
    "an": "",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_mmse_id": 8,
    "psychiatric_estimate_mmse_date": "2014-10-29",
    "test1_point1": 5,
    "test1_point2": 5,
    "test1_point3": 5,
    "test1_point4": 5,
    "test1_point5": 5,
    "test2_point1": 5,
    "test2_point2": 5,
    "test2_point3": 5,
    "test2_point4": 5,
    "test2_point5": 5,
    "test2_point6": 5,
    "test2_point7": 5,
    "test2_point8": 5,
    "test2_point9": 5,
    "test2_point10": 5,
    "test3_point1": 5,
    "test3_point2": 1,
    "test4_point1": 5,
    "test4_point2": 3,
    "test5_point1": 5,
    "test5_point2": 1,
    "test6_point1": 5,
    "test6_point2": 3,
    "test7_point1": 5,
    "test8_point1": 5,
    "test8_point2": 5,
    "test8_point3": 5,
    "test9_point1": 5,
    "test10_point1": 5,
    "test11_point1": 5,
    "psychiatric_estimate_mmse_point": 138,
    "psychiatric_estimate_mmse_staff": "yuwa166",
    "vn": "571029060000",
    "an": "",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_mmse_id": 9,
    "psychiatric_estimate_mmse_date": "2014-11-03",
    "test1_point1": 5,
    "test1_point2": 5,
    "test1_point3": 5,
    "test1_point4": 5,
    "test1_point5": 5,
    "test2_point1": 5,
    "test2_point2": 5,
    "test2_point3": 5,
    "test2_point4": 5,
    "test2_point5": 5,
    "test2_point6": 5,
    "test2_point7": 5,
    "test2_point8": 5,
    "test2_point9": 5,
    "test2_point10": 5,
    "test3_point1": 5,
    "test3_point2": 1,
    "test4_point1": 5,
    "test4_point2": 1,
    "test5_point1": 5,
    "test5_point2": 1,
    "test6_point1": 5,
    "test6_point2": 3,
    "test7_point1": 5,
    "test8_point1": 5,
    "test8_point2": 5,
    "test8_point3": 5,
    "test9_point1": 5,
    "test10_point1": 5,
    "test11_point1": 5,
    "psychiatric_estimate_mmse_point": 136,
    "psychiatric_estimate_mmse_staff": "yuwa182",
    "vn": "571103060000",
    "an": "",
    "hos_guid": null
  }
]
```
