# `cancer_behaviour`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_behaviour_id | int(11) | NO | PRI | 0 |  |  |
| cancer_behaviour_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_behaviour_name | cancer_behaviour_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_behaviour_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "cancer_behaviour_id": 0,
    "cancer_behaviour_name": "Benign",
    "hos_guid": null
  },
  {
    "cancer_behaviour_id": 1,
    "cancer_behaviour_name": "Unvertain, benign / malignant",
    "hos_guid": null
  },
  {
    "cancer_behaviour_id": 2,
    "cancer_behaviour_name": "In Situ",
    "hos_guid": null
  },
  {
    "cancer_behaviour_id": 3,
    "cancer_behaviour_name": "Malignant",
    "hos_guid": null
  }
]
```
