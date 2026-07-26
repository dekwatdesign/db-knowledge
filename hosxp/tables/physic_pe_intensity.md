# `physic_pe_intensity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_intensity_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_intensity_name | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_intensity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "physic_pe_intensity_id": 1,
    "physic_pe_intensity_name": "constant"
  },
  {
    "physic_pe_intensity_id": 2,
    "physic_pe_intensity_name": "intermittent"
  }
]
```
