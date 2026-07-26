# `patient_employer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| employer_name | varchar(100) | YES | MUL | NULL |  |  |
| employer_type | int(11) | YES |  | NULL |  |  |
| foreign_office | varchar(150) | YES |  | NULL |  |  |
| employer_cid | varchar(13) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| office_hospcode | varchar(9) | YES |  | NULL |  |  |
| register_date | date | YES |  | NULL |  |  |
| patient_employee_type_id | int(11) | YES |  | NULL |  |  |
| fwf_code | varchar(13) | YES |  | NULL |  |  |
| employer_person_name | varchar(100) | YES |  | NULL |  |  |
| employer_phone | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| employer_name | employer_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "hn": "550000794",
    "employer_name": "",
    "employer_type": -1,
    "foreign_office": "รร.ทอรัก",
    "employer_cid": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "office_hospcode": null,
    "register_date": null,
    "patient_employee_type_id": null,
    "fwf_code": null,
    "employer_person_name": null,
    "employer_phone": null
  },
  {
    "hn": "640009092",
    "employer_name": "ห้างหุ้นส่วนจำกัด ไผ่ดำพลาสติก",
    "employer_type": 1,
    "foreign_office": "",
    "employer_cid": "",
    "hos_guid": null,
    "hos_guid_ext": null,
    "office_hospcode": null,
    "register_date": null,
    "patient_employee_type_id": null,
    "fwf_code": null,
    "employer_person_name": null,
    "employer_phone": null
  }
]
```
