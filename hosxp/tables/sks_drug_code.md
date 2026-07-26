# `sks_drug_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sks_drug_code | varchar(7) | NO | PRI |  |  |  |
| sks_drug_name | varchar(250) | YES | UNI | NULL |  |  |
| ed_type | varchar(10) | YES |  | NULL |  |  |
| np_type | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_sks_drug_name | sks_drug_name | yes | 1 |
| PRIMARY | sks_drug_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sks_drug_code": "100004",
    "sks_drug_name": "CEFAZOLIN (M 10747) (cefazolin 5.5 g/100 mL) ear/eye drops, solution, 10 mL bottle",
    "ed_type": null,
    "np_type": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sks_drug_code": "100005",
    "sks_drug_name": "ALGYCON (aluminium hydroxide 30 mg + magnesium carbonate 40 mg + alginic acid 200 mg) tab, chewable, 1 tab",
    "ed_type": "NED",
    "np_type": "NP",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sks_drug_code": "100009",
    "sks_drug_name": "COLISTIN (M 10747) (colistin 3 g/100 mL) ear/eye drops, solution, 5 mL bottle",
    "ed_type": null,
    "np_type": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sks_drug_code": "100013",
    "sks_drug_name": "CETAZIDIME (M 10747) (ceftazidime 5 g/100 mL) ear/eye drops, solution, 5 mL bottle",
    "ed_type": null,
    "np_type": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sks_drug_code": "100014",
    "sks_drug_name": "GASTRO - BISMOL 262 (bismuth subsalicylate 262 mg) tab, oral, 1 tab",
    "ed_type": "ED",
    "np_type": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sks_drug_code": "100017",
    "sks_drug_name": "GENTAMYCIN FORTE (M 10747) (gentamicin 1.4 g/100 mL) ear/eye drops, solution, 5 mL bottle",
    "ed_type": null,
    "np_type": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sks_drug_code": "100022",
    "sks_drug_name": "BESMAL (bismuth subsalicylate 262 mg) tab, oral, 1 tab",
    "ed_type": "ED",
    "np_type": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sks_drug_code": "1000223",
    "sks_drug_name": "ENALAPRIL (M 10747) (enalapril maleate 1 mg/1 mL) oral suspension, 60 mL bottle",
    "ed_type": null,
    "np_type": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
