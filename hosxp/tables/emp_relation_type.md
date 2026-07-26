# `emp_relation_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_relation_type_id | int(11) | NO | PRI | 0 |  |  |
| emp_relation_type_name | varchar(30) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_relation_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "emp_relation_type_id": 1,
    "emp_relation_type_name": "บิดา"
  },
  {
    "emp_relation_type_id": 2,
    "emp_relation_type_name": "มารดา"
  },
  {
    "emp_relation_type_id": 3,
    "emp_relation_type_name": "พี่"
  },
  {
    "emp_relation_type_id": 4,
    "emp_relation_type_name": "น้อง"
  },
  {
    "emp_relation_type_id": 5,
    "emp_relation_type_name": "บุตร"
  },
  {
    "emp_relation_type_id": 6,
    "emp_relation_type_name": "ลุง"
  },
  {
    "emp_relation_type_id": 7,
    "emp_relation_type_name": "ป้า"
  },
  {
    "emp_relation_type_id": 8,
    "emp_relation_type_name": "น้า"
  }
]
```
