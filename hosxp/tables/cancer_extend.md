# `cancer_extend`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_extend_id | int(11) | NO | PRI | 0 |  |  |
| cancer_extend_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_extend_name | cancer_extend_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_extend_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "cancer_extend_id": 1,
    "cancer_extend_name": "In situ",
    "hos_guid": null
  },
  {
    "cancer_extend_id": 2,
    "cancer_extend_name": "Localized",
    "hos_guid": null
  },
  {
    "cancer_extend_id": 3,
    "cancer_extend_name": "Direct extension",
    "hos_guid": null
  },
  {
    "cancer_extend_id": 4,
    "cancer_extend_name": "Regional lymph nodes",
    "hos_guid": null
  },
  {
    "cancer_extend_id": 5,
    "cancer_extend_name": "Distant metastasis",
    "hos_guid": null
  },
  {
    "cancer_extend_id": 8,
    "cancer_extend_name": "Not applicable",
    "hos_guid": null
  },
  {
    "cancer_extend_id": 9,
    "cancer_extend_name": "Not known",
    "hos_guid": null
  }
]
```
