# `blb_blood_origin_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_blood_origin_type_id | int(11) | NO | PRI | 0 |  |  |
| blb_blood_origin_type_name | varchar(255) | YES |  | NULL |  |  |
| blb_blood_type_in | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_blood_origin_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "blb_blood_origin_type_id": 1,
    "blb_blood_origin_type_name": "ในโรงพยาบาล",
    "blb_blood_type_in": 1
  },
  {
    "blb_blood_origin_type_id": 2,
    "blb_blood_origin_type_name": "รถเคลื่อนที่รับบริจาค",
    "blb_blood_type_in": 1
  }
]
```
