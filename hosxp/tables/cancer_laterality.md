# `cancer_laterality`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_laterality_id | int(11) | NO | PRI | 0 |  |  |
| cancer_laterality_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_laterality_name | cancer_laterality_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_laterality_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "cancer_laterality_id": 1,
    "cancer_laterality_name": "Right",
    "hos_guid": null
  },
  {
    "cancer_laterality_id": 2,
    "cancer_laterality_name": "Left",
    "hos_guid": null
  },
  {
    "cancer_laterality_id": 3,
    "cancer_laterality_name": "Bilateral",
    "hos_guid": null
  },
  {
    "cancer_laterality_id": 4,
    "cancer_laterality_name": "Unilateral",
    "hos_guid": null
  },
  {
    "cancer_laterality_id": 5,
    "cancer_laterality_name": "ไม่ระบุ",
    "hos_guid": null
  }
]
```
