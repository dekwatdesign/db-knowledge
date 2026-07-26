# `lab_result_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_result_status_id | int(11) | NO | PRI | 0 |  |  |
| lab_result_status_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | lab_result_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "lab_result_status_id": 1,
    "lab_result_status_name": "Normal Value"
  },
  {
    "lab_result_status_id": 2,
    "lab_result_status_name": "Below Normal Value"
  },
  {
    "lab_result_status_id": 3,
    "lab_result_status_name": "Above Normal Value"
  },
  {
    "lab_result_status_id": 4,
    "lab_result_status_name": "Below Critical Value"
  },
  {
    "lab_result_status_id": 5,
    "lab_result_status_name": "Above Critical Value"
  }
]
```
