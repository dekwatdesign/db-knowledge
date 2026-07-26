# `cm_cancer_stage_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_cancer_stage_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_cancer_stage_type_name | varchar(200) | YES | UNI | NULL |  |  |
| min_m | int(11) | YES |  | NULL |  |  |
| max_m | int(11) | YES |  | NULL |  |  |
| max_n | int(11) | YES |  | NULL |  |  |
| min_n | int(11) | YES |  | NULL |  |  |
| min_t | int(11) | YES |  | NULL |  |  |
| max_t | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_cancer_stage_type_name | cm_cancer_stage_type_name | yes | 1 |
| PRIMARY | cm_cancer_stage_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cm_cancer_stage_type_id": 1,
    "cm_cancer_stage_type_name": "Stage 0",
    "min_m": 2,
    "max_m": 2,
    "max_n": 2,
    "min_n": 2,
    "min_t": 2,
    "max_t": 2
  },
  {
    "cm_cancer_stage_type_id": 2,
    "cm_cancer_stage_type_name": "Stage 1",
    "min_m": 2,
    "max_m": 2,
    "max_n": 2,
    "min_n": 2,
    "min_t": 4,
    "max_t": 4
  },
  {
    "cm_cancer_stage_type_id": 3,
    "cm_cancer_stage_type_name": "Stage II A",
    "min_m": 2,
    "max_m": 2,
    "max_n": 3,
    "min_n": 2,
    "min_t": 3,
    "max_t": 5
  },
  {
    "cm_cancer_stage_type_id": 4,
    "cm_cancer_stage_type_name": "Stage II B",
    "min_m": 2,
    "max_m": 2,
    "max_n": 3,
    "min_n": 2,
    "min_t": 5,
    "max_t": 6
  },
  {
    "cm_cancer_stage_type_id": 5,
    "cm_cancer_stage_type_name": "Stage III A",
    "min_m": 2,
    "max_m": 2,
    "max_n": 4,
    "min_n": 3,
    "min_t": 3,
    "max_t": 6
  },
  {
    "cm_cancer_stage_type_id": 6,
    "cm_cancer_stage_type_name": "Stage III B",
    "min_m": 2,
    "max_m": 2,
    "max_n": 4,
    "min_n": 2,
    "min_t": 7,
    "max_t": 7
  },
  {
    "cm_cancer_stage_type_id": 7,
    "cm_cancer_stage_type_name": "Stage III C",
    "min_m": 2,
    "max_m": 2,
    "max_n": 5,
    "min_n": 5,
    "min_t": 1,
    "max_t": 7
  },
  {
    "cm_cancer_stage_type_id": 8,
    "cm_cancer_stage_type_name": "Stage IV",
    "min_m": 3,
    "max_m": 3,
    "max_n": 5,
    "min_n": 1,
    "min_t": 1,
    "max_t": 7
  }
]
```
