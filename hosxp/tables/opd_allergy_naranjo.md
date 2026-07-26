# `opd_allergy_naranjo`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_allergy_naranjo_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| agent | varchar(250) | YES |  | NULL |  |  |
| naranjo_algorithm_id | int(11) | YES |  | NULL |  |  |
| naranjo_score | int(11) | YES |  | NULL |  |  |
| naranjo_check_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | opd_allergy_naranjo_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opd_allergy_naranjo_id": 1,
    "hn": "530092654",
    "agent": "Risperidone",
    "naranjo_algorithm_id": 1,
    "naranjo_score": 1,
    "naranjo_check_id": 1,
    "hos_guid": null
  },
  {
    "opd_allergy_naranjo_id": 2,
    "hn": "530092654",
    "agent": "Risperidone",
    "naranjo_algorithm_id": 2,
    "naranjo_score": 2,
    "naranjo_check_id": 1,
    "hos_guid": null
  },
  {
    "opd_allergy_naranjo_id": 3,
    "hn": "530092654",
    "agent": "Risperidone",
    "naranjo_algorithm_id": 3,
    "naranjo_score": 1,
    "naranjo_check_id": 1,
    "hos_guid": null
  },
  {
    "opd_allergy_naranjo_id": 4,
    "hn": "530092654",
    "agent": "Risperidone",
    "naranjo_algorithm_id": 4,
    "naranjo_score": 2,
    "naranjo_check_id": 1,
    "hos_guid": null
  },
  {
    "opd_allergy_naranjo_id": 5,
    "hn": "530092654",
    "agent": "Risperidone",
    "naranjo_algorithm_id": 5,
    "naranjo_score": 2,
    "naranjo_check_id": 2,
    "hos_guid": null
  },
  {
    "opd_allergy_naranjo_id": 6,
    "hn": "530092654",
    "agent": "Risperidone",
    "naranjo_algorithm_id": 6,
    "naranjo_score": 0,
    "naranjo_check_id": 3,
    "hos_guid": null
  },
  {
    "opd_allergy_naranjo_id": 7,
    "hn": "530092654",
    "agent": "Risperidone",
    "naranjo_algorithm_id": 7,
    "naranjo_score": 0,
    "naranjo_check_id": 2,
    "hos_guid": null
  },
  {
    "opd_allergy_naranjo_id": 8,
    "hn": "530092654",
    "agent": "Risperidone",
    "naranjo_algorithm_id": 8,
    "naranjo_score": 1,
    "naranjo_check_id": 1,
    "hos_guid": null
  }
]
```
