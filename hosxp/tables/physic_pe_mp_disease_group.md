# `physic_pe_mp_disease_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_mp_disease_group_id | int(11) | NO | PRI | 0 |  |  |
| mp_disease_group_name | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_mp_disease_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "physic_pe_mp_disease_group_id": 1,
    "mp_disease_group_name": "Stroke/TBI"
  },
  {
    "physic_pe_mp_disease_group_id": 2,
    "mp_disease_group_name": "SCI"
  },
  {
    "physic_pe_mp_disease_group_id": 99,
    "mp_disease_group_name": "อื่นๆ"
  }
]
```
