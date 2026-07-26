# `cancer_stage1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_stage1_id | int(11) | NO | PRI | 0 |  |  |
| cancer_stage1_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_stage1_name | cancer_stage1_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_stage1_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "cancer_stage1_id": 0,
    "cancer_stage1_name": "Stage 0",
    "hos_guid": null
  },
  {
    "cancer_stage1_id": 1,
    "cancer_stage1_name": "Stage 1",
    "hos_guid": null
  },
  {
    "cancer_stage1_id": 2,
    "cancer_stage1_name": "Stage 2",
    "hos_guid": null
  },
  {
    "cancer_stage1_id": 3,
    "cancer_stage1_name": "Stage 3",
    "hos_guid": null
  },
  {
    "cancer_stage1_id": 4,
    "cancer_stage1_name": "Stage 4",
    "hos_guid": null
  }
]
```
