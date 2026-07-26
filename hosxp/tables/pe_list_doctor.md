# `pe_list_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pe_list_doctor_id | int(11) | NO | PRI | 0 |  |  |
| pe_name | varchar(250) | YES |  | NULL |  |  |
| pe_section | varchar(100) | YES |  | NULL |  |  |
| doctor | varchar(9) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | pe_list_doctor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pe_list_doctor_id": 1,
    "pe_name": "injected pharynx",
    "pe_section": "HEENT",
    "doctor": "069",
    "hos_guid": null
  },
  {
    "pe_list_doctor_id": 2,
    "pe_name": "injected tonsil",
    "pe_section": "HEENT",
    "doctor": "069",
    "hos_guid": null
  },
  {
    "pe_list_doctor_id": 3,
    "pe_name": "nasal D/C clear type",
    "pe_section": "HEENT",
    "doctor": "069",
    "hos_guid": null
  },
  {
    "pe_list_doctor_id": 4,
    "pe_name": "nasal D/C mucous",
    "pe_section": "HEENT",
    "doctor": "069",
    "hos_guid": null
  },
  {
    "pe_list_doctor_id": 5,
    "pe_name": "not pale, no Jx",
    "pe_section": "HEENT",
    "doctor": "069",
    "hos_guid": null
  },
  {
    "pe_list_doctor_id": 6,
    "pe_name": "pharynx and tonsil not injected",
    "pe_section": "HEENT",
    "doctor": "069",
    "hos_guid": null
  },
  {
    "pe_list_doctor_id": 7,
    "pe_name": "TM intact not injected, no bulging",
    "pe_section": "HEENT",
    "doctor": "069",
    "hos_guid": null
  },
  {
    "pe_list_doctor_id": 8,
    "pe_name": "VA 20/20 BE",
    "pe_section": "HEENT",
    "doctor": "069",
    "hos_guid": null
  }
]
```
