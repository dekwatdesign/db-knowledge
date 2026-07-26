# `hospital_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| charge_new_patient | char(1) | YES |  | NULL |  |  |
| no_multiple_charge | char(1) | YES |  | NULL |  |  |
| pt_subtype | int(11) | YES |  | NULL |  |  |
| field_hospital_code | char(1) | YES |  | NULL |  |  |
| hospital_department_name | varchar(200) | YES |  | NULL |  |  |
| hospital_department_branch | varchar(100) | YES |  | NULL |  |  |
| hospital_department_name_eng | varchar(200) | YES |  | NULL |  |  |
| hospital_department_addr | text | YES |  | NULL |  |  |
| hospital_department_addr_eng | text | YES |  | NULL |  |  |
| office_hours | varchar(200) | YES |  | NULL |  |  |
| hospital_department_tel | varchar(50) | YES |  | NULL |  |  |
| hospital_department_email | varchar(100) | YES |  | NULL |  |  |
| hospital_department_line | varchar(100) | YES |  | NULL |  |  |
| clinic_license_number | varchar(50) | YES |  | NULL |  |  |
| hospital_department_tax_id | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "id": 1,
    "name": "สาขา ก.",
    "hos_guid": null,
    "charge_new_patient": null,
    "no_multiple_charge": null,
    "pt_subtype": null,
    "field_hospital_code": null,
    "hospital_department_name": null,
    "hospital_department_branch": null,
    "hospital_department_name_eng": null,
    "hospital_department_addr": null,
    "hospital_department_addr_eng": null,
    "office_hours": null,
    "hospital_department_tel": null,
    "hospital_department_email": null,
    "hospital_department_line": null,
    "clinic_license_number": null,
    "hospital_department_tax_id": null
  },
  {
    "id": 2,
    "name": "สาขา ข.",
    "hos_guid": null,
    "charge_new_patient": null,
    "no_multiple_charge": null,
    "pt_subtype": null,
    "field_hospital_code": null,
    "hospital_department_name": null,
    "hospital_department_branch": null,
    "hospital_department_name_eng": null,
    "hospital_department_addr": null,
    "hospital_department_addr_eng": null,
    "office_hours": null,
    "hospital_department_tel": null,
    "hospital_department_email": null,
    "hospital_department_line": null,
    "clinic_license_number": null,
    "hospital_department_tax_id": null
  },
  {
    "id": 3,
    "name": "สาขา ค.",
    "hos_guid": null,
    "charge_new_patient": null,
    "no_multiple_charge": null,
    "pt_subtype": null,
    "field_hospital_code": null,
    "hospital_department_name": null,
    "hospital_department_branch": null,
    "hospital_department_name_eng": null,
    "hospital_department_addr": null,
    "hospital_department_addr_eng": null,
    "office_hours": null,
    "hospital_department_tel": null,
    "hospital_department_email": null,
    "hospital_department_line": null,
    "clinic_license_number": null,
    "hospital_department_tax_id": null
  }
]
```
