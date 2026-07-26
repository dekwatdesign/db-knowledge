# `dt_case_request_clinic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_case_request_clinic_id | int(11) | NO | PRI | 0 |  |  |
| dt_case_request_clinic_name | varchar(250) | YES |  | NULL |  |  |
| dt_case_req_clinic_group_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_case_request_clinic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dt_case_request_clinic_id": 1,
    "dt_case_request_clinic_name": "ทั่วไป",
    "dt_case_req_clinic_group_id": null
  },
  {
    "dt_case_request_clinic_id": 2,
    "dt_case_request_clinic_name": "จัดฟัน",
    "dt_case_req_clinic_group_id": null
  },
  {
    "dt_case_request_clinic_id": 3,
    "dt_case_request_clinic_name": "Crown and Brigde",
    "dt_case_req_clinic_group_id": null
  },
  {
    "dt_case_request_clinic_id": 4,
    "dt_case_request_clinic_name": "Operative",
    "dt_case_req_clinic_group_id": null
  },
  {
    "dt_case_request_clinic_id": 5,
    "dt_case_request_clinic_name": "Endo",
    "dt_case_req_clinic_group_id": null
  },
  {
    "dt_case_request_clinic_id": 6,
    "dt_case_request_clinic_name": "Posth",
    "dt_case_req_clinic_group_id": null
  },
  {
    "dt_case_request_clinic_id": 7,
    "dt_case_request_clinic_name": "Perio",
    "dt_case_req_clinic_group_id": null
  },
  {
    "dt_case_request_clinic_id": 8,
    "dt_case_request_clinic_name": "OralMed",
    "dt_case_req_clinic_group_id": null
  }
]
```
