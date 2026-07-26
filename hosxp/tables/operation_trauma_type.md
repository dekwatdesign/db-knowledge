# `operation_trauma_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_trauma_type_id | int(11) | NO | PRI | 0 |  |  |
| operation_trauma_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_trauma_type_name | operation_trauma_type_name | yes | 1 |
| PRIMARY | operation_trauma_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "operation_trauma_type_id": 1,
    "operation_trauma_type_name": "Fast Track อุบัติเหตุทั่วไป"
  },
  {
    "operation_trauma_type_id": 2,
    "operation_trauma_type_name": "Fast Track อุบัติเหตุจราจร"
  },
  {
    "operation_trauma_type_id": 3,
    "operation_trauma_type_name": "Fast Track สาเหตุอื่นๆ"
  },
  {
    "operation_trauma_type_id": 4,
    "operation_trauma_type_name": "อุบัติเหตุทั่วไป"
  },
  {
    "operation_trauma_type_id": 5,
    "operation_trauma_type_name": "อุบัติเหตุจราจร"
  }
]
```
