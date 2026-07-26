# `patient_regiment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| main_regiment | varchar(200) | YES | MUL | NULL |  |  |
| sub_regiment | varchar(200) | YES |  | NULL |  |  |
| officer_id | varchar(20) | YES |  | NULL |  |  |
| regiment_type | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| patient_regiment_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_main_regiment | main_regiment | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "470000013",
    "main_regiment": "",
    "sub_regiment": "",
    "officer_id": "",
    "regiment_type": 4,
    "hos_guid": null,
    "hos_guid_ext": null,
    "patient_regiment_type_id": null
  },
  {
    "hn": "53 161754",
    "main_regiment": "",
    "sub_regiment": "",
    "officer_id": "",
    "regiment_type": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "patient_regiment_type_id": null
  },
  {
    "hn": "530000152",
    "main_regiment": "",
    "sub_regiment": "",
    "officer_id": "",
    "regiment_type": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "patient_regiment_type_id": null
  },
  {
    "hn": "530000153",
    "main_regiment": "",
    "sub_regiment": "",
    "officer_id": "",
    "regiment_type": 15,
    "hos_guid": null,
    "hos_guid_ext": null,
    "patient_regiment_type_id": null
  },
  {
    "hn": "530000154",
    "main_regiment": "",
    "sub_regiment": "",
    "officer_id": "",
    "regiment_type": 4,
    "hos_guid": null,
    "hos_guid_ext": null,
    "patient_regiment_type_id": null
  },
  {
    "hn": "530000243",
    "main_regiment": "",
    "sub_regiment": "",
    "officer_id": "",
    "regiment_type": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "patient_regiment_type_id": null
  },
  {
    "hn": "530000249",
    "main_regiment": "",
    "sub_regiment": "",
    "officer_id": "",
    "regiment_type": 1,
    "hos_guid": null,
    "hos_guid_ext": null,
    "patient_regiment_type_id": null
  },
  {
    "hn": "530000251",
    "main_regiment": "",
    "sub_regiment": "",
    "officer_id": "",
    "regiment_type": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "patient_regiment_type_id": null
  }
]
```
