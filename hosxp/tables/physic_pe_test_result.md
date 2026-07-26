# `physic_pe_test_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_test_result_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_test_result_name | varchar(50) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_test_result_name | physic_pe_test_result_name | no | 1 |
| PRIMARY | physic_pe_test_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "physic_pe_test_result_id": 1,
    "physic_pe_test_result_name": "Positive"
  },
  {
    "physic_pe_test_result_id": 2,
    "physic_pe_test_result_name": "Negative"
  }
]
```
