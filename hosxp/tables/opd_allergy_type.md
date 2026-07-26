# `opd_allergy_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_allergy_type_id | int(11) | NO | PRI | 0 |  |  |
| opd_allergy_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_allergy_type_name | opd_allergy_type_name | yes | 1 |
| PRIMARY | opd_allergy_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "opd_allergy_type_id": 1,
    "opd_allergy_type_name": "Type A"
  },
  {
    "opd_allergy_type_id": 2,
    "opd_allergy_type_name": "Type B"
  }
]
```
