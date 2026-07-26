# `cancer_stage2`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_stage2_id | int(11) | NO | PRI | 0 |  |  |
| cancer_stage2_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_stage2_name | cancer_stage2_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_stage2_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cancer_stage2_id": 1,
    "cancer_stage2_name": "Stage I,A",
    "hos_guid": null
  },
  {
    "cancer_stage2_id": 2,
    "cancer_stage2_name": "Stage II,B",
    "hos_guid": null
  },
  {
    "cancer_stage2_id": 3,
    "cancer_stage2_name": "Stage III,C",
    "hos_guid": null
  },
  {
    "cancer_stage2_id": 4,
    "cancer_stage2_name": "Stage IV,D",
    "hos_guid": null
  },
  {
    "cancer_stage2_id": 5,
    "cancer_stage2_name": "Stage II a,B1",
    "hos_guid": null
  },
  {
    "cancer_stage2_id": 6,
    "cancer_stage2_name": "Stage II b,B2",
    "hos_guid": null
  },
  {
    "cancer_stage2_id": 7,
    "cancer_stage2_name": "Stage III a,C1",
    "hos_guid": null
  },
  {
    "cancer_stage2_id": 8,
    "cancer_stage2_name": "Stage III b,C2",
    "hos_guid": null
  }
]
```
