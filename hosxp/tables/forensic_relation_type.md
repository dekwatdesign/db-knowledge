# `forensic_relation_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| forensic_relation_type_id | int(11) | NO | PRI | 0 |  |  |
| forensic_relation_type_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | forensic_relation_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "forensic_relation_type_id": 1,
    "forensic_relation_type_name": "บิดา"
  },
  {
    "forensic_relation_type_id": 2,
    "forensic_relation_type_name": "มารดา"
  },
  {
    "forensic_relation_type_id": 3,
    "forensic_relation_type_name": "คู่สมรส"
  },
  {
    "forensic_relation_type_id": 4,
    "forensic_relation_type_name": "บุตร"
  },
  {
    "forensic_relation_type_id": 5,
    "forensic_relation_type_name": "พี่"
  },
  {
    "forensic_relation_type_id": 6,
    "forensic_relation_type_name": "น้อง"
  },
  {
    "forensic_relation_type_id": 7,
    "forensic_relation_type_name": "ลุง"
  },
  {
    "forensic_relation_type_id": 8,
    "forensic_relation_type_name": "ป้า"
  }
]
```
