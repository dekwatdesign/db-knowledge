# `cancer_region`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_region_id | int(11) | NO | PRI | 0 |  |  |
| cancer_region_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_region_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cancer_region_id": 1,
    "cancer_region_name": "Head",
    "hos_guid": null
  },
  {
    "cancer_region_id": 2,
    "cancer_region_name": "Face&Neck",
    "hos_guid": null
  },
  {
    "cancer_region_id": 3,
    "cancer_region_name": "Lung",
    "hos_guid": null
  },
  {
    "cancer_region_id": 4,
    "cancer_region_name": "Breast",
    "hos_guid": null
  },
  {
    "cancer_region_id": 5,
    "cancer_region_name": "Abdomen",
    "hos_guid": null
  },
  {
    "cancer_region_id": 6,
    "cancer_region_name": "Cervix",
    "hos_guid": null
  },
  {
    "cancer_region_id": 7,
    "cancer_region_name": "Pelvis",
    "hos_guid": null
  },
  {
    "cancer_region_id": 8,
    "cancer_region_name": "Bone met",
    "hos_guid": null
  }
]
```
