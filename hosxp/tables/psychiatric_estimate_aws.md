# `psychiatric_estimate_aws`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_aws_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_estimate_aws_date | date | YES |  | NULL |  |  |
| psychiatric_estimate_aws_time | time | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| symptom1 | int(11) | YES |  | NULL |  |  |
| symptom2 | int(11) | YES |  | NULL |  |  |
| symptom3 | int(11) | YES |  | NULL |  |  |
| symptom4 | int(11) | YES |  | NULL |  |  |
| symptom5 | int(11) | YES |  | NULL |  |  |
| symptom6 | int(11) | YES |  | NULL |  |  |
| symptom7 | int(11) | YES |  | NULL |  |  |
| bpsd | varchar(10) | YES |  | NULL |  |  |
| pulse | double(22,3) | YES |  | NULL |  |  |
| rr | double(22,3) | YES |  | NULL |  |  |
| conscious | varchar(10) | YES |  | NULL |  |  |
| pupil | double(22,3) | YES |  | NULL |  |  |
| sedative | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_aws_result | varchar(250) | YES |  | NULL |  |  |
| psychiatric_estimate_aws_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_aws_staff | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_aws_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "psychiatric_estimate_aws_id": 2,
    "psychiatric_estimate_aws_date": "2014-11-03",
    "psychiatric_estimate_aws_time": "9:14:20",
    "vn": "571024060000",
    "an": "",
    "symptom1": 0,
    "symptom2": 0,
    "symptom3": 3,
    "symptom4": 0,
    "symptom5": 1,
    "symptom6": 0,
    "symptom7": 0,
    "bpsd": null,
    "pulse": null,
    "rr": null,
    "conscious": "",
    "pupil": null,
    "sedative": null,
    "psychiatric_estimate_aws_result": null,
    "psychiatric_estimate_aws_point": 4,
    "psychiatric_estimate_aws_staff": "[MASKED_FULLNAME]",
    "hos_guid": null
  }
]
```
