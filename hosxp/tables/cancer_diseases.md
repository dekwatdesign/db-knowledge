# `cancer_diseases`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_diseases_id | int(11) | NO | PRI | 0 |  |  |
| cancer_diseases_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_diseases_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "cancer_diseases_id": 1,
    "cancer_diseases_name": "DM",
    "hos_guid": null
  },
  {
    "cancer_diseases_id": 2,
    "cancer_diseases_name": "HT",
    "hos_guid": null
  },
  {
    "cancer_diseases_id": 3,
    "cancer_diseases_name": "DLP",
    "hos_guid": null
  },
  {
    "cancer_diseases_id": 4,
    "cancer_diseases_name": "PU",
    "hos_guid": null
  },
  {
    "cancer_diseases_id": 5,
    "cancer_diseases_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
