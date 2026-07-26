# `physic_pe_mvt_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_mvt_position_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_mvt_position_name | varchar(10) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_mvt_position_name | physic_pe_mvt_position_name | no | 1 |
| PRIMARY | physic_pe_mvt_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "physic_pe_mvt_position_id": 1,
    "physic_pe_mvt_position_name": "Major"
  },
  {
    "physic_pe_mvt_position_id": 2,
    "physic_pe_mvt_position_name": "Mod"
  },
  {
    "physic_pe_mvt_position_id": 3,
    "physic_pe_mvt_position_name": "Minor"
  },
  {
    "physic_pe_mvt_position_id": 4,
    "physic_pe_mvt_position_name": "Nil"
  }
]
```
