# `vaccine_moph_export`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vaccine_moph_export_id | int(11) | NO | PRI | 0 |  |  |
| vaccine_manufacturer_id | int(11) | YES | MUL | NULL |  |  |
| export_vaccine_code | varchar(10) | YES |  | NULL |  |  |
| vaccine_dose_no | int(11) | YES |  | NULL |  |  |
| f43_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique | vaccine_manufacturer_id | yes | 1 |
| ix_unique | export_vaccine_code | yes | 2 |
| ix_unique | vaccine_dose_no | yes | 3 |
| PRIMARY | vaccine_moph_export_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vaccine_moph_export_id": 1,
    "vaccine_manufacturer_id": 1,
    "export_vaccine_code": "C19",
    "vaccine_dose_no": 1,
    "f43_code": "CA1"
  },
  {
    "vaccine_moph_export_id": 2,
    "vaccine_manufacturer_id": 1,
    "export_vaccine_code": "C19",
    "vaccine_dose_no": 2,
    "f43_code": "CA2"
  },
  {
    "vaccine_moph_export_id": 12,
    "vaccine_manufacturer_id": 1,
    "export_vaccine_code": "C19",
    "vaccine_dose_no": 3,
    "f43_code": "CA3"
  },
  {
    "vaccine_moph_export_id": 11,
    "vaccine_manufacturer_id": 3,
    "export_vaccine_code": "C19",
    "vaccine_dose_no": 1,
    "f43_code": "CJ1"
  },
  {
    "vaccine_moph_export_id": 17,
    "vaccine_manufacturer_id": 3,
    "export_vaccine_code": "C19",
    "vaccine_dose_no": 2,
    "f43_code": "CJ2"
  },
  {
    "vaccine_moph_export_id": 5,
    "vaccine_manufacturer_id": 4,
    "export_vaccine_code": "C19",
    "vaccine_dose_no": 1,
    "f43_code": "CI1"
  },
  {
    "vaccine_moph_export_id": 6,
    "vaccine_manufacturer_id": 4,
    "export_vaccine_code": "C19",
    "vaccine_dose_no": 2,
    "f43_code": "CI2"
  },
  {
    "vaccine_moph_export_id": 14,
    "vaccine_manufacturer_id": 4,
    "export_vaccine_code": "C19",
    "vaccine_dose_no": 3,
    "f43_code": "CI3"
  }
]
```
