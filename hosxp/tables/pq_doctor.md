# `pq_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pq_doctor_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| doctor_date | date | YES |  | NULL |  |  |
| doctor_time | time | YES |  | NULL |  |  |
| staff | varchar(25) | YES | MUL | NULL |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| next_dep | char(3) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| doctor_time_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_staff | staff | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | pq_doctor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pq_doctor_id": 1,
    "vn": "541007092204",
    "doctor_date": "2011-10-07",
    "doctor_time": "11:27:55",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "193",
    "next_dep": "016",
    "depcode": "015",
    "doctor_time_type_id": 1,
    "hos_guid": null
  },
  {
    "pq_doctor_id": 2,
    "vn": "541007161014",
    "doctor_date": "2011-10-07",
    "doctor_time": "16:12:31",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "193",
    "next_dep": "016",
    "depcode": "015",
    "doctor_time_type_id": 2,
    "hos_guid": null
  },
  {
    "pq_doctor_id": 3,
    "vn": "541007162855",
    "doctor_date": "2011-10-07",
    "doctor_time": "16:42:23",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "193",
    "next_dep": "016",
    "depcode": "015",
    "doctor_time_type_id": 2,
    "hos_guid": null
  },
  {
    "pq_doctor_id": 4,
    "vn": "541007171750",
    "doctor_date": "2011-10-07",
    "doctor_time": "17:19:10",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "193",
    "next_dep": "016",
    "depcode": "015",
    "doctor_time_type_id": 2,
    "hos_guid": null
  },
  {
    "pq_doctor_id": 5,
    "vn": "541007172648",
    "doctor_date": "2011-10-07",
    "doctor_time": "17:41:30",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "193",
    "next_dep": "016",
    "depcode": "015",
    "doctor_time_type_id": 2,
    "hos_guid": null
  },
  {
    "pq_doctor_id": 6,
    "vn": "541007174427",
    "doctor_date": "2011-10-07",
    "doctor_time": "18:14:04",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "193",
    "next_dep": "016",
    "depcode": "015",
    "doctor_time_type_id": 2,
    "hos_guid": null
  },
  {
    "pq_doctor_id": 7,
    "vn": "541010115330",
    "doctor_date": "2011-10-10",
    "doctor_time": "11:58:17",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "082",
    "next_dep": "030",
    "depcode": "015",
    "doctor_time_type_id": 1,
    "hos_guid": null
  },
  {
    "pq_doctor_id": 8,
    "vn": "541010110648",
    "doctor_date": "2011-10-10",
    "doctor_time": "12:07:11",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "999",
    "next_dep": "016",
    "depcode": "016",
    "doctor_time_type_id": 1,
    "hos_guid": null
  }
]
```
