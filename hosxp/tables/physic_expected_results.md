# `physic_expected_results`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_expected_results_id | int(11) | NO | PRI | 0 |  |  |
| physic_expected_results_name | varchar(255) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_expected_results_name | physic_expected_results_name | no | 1 |
| PRIMARY | physic_expected_results_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "physic_expected_results_id": 5,
    "physic_expected_results_name": "ไม่กลับมาเป็นอีก"
  },
  {
    "physic_expected_results_id": 4,
    "physic_expected_results_name": "หายดี"
  },
  {
    "physic_expected_results_id": 1,
    "physic_expected_results_name": "หายปวดขา"
  },
  {
    "physic_expected_results_id": 2,
    "physic_expected_results_name": "หายปวดไหล่"
  },
  {
    "physic_expected_results_id": 3,
    "physic_expected_results_name": "หายไปจากเดิม"
  }
]
```
