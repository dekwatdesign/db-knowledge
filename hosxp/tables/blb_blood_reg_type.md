# `blb_blood_reg_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_blood_reg_type_id | int(11) | NO | PRI | 0 |  |  |
| blb_blood_reg_type_name | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_blood_reg_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "blb_blood_reg_type_id": 1,
    "blb_blood_reg_type_name": "internal"
  },
  {
    "blb_blood_reg_type_id": 2,
    "blb_blood_reg_type_name": "external"
  }
]
```
