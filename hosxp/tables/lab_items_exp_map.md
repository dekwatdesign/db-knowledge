# `lab_items_exp_map`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_exp_map_id | int(11) | NO | PRI | 0 |  |  |
| lab_items_code | int(11) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_items_code | lab_items_code | yes | 1 |
| PRIMARY | lab_items_exp_map_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_items_exp_map_id": 3482,
    "lab_items_code": 142
  },
  {
    "lab_items_exp_map_id": 3565,
    "lab_items_code": 251
  },
  {
    "lab_items_exp_map_id": 3564,
    "lab_items_code": 152
  },
  {
    "lab_items_exp_map_id": 3563,
    "lab_items_code": 150
  },
  {
    "lab_items_exp_map_id": 3562,
    "lab_items_code": 124
  },
  {
    "lab_items_exp_map_id": 3561,
    "lab_items_code": 122
  },
  {
    "lab_items_exp_map_id": 3560,
    "lab_items_code": 138
  },
  {
    "lab_items_exp_map_id": 3559,
    "lab_items_code": 121
  }
]
```
