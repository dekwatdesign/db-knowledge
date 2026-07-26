# `emp_prename`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_prename_id | int(11) | NO | PRI | 0 |  |  |
| emp_prename_name | varchar(100) | YES |  | NULL |  |  |
| emp_sex_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_prename_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_prename_id": 1,
    "emp_prename_name": "คุณ",
    "emp_sex_id": 1
  },
  {
    "emp_prename_id": 2,
    "emp_prename_name": "คุณหญิง",
    "emp_sex_id": 2
  },
  {
    "emp_prename_id": 3,
    "emp_prename_name": "จ.ต.",
    "emp_sex_id": 1
  },
  {
    "emp_prename_id": 4,
    "emp_prename_name": "จ.ต.หญิง",
    "emp_sex_id": 2
  },
  {
    "emp_prename_id": 5,
    "emp_prename_name": "จ.ท.",
    "emp_sex_id": 1
  },
  {
    "emp_prename_id": 6,
    "emp_prename_name": "จ.ท.หญิง",
    "emp_sex_id": 2
  },
  {
    "emp_prename_id": 7,
    "emp_prename_name": "จ.ส.ต.",
    "emp_sex_id": 1
  },
  {
    "emp_prename_id": 8,
    "emp_prename_name": "จ.ส.ต.หญิง",
    "emp_sex_id": 2
  }
]
```
