# `user_mru_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| user_mru_list_id | int(11) | NO | PRI | 0 |  |  |
| officer_id | int(11) | YES | MUL | NULL |  |  |
| mru_date | date | YES | MUL | NULL |  |  |
| mru_name | varchar(200) | YES |  | NULL |  |  |
| mru_code | varchar(100) | YES |  | NULL |  |  |
| mru_key | varchar(200) | YES |  | NULL |  |  |
| rtti_name | varchar(200) | YES |  | NULL |  |  |
| rtti_function_name | varchar(200) | YES |  | NULL |  |  |
| rtti_parameter | varchar(200) | YES |  | NULL |  |  |
| rtti_package | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_id | officer_id | no | 1 |
| ix_user_date | officer_id | no | 1 |
| ix_user_date | mru_date | no | 2 |
| ix_user_date_index | mru_date | no | 1 |
| ix_user_date_index | officer_id | no | 2 |
| PRIMARY | user_mru_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "user_mru_list_id": 1,
    "officer_id": 0,
    "mru_date": "2024-02-09",
    "mru_name": "[MASKED_FULLNAME]",
    "mru_code": "doctor",
    "mru_key": "670209103004",
    "rtti_name": "DoctorWorkBenchEntryFrameUnit.TDoctorWorkBenchEntryFrame",
    "rtti_function_name": "DoShowFormModal",
    "rtti_parameter": "vn",
    "rtti_package": "HOSxPDoctorWorkbenchPackage.bpl"
  },
  {
    "user_mru_list_id": 2,
    "officer_id": 0,
    "mru_date": "2024-03-27",
    "mru_name": "[MASKED_FULLNAME]",
    "mru_code": "ovst",
    "mru_key": "670327140026",
    "rtti_name": "PatientVisitEntryUnit.TPatientVisitEntryForm",
    "rtti_function_name": "DoShowFormModal",
    "rtti_parameter": "vn",
    "rtti_package": ""
  },
  {
    "user_mru_list_id": 3,
    "officer_id": 0,
    "mru_date": "2024-03-28",
    "mru_name": "[MASKED_FULLNAME]",
    "mru_code": "ovst",
    "mru_key": "670327092030",
    "rtti_name": "PatientVisitEntryUnit.TPatientVisitEntryForm",
    "rtti_function_name": "DoShowFormModal",
    "rtti_parameter": "vn",
    "rtti_package": ""
  },
  {
    "user_mru_list_id": 4,
    "officer_id": 0,
    "mru_date": "2024-03-28",
    "mru_name": "[MASKED_FULLNAME]",
    "mru_code": "ovst",
    "mru_key": "670104113008",
    "rtti_name": "PatientVisitEntryUnit.TPatientVisitEntryForm",
    "rtti_function_name": "DoShowFormModal",
    "rtti_parameter": "vn",
    "rtti_package": ""
  },
  {
    "user_mru_list_id": 5,
    "officer_id": 0,
    "mru_date": "2024-10-01",
    "mru_name": "[MASKED_FULLNAME]",
    "mru_code": "doctor",
    "mru_key": "671001083000",
    "rtti_name": "DoctorWorkBenchEntryFrameUnit.TDoctorWorkBenchEntryFrame",
    "rtti_function_name": "DoShowFormModal",
    "rtti_parameter": "vn",
    "rtti_package": "HOSxPDoctorWorkbenchPackage.bpl"
  },
  {
    "user_mru_list_id": 6,
    "officer_id": 0,
    "mru_date": "2024-10-02",
    "mru_name": "[MASKED_FULLNAME]",
    "mru_code": "doctor",
    "mru_key": "671002071336",
    "rtti_name": "DoctorWorkBenchEntryFrameUnit.TDoctorWorkBenchEntryFrame",
    "rtti_function_name": "DoShowFormModal",
    "rtti_parameter": "vn",
    "rtti_package": "HOSxPDoctorWorkbenchPackage.bpl"
  },
  {
    "user_mru_list_id": 7,
    "officer_id": 0,
    "mru_date": "2024-10-03",
    "mru_name": "[MASKED_FULLNAME]",
    "mru_code": "doctor",
    "mru_key": "671003083026",
    "rtti_name": "DoctorWorkBenchEntryFrameUnit.TDoctorWorkBenchEntryFrame",
    "rtti_function_name": "DoShowFormModal",
    "rtti_parameter": "vn",
    "rtti_package": "HOSxPDoctorWorkbenchPackage.bpl"
  },
  {
    "user_mru_list_id": 8,
    "officer_id": 0,
    "mru_date": "2024-10-03",
    "mru_name": "[MASKED_FULLNAME]",
    "mru_code": "doctor",
    "mru_key": "671003083010",
    "rtti_name": "DoctorWorkBenchEntryFrameUnit.TDoctorWorkBenchEntryFrame",
    "rtti_function_name": "DoShowFormModal",
    "rtti_parameter": "vn",
    "rtti_package": "HOSxPDoctorWorkbenchPackage.bpl"
  }
]
```
