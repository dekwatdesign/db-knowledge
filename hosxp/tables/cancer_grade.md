# `cancer_grade`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_grade_id | int(11) | NO | PRI | 0 |  |  |
| cancer_grade_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_grade_name | cancer_grade_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_grade_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cancer_grade_id": 1,
    "cancer_grade_name": "Well differentiated",
    "hos_guid": null
  },
  {
    "cancer_grade_id": 2,
    "cancer_grade_name": "Moderately differed",
    "hos_guid": null
  },
  {
    "cancer_grade_id": 3,
    "cancer_grade_name": "Poorly difered",
    "hos_guid": null
  },
  {
    "cancer_grade_id": 4,
    "cancer_grade_name": "Undifferentiated",
    "hos_guid": null
  },
  {
    "cancer_grade_id": 5,
    "cancer_grade_name": "Positive T - Cell",
    "hos_guid": null
  },
  {
    "cancer_grade_id": 6,
    "cancer_grade_name": "Positive B - Cell",
    "hos_guid": null
  },
  {
    "cancer_grade_id": 7,
    "cancer_grade_name": "Null cell (Non T - non B)",
    "hos_guid": null
  },
  {
    "cancer_grade_id": 8,
    "cancer_grade_name": "NK cell (natural Killer)",
    "hos_guid": null
  }
]
```
