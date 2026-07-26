# `psychiatric_estimate_gaf`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_gaf_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psychiatric_estimate_gaf_point | varchar(50) | YES |  | NULL |  |  |
| psychiatric_estimate_gaf_date | date | YES |  | NULL |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_gaf_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "psychiatric_estimate_gaf_id": 3,
    "vn": "571020060000",
    "an": "",
    "psychiatric_estimate_gaf_point": "40-31",
    "psychiatric_estimate_gaf_date": "2014-10-20",
    "name": "yuwa125",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_gaf_id": 4,
    "vn": "571021060000",
    "an": "",
    "psychiatric_estimate_gaf_point": "50-41",
    "psychiatric_estimate_gaf_date": "2014-10-21",
    "name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_gaf_id": 6,
    "vn": "571024060000",
    "an": "",
    "psychiatric_estimate_gaf_point": "100-91",
    "psychiatric_estimate_gaf_date": "2014-10-24",
    "name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_gaf_id": 7,
    "vn": "571029060000",
    "an": "",
    "psychiatric_estimate_gaf_point": "10",
    "psychiatric_estimate_gaf_date": "2014-10-29",
    "name": "yuwa125",
    "hos_guid": null
  },
  {
    "psychiatric_estimate_gaf_id": 8,
    "vn": "571103060000",
    "an": "",
    "psychiatric_estimate_gaf_point": "100-91",
    "psychiatric_estimate_gaf_date": "2014-11-03",
    "name": "yuwa182",
    "hos_guid": null
  }
]
```
