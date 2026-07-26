# `physic_pe_rom_limit_by`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_rom_limit_by_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_rom_limit_by_name | varchar(100) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_rom_limit_by_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "physic_pe_rom_limit_by_id": 1,
    "physic_pe_rom_limit_by_name": "Rang of Motion",
    "active_status": "Y"
  },
  {
    "physic_pe_rom_limit_by_id": 2,
    "physic_pe_rom_limit_by_name": "Thightness",
    "active_status": "Y"
  },
  {
    "physic_pe_rom_limit_by_id": 3,
    "physic_pe_rom_limit_by_name": "Pain",
    "active_status": "Y"
  }
]
```
