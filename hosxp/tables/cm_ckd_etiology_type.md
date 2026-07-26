# `cm_ckd_etiology_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_ckd_etiology_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_ckd_etiology_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_ckd_etiology_type_name | cm_ckd_etiology_type_name | yes | 1 |
| PRIMARY | cm_ckd_etiology_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cm_ckd_etiology_type_id": 1,
    "cm_ckd_etiology_type_name": "Allograft failure"
  },
  {
    "cm_ckd_etiology_type_id": 2,
    "cm_ckd_etiology_type_name": "Alport's syndrome"
  },
  {
    "cm_ckd_etiology_type_id": 3,
    "cm_ckd_etiology_type_name": "Aplastic/dysplastic kidney disease"
  },
  {
    "cm_ckd_etiology_type_id": 4,
    "cm_ckd_etiology_type_name": "Chronic pyelonephritis"
  },
  {
    "cm_ckd_etiology_type_id": 5,
    "cm_ckd_etiology_type_name": "Chronic urate nephropathy"
  },
  {
    "cm_ckd_etiology_type_id": 6,
    "cm_ckd_etiology_type_name": "Chronic tubulointerstitial nephritis"
  },
  {
    "cm_ckd_etiology_type_id": 7,
    "cm_ckd_etiology_type_name": "Diabetic nephropathy"
  },
  {
    "cm_ckd_etiology_type_id": 8,
    "cm_ckd_etiology_type_name": "Glomerulonephritis :Biopy-proven"
  }
]
```
