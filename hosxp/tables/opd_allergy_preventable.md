# `opd_allergy_preventable`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_allergy_preventable_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| adr_preventable_id | int(11) | YES |  | NULL |  |  |
| preventable_score | int(11) | YES |  | NULL |  |  |
| adr_preventable_check_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| agent | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | opd_allergy_preventable_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opd_allergy_preventable_id": 1,
    "hn": "530092654",
    "adr_preventable_id": 1,
    "preventable_score": 1,
    "adr_preventable_check_id": 1,
    "hos_guid": null,
    "agent": "Risperidone"
  },
  {
    "opd_allergy_preventable_id": 2,
    "hn": "530092654",
    "adr_preventable_id": 2,
    "preventable_score": 1,
    "adr_preventable_check_id": 1,
    "hos_guid": null,
    "agent": "Risperidone"
  },
  {
    "opd_allergy_preventable_id": 3,
    "hn": "530092654",
    "adr_preventable_id": 3,
    "preventable_score": 1,
    "adr_preventable_check_id": 1,
    "hos_guid": null,
    "agent": "Risperidone"
  },
  {
    "opd_allergy_preventable_id": 4,
    "hn": "530092654",
    "adr_preventable_id": 4,
    "preventable_score": 0,
    "adr_preventable_check_id": 2,
    "hos_guid": null,
    "agent": "Risperidone"
  },
  {
    "opd_allergy_preventable_id": 5,
    "hn": "530092654",
    "adr_preventable_id": 5,
    "preventable_score": 0,
    "adr_preventable_check_id": 2,
    "hos_guid": null,
    "agent": "Risperidone"
  },
  {
    "opd_allergy_preventable_id": 6,
    "hn": "530092654",
    "adr_preventable_id": 6,
    "preventable_score": 0,
    "adr_preventable_check_id": 2,
    "hos_guid": null,
    "agent": "Risperidone"
  },
  {
    "opd_allergy_preventable_id": 7,
    "hn": "530092654",
    "adr_preventable_id": 7,
    "preventable_score": 0,
    "adr_preventable_check_id": 2,
    "hos_guid": null,
    "agent": "Risperidone"
  },
  {
    "opd_allergy_preventable_id": 8,
    "hn": "560001106",
    "adr_preventable_id": 1,
    "preventable_score": 1,
    "adr_preventable_check_id": 1,
    "hos_guid": null,
    "agent": "Sodium valproate"
  }
]
```
