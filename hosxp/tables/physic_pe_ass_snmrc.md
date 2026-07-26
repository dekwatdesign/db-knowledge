# `physic_pe_ass_snmrc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_ass_snmrc_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_ass_snmrc_name | varchar(150) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_ass_snmrc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "physic_pe_ass_snmrc_id": 1,
    "physic_pe_ass_snmrc_name": "Bed Mobility",
    "active_status": "Y"
  },
  {
    "physic_pe_ass_snmrc_id": 2,
    "physic_pe_ass_snmrc_name": "To sit",
    "active_status": "Y"
  },
  {
    "physic_pe_ass_snmrc_id": 3,
    "physic_pe_ass_snmrc_name": "Sitting Balance",
    "active_status": "Y"
  },
  {
    "physic_pe_ass_snmrc_id": 4,
    "physic_pe_ass_snmrc_name": "To stand",
    "active_status": "Y"
  },
  {
    "physic_pe_ass_snmrc_id": 5,
    "physic_pe_ass_snmrc_name": "Standing Balance",
    "active_status": "Y"
  },
  {
    "physic_pe_ass_snmrc_id": 6,
    "physic_pe_ass_snmrc_name": "Transfer",
    "active_status": "Y"
  },
  {
    "physic_pe_ass_snmrc_id": 7,
    "physic_pe_ass_snmrc_name": "Ambulation",
    "active_status": "Y"
  }
]
```
