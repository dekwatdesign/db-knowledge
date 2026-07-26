# `cancer_smoking_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_smoking_type_id | int(11) | NO | PRI | 0 |  |  |
| cancer_smoking_type_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_smoking_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "cancer_smoking_type_id": 1,
    "cancer_smoking_type_name": "ก้นกรอง",
    "hos_guid": null
  },
  {
    "cancer_smoking_type_id": 2,
    "cancer_smoking_type_name": "ยาเส้น",
    "hos_guid": null
  },
  {
    "cancer_smoking_type_id": 3,
    "cancer_smoking_type_name": "ขี้โย",
    "hos_guid": null
  }
]
```
