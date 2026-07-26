# `dental_category_tms`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_category_tms_id | int(11) | NO | PRI | 0 |  |  |
| dental_category_tms_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dental_category_tms_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "dental_category_tms_id": 1,
    "dental_category_tms_name": "Prosthodotics"
  },
  {
    "dental_category_tms_id": 4,
    "dental_category_tms_name": "Orthodotics"
  },
  {
    "dental_category_tms_id": 5,
    "dental_category_tms_name": "Ortho+Prosth Combination"
  }
]
```
