# `drugusage_default`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(7) | YES | MUL | NULL |  |  |
| doctor | varchar(6) | YES | MUL | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| sp_use | varchar(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| usage_code | varchar(10) | YES |  | NULL |  |  |
| dose | double(15,3) | YES |  | NULL |  |  |
| frequency_code | varchar(10) | YES |  | NULL |  |  |
| time_code | varchar(10) | YES |  | NULL |  |  |
| usage_unit_code | varchar(10) | YES |  | NULL |  |  |
| line1 | varchar(200) | YES |  | NULL |  |  |
| line2 | varchar(200) | YES |  | NULL |  |  |
| line3 | varchar(200) | YES |  | NULL |  |  |
| usage_lock | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| doctor | doctor | no | 1 |
| icode | icode | no | 1 |
| icode_doctor_unique | icode | yes | 1 |
| icode_doctor_unique | doctor | yes | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_icode_doctor_unique | doctor | yes | 1 |
| ix_icode_doctor_unique | icode | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "icode": "1000072",
    "doctor": "365",
    "drugusage": "0608",
    "sp_use": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "usage_code": null,
    "dose": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "line1": null,
    "line2": null,
    "line3": null,
    "usage_lock": null
  },
  {
    "icode": "1000002",
    "doctor": "",
    "drugusage": "",
    "sp_use": "1101299",
    "hos_guid": null,
    "hos_guid_ext": null,
    "usage_code": null,
    "dose": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "line1": null,
    "line2": null,
    "line3": null,
    "usage_lock": null
  },
  {
    "icode": "1600016",
    "doctor": "",
    "drugusage": "",
    "sp_use": "1102631",
    "hos_guid": null,
    "hos_guid_ext": null,
    "usage_code": null,
    "dose": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "line1": null,
    "line2": null,
    "line3": null,
    "usage_lock": null
  },
  {
    "icode": "1000039",
    "doctor": "",
    "drugusage": "",
    "sp_use": "1148087",
    "hos_guid": null,
    "hos_guid_ext": null,
    "usage_code": null,
    "dose": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "line1": null,
    "line2": null,
    "line3": null,
    "usage_lock": null
  },
  {
    "icode": "1660004",
    "doctor": "",
    "drugusage": "",
    "sp_use": "1149012",
    "hos_guid": null,
    "hos_guid_ext": null,
    "usage_code": null,
    "dose": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "line1": null,
    "line2": null,
    "line3": null,
    "usage_lock": null
  },
  {
    "icode": "1610043",
    "doctor": "",
    "drugusage": "",
    "sp_use": "1175501",
    "hos_guid": null,
    "hos_guid_ext": null,
    "usage_code": null,
    "dose": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "line1": null,
    "line2": null,
    "line3": null,
    "usage_lock": null
  },
  {
    "icode": "1000072",
    "doctor": "0073",
    "drugusage": "0168",
    "sp_use": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "usage_code": null,
    "dose": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "line1": null,
    "line2": null,
    "line3": null,
    "usage_lock": null
  },
  {
    "icode": "1600016",
    "doctor": "367",
    "drugusage": "",
    "sp_use": "1182281",
    "hos_guid": null,
    "hos_guid_ext": null,
    "usage_code": null,
    "dose": null,
    "frequency_code": null,
    "time_code": null,
    "usage_unit_code": null,
    "line1": null,
    "line2": null,
    "line3": null,
    "usage_lock": null
  }
]
```
