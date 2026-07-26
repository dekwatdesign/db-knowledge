# `opi_usage_unit_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| usage_unit_code | varchar(10) | NO | PRI |  |  |  |
| usage_unit_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| capacity_qty | double(15,3) | YES |  | NULL |  |  |
| eng_usage_unit_name | varchar(200) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| doctor_use | char(1) | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |
| ipd_rx_freq_day | int(11) | YES |  | NULL |  |  |
| auto_calc_first_dose | char(1) | YES |  | NULL |  |  |
| sct_unit_code | varchar(20) | YES |  | NULL |  |  |
| ucum_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_usage_unit_name | usage_unit_name | yes | 1 |
| PRIMARY | usage_unit_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "usage_unit_code": "amp",
    "usage_unit_name": "Amp.",
    "hos_guid": "{88FF46C2-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_usage_unit_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "ipd_rx_freq_day": null,
    "auto_calc_first_dose": null,
    "sct_unit_code": null,
    "ucum_code": null
  },
  {
    "usage_unit_code": "bot",
    "usage_unit_name": "bottle",
    "hos_guid": "{88FF4E0A-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_usage_unit_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "ipd_rx_freq_day": null,
    "auto_calc_first_dose": null,
    "sct_unit_code": null,
    "ucum_code": null
  },
  {
    "usage_unit_code": "cap",
    "usage_unit_name": "แคปซูล",
    "hos_guid": "{88FF5321-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_usage_unit_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "ipd_rx_freq_day": null,
    "auto_calc_first_dose": null,
    "sct_unit_code": null,
    "ucum_code": null
  },
  {
    "usage_unit_code": "cc",
    "usage_unit_name": "ซี.ซี.",
    "hos_guid": "{88FF582A-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_usage_unit_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "ipd_rx_freq_day": null,
    "auto_calc_first_dose": null,
    "sct_unit_code": null,
    "ucum_code": null
  },
  {
    "usage_unit_code": "dro",
    "usage_unit_name": "หยด",
    "hos_guid": "{88FF5D1D-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_usage_unit_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "ipd_rx_freq_day": null,
    "auto_calc_first_dose": null,
    "sct_unit_code": null,
    "ucum_code": null
  },
  {
    "usage_unit_code": "g",
    "usage_unit_name": "กรัม",
    "hos_guid": "{88FF622B-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_usage_unit_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "ipd_rx_freq_day": null,
    "auto_calc_first_dose": null,
    "sct_unit_code": null,
    "ucum_code": null
  },
  {
    "usage_unit_code": "mg",
    "usage_unit_name": "มิลลิกรัม",
    "hos_guid": "{88FF67BE-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_usage_unit_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "ipd_rx_freq_day": null,
    "auto_calc_first_dose": null,
    "sct_unit_code": null,
    "ucum_code": null
  },
  {
    "usage_unit_code": "miu",
    "usage_unit_name": "miu",
    "hos_guid": "{88FF6CDB-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_usage_unit_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "ipd_rx_freq_day": null,
    "auto_calc_first_dose": null,
    "sct_unit_code": null,
    "ucum_code": null
  }
]
```
