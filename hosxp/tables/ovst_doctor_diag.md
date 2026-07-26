# `ovst_doctor_diag`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_doctor_diag_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |
| diag_text | text | YES |  | NULL |  |  |
| diag_datetime | datetime | YES |  | NULL |  |  |
| ovst_doctor_diag_st_id | int(11) | YES |  | NULL |  |  |
| sct_id | varchar(18) | YES |  | NULL |  |  |
| hl7_condition_clinical_status_id | int(11) | YES |  | NULL |  |  |
| body_structure_sct_id | varchar(18) | YES |  | NULL |  |  |
| body_structure_sct_name | varchar(50) | YES |  | NULL |  |  |
| severity_sct_id | varchar(18) | YES |  | NULL |  |  |
| severity_sct_name | varchar(25) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_doctor_diag_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_doctor_diag_id": 4,
    "vn": "600629083030",
    "doctor_code": "068",
    "diag_text": "สมาธิสั้น\r\n",
    "diag_datetime": "2017-06-29 09:22:13",
    "ovst_doctor_diag_st_id": null,
    "sct_id": null,
    "hl7_condition_clinical_status_id": null,
    "body_structure_sct_id": null,
    "body_structure_sct_name": null,
    "severity_sct_id": null,
    "severity_sct_name": null,
    "hos_guid": null
  },
  {
    "ovst_doctor_diag_id": 12,
    "vn": "600913093050",
    "doctor_code": "319",
    "diag_text": "ADHD with LD",
    "diag_datetime": "2017-09-13 09:25:41",
    "ovst_doctor_diag_st_id": null,
    "sct_id": null,
    "hl7_condition_clinical_status_id": null,
    "body_structure_sct_id": null,
    "body_structure_sct_name": null,
    "severity_sct_id": null,
    "severity_sct_name": null,
    "hos_guid": null
  },
  {
    "ovst_doctor_diag_id": 13,
    "vn": "601018090110",
    "doctor_code": "319",
    "diag_text": "ADHD",
    "diag_datetime": "2017-10-18 09:56:43",
    "ovst_doctor_diag_st_id": null,
    "sct_id": null,
    "hl7_condition_clinical_status_id": null,
    "body_structure_sct_id": null,
    "body_structure_sct_name": null,
    "severity_sct_id": null,
    "severity_sct_name": null,
    "hos_guid": null
  },
  {
    "ovst_doctor_diag_id": 14,
    "vn": "601018090110",
    "doctor_code": "319",
    "diag_text": "R/O LD (math,writing)",
    "diag_datetime": "2017-10-18 09:56:56",
    "ovst_doctor_diag_st_id": null,
    "sct_id": null,
    "hl7_condition_clinical_status_id": null,
    "body_structure_sct_id": null,
    "body_structure_sct_name": null,
    "severity_sct_id": null,
    "severity_sct_name": null,
    "hos_guid": null
  },
  {
    "ovst_doctor_diag_id": 15,
    "vn": "601115093016",
    "doctor_code": "319",
    "diag_text": "ADHD + R/O LD reading",
    "diag_datetime": "2017-11-15 10:26:35",
    "ovst_doctor_diag_st_id": null,
    "sct_id": null,
    "hl7_condition_clinical_status_id": null,
    "body_structure_sct_id": null,
    "body_structure_sct_name": null,
    "severity_sct_id": null,
    "severity_sct_name": null,
    "hos_guid": null
  },
  {
    "ovst_doctor_diag_id": 40,
    "vn": "620725083050",
    "doctor_code": "068",
    "diag_text": "borderlin IQ\r\n",
    "diag_datetime": "2019-07-25 09:17:02",
    "ovst_doctor_diag_st_id": null,
    "sct_id": null,
    "hl7_condition_clinical_status_id": null,
    "body_structure_sct_id": null,
    "body_structure_sct_name": null,
    "severity_sct_id": null,
    "severity_sct_name": null,
    "hos_guid": null
  },
  {
    "ovst_doctor_diag_id": 41,
    "vn": "620725093030",
    "doctor_code": "068",
    "diag_text": "motor tics",
    "diag_datetime": "2019-07-25 09:35:13",
    "ovst_doctor_diag_st_id": null,
    "sct_id": null,
    "hl7_condition_clinical_status_id": null,
    "body_structure_sct_id": null,
    "body_structure_sct_name": null,
    "severity_sct_id": null,
    "severity_sct_name": null,
    "hos_guid": null
  },
  {
    "ovst_doctor_diag_id": 44,
    "vn": "640505102013",
    "doctor_code": "370",
    "diag_text": "k30\r\n",
    "diag_datetime": "2021-05-05 10:43:42",
    "ovst_doctor_diag_st_id": null,
    "sct_id": null,
    "hl7_condition_clinical_status_id": null,
    "body_structure_sct_id": null,
    "body_structure_sct_name": null,
    "severity_sct_id": null,
    "severity_sct_name": null,
    "hos_guid": null
  }
]
```
