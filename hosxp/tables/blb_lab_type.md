# `blb_lab_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_lab_type_id | int(11) | NO | PRI | 0 |  |  |
| blb_lab_type_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_lab_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "blb_lab_type_id": 1,
    "blb_lab_type_name": "hbsag"
  },
  {
    "blb_lab_type_id": 2,
    "blb_lab_type_name": "alt"
  },
  {
    "blb_lab_type_id": 3,
    "blb_lab_type_name": "anti_hiv"
  },
  {
    "blb_lab_type_id": 4,
    "blb_lab_type_name": "anti_hbc"
  },
  {
    "blb_lab_type_id": 5,
    "blb_lab_type_name": "hcv"
  },
  {
    "blb_lab_type_id": 6,
    "blb_lab_type_name": "hivag"
  },
  {
    "blb_lab_type_id": 7,
    "blb_lab_type_name": "nat_hcv"
  },
  {
    "blb_lab_type_id": 8,
    "blb_lab_type_name": "nat_hiv"
  }
]
```
