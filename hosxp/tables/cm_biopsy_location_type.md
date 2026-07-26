# `cm_biopsy_location_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cm_biopsy_location_type_id | int(11) | NO | PRI | 0 |  |  |
| cm_biopsy_location_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cm_biopsy_location_type_name | cm_biopsy_location_type_name | yes | 1 |
| PRIMARY | cm_biopsy_location_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "cm_biopsy_location_type_id": 1,
    "cm_biopsy_location_type_name": "ในโรงพยาบาล"
  },
  {
    "cm_biopsy_location_type_id": 2,
    "cm_biopsy_location_type_name": "นอกโรงพยาบาล"
  }
]
```
