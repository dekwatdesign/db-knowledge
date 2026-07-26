# `dt_case_request_work_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_case_request_work_type_id | int(11) | NO | PRI | 0 |  |  |
| dt_case_request_work_type_name | varchar(250) | YES |  | NULL |  |  |
| dt_case_request_clinic_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_case_request_clinic_id | dt_case_request_clinic_id | no | 1 |
| PRIMARY | dt_case_request_work_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dt_case_request_work_type_id": 1,
    "dt_case_request_work_type_name": "ถอนฟัน",
    "dt_case_request_clinic_id": 1
  },
  {
    "dt_case_request_work_type_id": 2,
    "dt_case_request_work_type_name": "อุดฟัน",
    "dt_case_request_clinic_id": 1
  },
  {
    "dt_case_request_work_type_id": 3,
    "dt_case_request_work_type_name": "ขูดหินปูน",
    "dt_case_request_clinic_id": 1
  },
  {
    "dt_case_request_work_type_id": 4,
    "dt_case_request_work_type_name": "จัดฟัน",
    "dt_case_request_clinic_id": 2
  },
  {
    "dt_case_request_work_type_id": 5,
    "dt_case_request_work_type_name": "Crown",
    "dt_case_request_clinic_id": 3
  },
  {
    "dt_case_request_work_type_id": 6,
    "dt_case_request_work_type_name": "Brigde",
    "dt_case_request_clinic_id": 3
  },
  {
    "dt_case_request_work_type_id": 7,
    "dt_case_request_work_type_name": "Preventive",
    "dt_case_request_clinic_id": 5
  },
  {
    "dt_case_request_work_type_id": 9,
    "dt_case_request_work_type_name": "RPT",
    "dt_case_request_clinic_id": 6
  }
]
```
