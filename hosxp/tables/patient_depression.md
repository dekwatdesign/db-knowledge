# `patient_depression`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_depression_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| depression_status_id | int(11) | YES |  | NULL |  |  |
| register_date | date | YES |  | NULL |  |  |
| discharge | char(1) | YES |  | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_depression_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_depression_id": 23,
    "hn": "530225652",
    "depression_status_id": null,
    "register_date": "2014-10-20",
    "discharge": null,
    "discharge_date": null,
    "hos_guid": null
  },
  {
    "patient_depression_id": 29,
    "hn": "610000020",
    "depression_status_id": null,
    "register_date": "2018-11-21",
    "discharge": null,
    "discharge_date": null,
    "hos_guid": null
  },
  {
    "patient_depression_id": 30,
    "hn": "600001100",
    "depression_status_id": 1,
    "register_date": "2018-11-23",
    "discharge": null,
    "discharge_date": null,
    "hos_guid": null
  },
  {
    "patient_depression_id": 33,
    "hn": "590001183",
    "depression_status_id": null,
    "register_date": "2019-05-24",
    "discharge": null,
    "discharge_date": null,
    "hos_guid": null
  },
  {
    "patient_depression_id": 52,
    "hn": "530156348",
    "depression_status_id": null,
    "register_date": "2020-12-24",
    "discharge": null,
    "discharge_date": null,
    "hos_guid": null
  },
  {
    "patient_depression_id": 53,
    "hn": "620001501",
    "depression_status_id": null,
    "register_date": "2021-10-04",
    "discharge": null,
    "discharge_date": null,
    "hos_guid": null
  },
  {
    "patient_depression_id": 66,
    "hn": "660001255",
    "depression_status_id": null,
    "register_date": "2024-08-20",
    "discharge": null,
    "discharge_date": null,
    "hos_guid": null
  },
  {
    "patient_depression_id": 67,
    "hn": "670000001",
    "depression_status_id": null,
    "register_date": "2024-08-20",
    "discharge": null,
    "discharge_date": null,
    "hos_guid": null
  }
]
```
