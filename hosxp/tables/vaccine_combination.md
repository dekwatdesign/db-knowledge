# `vaccine_combination`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vaccine_combination_id | int(11) | NO | PRI | 0 |  |  |
| vaccine_code | varchar(20) | YES | MUL | NULL |  |  |
| vaccine_combine_code | varchar(20) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | vaccine_code | yes | 1 |
| ix_unique | vaccine_combine_code | yes | 2 |
| ix_vaccine_code | vaccine_code | no | 1 |
| PRIMARY | vaccine_combination_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vaccine_combination_id": 1,
    "vaccine_code": "TT1",
    "vaccine_combine_code": "TT1",
    "hos_guid": null
  },
  {
    "vaccine_combination_id": 2,
    "vaccine_code": "TT2",
    "vaccine_combine_code": "TT2",
    "hos_guid": null
  },
  {
    "vaccine_combination_id": 3,
    "vaccine_code": "TT3",
    "vaccine_combine_code": "TT3",
    "hos_guid": null
  },
  {
    "vaccine_combination_id": 4,
    "vaccine_code": "TT4",
    "vaccine_combine_code": "TT4",
    "hos_guid": null
  },
  {
    "vaccine_combination_id": 5,
    "vaccine_code": "BCG",
    "vaccine_combine_code": "BCG",
    "hos_guid": null
  },
  {
    "vaccine_combination_id": 6,
    "vaccine_code": "HBV1",
    "vaccine_combine_code": "HBV1",
    "hos_guid": null
  },
  {
    "vaccine_combination_id": 7,
    "vaccine_code": "HBV2",
    "vaccine_combine_code": "HBV2",
    "hos_guid": null
  },
  {
    "vaccine_combination_id": 8,
    "vaccine_code": "HBV3",
    "vaccine_combine_code": "HBV3",
    "hos_guid": null
  }
]
```
