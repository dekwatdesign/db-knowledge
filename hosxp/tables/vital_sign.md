# `vital_sign`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vital_sign_id | int(11) | NO | PRI | 0 |  |  |
| vital_sign_name | varchar(200) | YES |  | NULL |  |  |
| vital_sign_unit | varchar(100) | YES |  | NULL |  |  |
| vital_sign_std_min | varchar(200) | YES |  | NULL |  |  |
| vital_sign_std_max | varchar(200) | YES |  | NULL |  |  |
| vital_sign_numbered | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| vital_sign_step | int(11) | YES |  | NULL |  |  |
| show_alert | char(1) | YES |  | NULL |  |  |
| alert_min_value | double(15,3) | YES |  | NULL |  |  |
| alert_max_value | double(15,3) | YES |  | NULL |  |  |
| abort_over_max_value | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vital_sign_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vital_sign_id": 1,
    "vital_sign_name": "Temperature",
    "vital_sign_unit": "C",
    "vital_sign_std_min": "36.5",
    "vital_sign_std_max": "37.5",
    "vital_sign_numbered": null,
    "hos_guid": "",
    "vital_sign_step": null,
    "show_alert": null,
    "alert_min_value": 36.5,
    "alert_max_value": 37.5,
    "abort_over_max_value": null
  },
  {
    "vital_sign_id": 2,
    "vital_sign_name": "Pulse",
    "vital_sign_unit": "bpm",
    "vital_sign_std_min": null,
    "vital_sign_std_max": null,
    "vital_sign_numbered": "",
    "hos_guid": "",
    "vital_sign_step": null,
    "show_alert": null,
    "alert_min_value": null,
    "alert_max_value": null,
    "abort_over_max_value": null
  },
  {
    "vital_sign_id": 3,
    "vital_sign_name": "Respiratory Rate",
    "vital_sign_unit": "bpm",
    "vital_sign_std_min": null,
    "vital_sign_std_max": null,
    "vital_sign_numbered": null,
    "hos_guid": "",
    "vital_sign_step": null,
    "show_alert": null,
    "alert_min_value": null,
    "alert_max_value": null,
    "abort_over_max_value": null
  },
  {
    "vital_sign_id": 4,
    "vital_sign_name": "Blood Pressure Systolic",
    "vital_sign_unit": null,
    "vital_sign_std_min": null,
    "vital_sign_std_max": null,
    "vital_sign_numbered": null,
    "hos_guid": "",
    "vital_sign_step": null,
    "show_alert": null,
    "alert_min_value": 90.0,
    "alert_max_value": 130.0,
    "abort_over_max_value": null
  },
  {
    "vital_sign_id": 5,
    "vital_sign_name": "Blood Pressure Diastolic",
    "vital_sign_unit": null,
    "vital_sign_std_min": null,
    "vital_sign_std_max": null,
    "vital_sign_numbered": null,
    "hos_guid": "",
    "vital_sign_step": null,
    "show_alert": null,
    "alert_min_value": 60.0,
    "alert_max_value": 90.0,
    "abort_over_max_value": null
  },
  {
    "vital_sign_id": 6,
    "vital_sign_name": "Height",
    "vital_sign_unit": "Cm.",
    "vital_sign_std_min": null,
    "vital_sign_std_max": null,
    "vital_sign_numbered": null,
    "hos_guid": "",
    "vital_sign_step": null,
    "show_alert": null,
    "alert_min_value": null,
    "alert_max_value": null,
    "abort_over_max_value": null
  },
  {
    "vital_sign_id": 7,
    "vital_sign_name": "Weight",
    "vital_sign_unit": "Kgs.",
    "vital_sign_std_min": null,
    "vital_sign_std_max": null,
    "vital_sign_numbered": null,
    "hos_guid": "",
    "vital_sign_step": null,
    "show_alert": null,
    "alert_min_value": null,
    "alert_max_value": null,
    "abort_over_max_value": null
  },
  {
    "vital_sign_id": 8,
    "vital_sign_name": "Fasting blood sugar",
    "vital_sign_unit": "mg/dL",
    "vital_sign_std_min": "70",
    "vital_sign_std_max": "100",
    "vital_sign_numbered": null,
    "hos_guid": "",
    "vital_sign_step": null,
    "show_alert": null,
    "alert_min_value": 70.0,
    "alert_max_value": 100.0,
    "abort_over_max_value": null
  }
]
```
