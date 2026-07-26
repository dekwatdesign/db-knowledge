# `cm_ckd_cormobidity_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_ckd_cormobidity_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_ckd_cormobidity_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_ckd_cormobidity_type_name | cm_ckd_cormobidity_type_name | yes | 1 |
| PRIMARY | cm_ckd_cormobidity_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cm_ckd_cormobidity_type_id": 14,
    "cm_ckd_cormobidity_type_name": "Anemia"
  },
  {
    "cm_ckd_cormobidity_type_id": 7,
    "cm_ckd_cormobidity_type_name": "Cerebo-vascular disease"
  },
  {
    "cm_ckd_cormobidity_type_id": 10,
    "cm_ckd_cormobidity_type_name": "Cirrhosis"
  },
  {
    "cm_ckd_cormobidity_type_id": 9,
    "cm_ckd_cormobidity_type_name": "COPD"
  },
  {
    "cm_ckd_cormobidity_type_id": 1,
    "cm_ckd_cormobidity_type_name": "DM"
  },
  {
    "cm_ckd_cormobidity_type_id": 4,
    "cm_ckd_cormobidity_type_name": "Dyslipidemia"
  },
  {
    "cm_ckd_cormobidity_type_id": 6,
    "cm_ckd_cormobidity_type_name": "Heart failure"
  },
  {
    "cm_ckd_cormobidity_type_id": 11,
    "cm_ckd_cormobidity_type_name": "Hyperparathyroidism"
  }
]
```
