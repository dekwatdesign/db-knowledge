# `clinicmember_tb_medication`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_tb_medication_code | char(1) | NO | PRI |  |  |  |
| clinicmember_tb_medication_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_tb_medication_name | clinicmember_tb_medication_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | clinicmember_tb_medication_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "clinicmember_tb_medication_code": "C",
    "clinicmember_tb_medication_name": "Clofazimine",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "clinicmember_tb_medication_code": "E",
    "clinicmember_tb_medication_name": "Ethambutol",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "clinicmember_tb_medication_code": "H",
    "clinicmember_tb_medication_name": "Isoniazid",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "clinicmember_tb_medication_code": "K",
    "clinicmember_tb_medication_name": "Kanamycin",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "clinicmember_tb_medication_code": "R",
    "clinicmember_tb_medication_name": "Rifampicin",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "clinicmember_tb_medication_code": "S",
    "clinicmember_tb_medication_name": "Streptomycin",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "clinicmember_tb_medication_code": "Z",
    "clinicmember_tb_medication_name": "Pyrazinamide",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
