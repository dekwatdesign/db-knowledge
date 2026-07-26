# `reporttemplate_parameter`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| reporttemplate_parameter_id | int(11) | NO | PRI | 0 |  |  |
| reporttemplate_name | varchar(150) | YES | MUL | NULL |  |  |
| parameter_name | varchar(250) | YES |  | NULL |  |  |
| reporttemplate_parameter_type_id | int(11) | YES |  | NULL |  |  |
| parameter_value | varchar(250) | YES |  | NULL |  |  |
| parameter_note | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| parameter_value_date | date | YES |  | NULL |  |  |
| parameter_value_time | time | YES |  | NULL |  |  |
| parameter_value_datetime | datetime | YES |  | NULL |  |  |
| reporttemplate_param_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_reporttemplate_name | reporttemplate_name | no | 1 |
| PRIMARY | reporttemplate_parameter_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "reporttemplate_parameter_id": 1,
    "reporttemplate_name": "XE-FORM-COVID-19-LABEL-1",
    "parameter_name": "vaccine_inventory_lot_id",
    "reporttemplate_parameter_type_id": 1,
    "parameter_value": "2",
    "parameter_note": null,
    "hos_guid": null,
    "parameter_value_date": null,
    "parameter_value_time": null,
    "parameter_value_datetime": null,
    "reporttemplate_param_type_id": 2
  },
  {
    "reporttemplate_parameter_id": 40,
    "reporttemplate_name": "XE-FORM-DOCTOR-CERT-1",
    "parameter_name": "doctor_cert_id",
    "reporttemplate_parameter_type_id": 1,
    "parameter_value": "2",
    "parameter_note": null,
    "hos_guid": null,
    "parameter_value_date": null,
    "parameter_value_time": null,
    "parameter_value_datetime": null,
    "reporttemplate_param_type_id": 2
  },
  {
    "reporttemplate_parameter_id": 41,
    "reporttemplate_name": "XE-FORM-DOCTOR-CERT-19",
    "parameter_name": "doctor_cert_id",
    "reporttemplate_parameter_type_id": 0,
    "parameter_value": "2",
    "parameter_note": null,
    "hos_guid": null,
    "parameter_value_date": null,
    "parameter_value_time": null,
    "parameter_value_datetime": null,
    "reporttemplate_param_type_id": 2
  },
  {
    "reporttemplate_parameter_id": 44,
    "reporttemplate_name": "XE-FORM-DOCTOR-CERT-3",
    "parameter_name": "doctor_cert_id",
    "reporttemplate_parameter_type_id": 0,
    "parameter_value": "3",
    "parameter_note": null,
    "hos_guid": null,
    "parameter_value_date": null,
    "parameter_value_time": null,
    "parameter_value_datetime": null,
    "reporttemplate_param_type_id": 2
  },
  {
    "reporttemplate_parameter_id": 43,
    "reporttemplate_name": "XE-FORM-DOCTOR-CERT-2",
    "parameter_name": "doctor_cert_id",
    "reporttemplate_parameter_type_id": 0,
    "parameter_value": "2",
    "parameter_note": null,
    "hos_guid": null,
    "parameter_value_date": null,
    "parameter_value_time": null,
    "parameter_value_datetime": null,
    "reporttemplate_param_type_id": 2
  },
  {
    "reporttemplate_parameter_id": 59,
    "reporttemplate_name": "XE-FORM-OPDCARD",
    "parameter_name": "vn",
    "reporttemplate_parameter_type_id": 0,
    "parameter_value": "611216101818",
    "parameter_note": null,
    "hos_guid": null,
    "parameter_value_date": null,
    "parameter_value_time": null,
    "parameter_value_datetime": null,
    "reporttemplate_param_type_id": 1
  },
  {
    "reporttemplate_parameter_id": 61,
    "reporttemplate_name": "XE-FORM-IPD-DOCTOR FOR ADMIT",
    "parameter_name": "an",
    "reporttemplate_parameter_type_id": 0,
    "parameter_value": null,
    "parameter_note": null,
    "hos_guid": null,
    "parameter_value_date": null,
    "parameter_value_time": null,
    "parameter_value_datetime": null,
    "reporttemplate_param_type_id": 1
  }
]
```
