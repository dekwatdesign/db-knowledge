# `physic_pe_mvt_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_mvt_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_mvt_type_name | varchar(250) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_mvt_type_name | physic_pe_mvt_type_name | no | 1 |
| PRIMARY | physic_pe_mvt_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "physic_pe_mvt_type_id": 1,
    "physic_pe_mvt_type_name": "Flexion",
    "active_status": "Y"
  },
  {
    "physic_pe_mvt_type_id": 2,
    "physic_pe_mvt_type_name": "Extension",
    "active_status": "Y"
  },
  {
    "physic_pe_mvt_type_id": 3,
    "physic_pe_mvt_type_name": "Side gliding Rt",
    "active_status": "Y"
  },
  {
    "physic_pe_mvt_type_id": 4,
    "physic_pe_mvt_type_name": "Side gliding Lt",
    "active_status": "Y"
  }
]
```
