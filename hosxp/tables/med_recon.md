# `med_recon`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_recon_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| dep_type | char(3) | YES |  | NULL |  |  |
| medication_survey | char(1) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| med_recon_date | date | YES |  | NULL |  |  |
| add_doctor_order_sheet | char(1) | YES |  | NULL |  |  |
| ipd_doctor_order_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_ipd_doctor_order_id | ipd_doctor_order_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | med_recon_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "med_recon_id": 6,
    "vn": "680000036",
    "dep_type": "IPD",
    "medication_survey": null,
    "officer_id": 75,
    "note": null,
    "hn": "670000426",
    "med_recon_date": "2025-01-09",
    "add_doctor_order_sheet": "Y",
    "ipd_doctor_order_id": 14
  },
  {
    "med_recon_id": 7,
    "vn": "680519102301",
    "dep_type": "OPD",
    "medication_survey": null,
    "officer_id": 22,
    "note": null,
    "hn": "650005774",
    "med_recon_date": "2025-05-19",
    "add_doctor_order_sheet": "N",
    "ipd_doctor_order_id": null
  },
  {
    "med_recon_id": 16,
    "vn": "680001962",
    "dep_type": "IPD",
    "medication_survey": null,
    "officer_id": 18,
    "note": null,
    "hn": "680001290",
    "med_recon_date": "2025-12-19",
    "add_doctor_order_sheet": "Y",
    "ipd_doctor_order_id": 68
  },
  {
    "med_recon_id": 18,
    "vn": "680001963",
    "dep_type": "IPD",
    "medication_survey": "Y",
    "officer_id": 18,
    "note": null,
    "hn": "560001491",
    "med_recon_date": "2025-12-19",
    "add_doctor_order_sheet": "Y",
    "ipd_doctor_order_id": 70
  },
  {
    "med_recon_id": 21,
    "vn": "680001977",
    "dep_type": "IPD",
    "medication_survey": null,
    "officer_id": 34,
    "note": null,
    "hn": "680001382",
    "med_recon_date": "2025-12-23",
    "add_doctor_order_sheet": "Y",
    "ipd_doctor_order_id": 167
  },
  {
    "med_recon_id": 22,
    "vn": "680001983",
    "dep_type": "IPD",
    "medication_survey": "Y",
    "officer_id": 22,
    "note": null,
    "hn": "680001388",
    "med_recon_date": "2025-12-24",
    "add_doctor_order_sheet": "N",
    "ipd_doctor_order_id": 181
  },
  {
    "med_recon_id": 23,
    "vn": "690000017",
    "dep_type": "IPD",
    "medication_survey": "Y",
    "officer_id": 18,
    "note": null,
    "hn": "680001388",
    "med_recon_date": "2026-01-07",
    "add_doctor_order_sheet": "Y",
    "ipd_doctor_order_id": 330
  },
  {
    "med_recon_id": 70,
    "vn": "680001963",
    "dep_type": "IPD",
    "medication_survey": null,
    "officer_id": 18,
    "note": null,
    "hn": "560001491",
    "med_recon_date": "2025-12-19",
    "add_doctor_order_sheet": "Y",
    "ipd_doctor_order_id": 71
  }
]
```
