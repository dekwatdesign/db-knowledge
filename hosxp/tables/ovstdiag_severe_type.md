# `ovstdiag_severe_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovstdiag_severe_type_id | int(11) | NO | PRI | 0 |  |  |
| ovstdiag_severe_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ovstdiag_severe_type_name | ovstdiag_severe_type_name | yes | 1 |
| PRIMARY | ovstdiag_severe_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ovstdiag_severe_type_id": 1,
    "ovstdiag_severe_type_name": "Primary"
  },
  {
    "ovstdiag_severe_type_id": 2,
    "ovstdiag_severe_type_name": "Secondary"
  },
  {
    "ovstdiag_severe_type_id": 3,
    "ovstdiag_severe_type_name": "Tetiary"
  },
  {
    "ovstdiag_severe_type_id": 4,
    "ovstdiag_severe_type_name": "Supratetiary"
  }
]
```
