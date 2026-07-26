# `student_vaccine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_vaccine_id | int(11) | NO | PRI | 0 |  |  |
| student_vaccine_name | varchar(150) | YES | UNI | NULL |  |  |
| vaccine_code | varchar(10) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| export_vaccine_code | varchar(10) | YES | MUL | NULL |  |  |
| combine_vaccine | char(1) | YES |  | NULL |  |  |
| check_code | varchar(10) | YES |  | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_vaccine_code | export_vaccine_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_student_vaccine_name | student_vaccine_name | yes | 1 |
| ix_vaccine_code | vaccine_code | yes | 1 |
| PRIMARY | student_vaccine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "student_vaccine_id": 1,
    "student_vaccine_name": "วัคซีน dT เข็มที่ 1",
    "vaccine_code": "dT1",
    "hos_guid": null,
    "export_vaccine_code": "021",
    "combine_vaccine": "N",
    "check_code": "dT1",
    "icode": null,
    "active_status": "Y"
  },
  {
    "student_vaccine_id": 2,
    "student_vaccine_name": "วัคซีน dT เข็มที่ 2",
    "vaccine_code": "dT2",
    "hos_guid": null,
    "export_vaccine_code": "022",
    "combine_vaccine": "N",
    "check_code": "dT2",
    "icode": null,
    "active_status": "Y"
  },
  {
    "student_vaccine_id": 3,
    "student_vaccine_name": "วัคซีน BCG กระตุ้นครั้งที่ 1",
    "vaccine_code": "BCG",
    "hos_guid": null,
    "export_vaccine_code": "010",
    "combine_vaccine": "N",
    "check_code": "BCG",
    "icode": null,
    "active_status": "Y"
  },
  {
    "student_vaccine_id": 4,
    "student_vaccine_name": "วัคซีน MMR",
    "vaccine_code": "MMR",
    "hos_guid": null,
    "export_vaccine_code": "072",
    "combine_vaccine": "N",
    "check_code": "MMR",
    "icode": null,
    "active_status": "Y"
  },
  {
    "student_vaccine_id": 5,
    "student_vaccine_name": "วัคซีน OPV กระตุ้นครั้งที่ 2",
    "vaccine_code": "OPV6",
    "hos_guid": null,
    "export_vaccine_code": "086",
    "combine_vaccine": "N",
    "check_code": "OPV6",
    "icode": null,
    "active_status": "Y"
  }
]
```
