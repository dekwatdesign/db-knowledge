# `physic_pe_rom`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_rom_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_rom_value | float | YES |  | NULL |  |  |
| physic_pe_rom_limit_by | varchar(100) | YES |  | NULL |  |  |
| physic_pe_rom_type_id | int(11) | YES | MUL | NULL |  |  |
| physic_pe_id | int(11) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| physic_pe_rom_degree | float | YES |  | NULL |  |  |
| physic_pe_rom_note | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_rom_pe_id | physic_pe_id | no | 1 |
| ix_idx_physic_pe_rom_type | physic_pe_rom_type_id | no | 1 |
| PRIMARY | physic_pe_rom_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
