# `iclaim_ipd_doctype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_ipd_doctype_id | int(11) | NO | PRI | 0 |  |  |
| iclaim_ipd_doctype_parameter | varchar(250) | YES |  | NULL |  |  |
| iclaim_ipd_doctype_desc | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | iclaim_ipd_doctype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "iclaim_ipd_doctype_id": 31,
    "iclaim_ipd_doctype_parameter": "ID_CARD",
    "iclaim_ipd_doctype_desc": "ID Card Copy/Passport"
  },
  {
    "iclaim_ipd_doctype_id": 32,
    "iclaim_ipd_doctype_parameter": "NAME_CHANGE",
    "iclaim_ipd_doctype_desc": "Change name copy"
  },
  {
    "iclaim_ipd_doctype_id": 33,
    "iclaim_ipd_doctype_parameter": "INSURANCE_CARD",
    "iclaim_ipd_doctype_desc": "Group Policy Card copy"
  },
  {
    "iclaim_ipd_doctype_id": 36,
    "iclaim_ipd_doctype_parameter": "ADMISSION_ORDER_SHEET",
    "iclaim_ipd_doctype_desc": "Order แรกรับ (คำสั่งการรักษาของแพทย์ในวัน Admit)"
  },
  {
    "iclaim_ipd_doctype_id": 37,
    "iclaim_ipd_doctype_parameter": "ANESTHESIA_RECORD",
    "iclaim_ipd_doctype_desc": "Anesthesia Record"
  },
  {
    "iclaim_ipd_doctype_id": 38,
    "iclaim_ipd_doctype_parameter": "CONSULTATION_FORM",
    "iclaim_ipd_doctype_desc": "Consultation for patient"
  },
  {
    "iclaim_ipd_doctype_id": 39,
    "iclaim_ipd_doctype_parameter": "DISCHARGE_SUMMARY",
    "iclaim_ipd_doctype_desc": "Discharge summary"
  },
  {
    "iclaim_ipd_doctype_id": 40,
    "iclaim_ipd_doctype_parameter": "EMERGENCY_RECORD",
    "iclaim_ipd_doctype_desc": "Emergency Record"
  }
]
```
