# `physic_pe_rom_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_rom_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_rom_type_name | varchar(250) | YES | MUL | NULL |  |  |
| physic_pe_patient_type_id | int(11) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_rom_type_name | physic_pe_rom_type_name | no | 1 |
| PRIMARY | physic_pe_rom_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "physic_pe_rom_type_id": 1,
    "physic_pe_rom_type_name": "Flexion",
    "physic_pe_patient_type_id": null,
    "active_status": null
  },
  {
    "physic_pe_rom_type_id": 2,
    "physic_pe_rom_type_name": "Extension",
    "physic_pe_patient_type_id": null,
    "active_status": null
  },
  {
    "physic_pe_rom_type_id": 3,
    "physic_pe_rom_type_name": "Lateral flexion to Rt.",
    "physic_pe_patient_type_id": null,
    "active_status": null
  },
  {
    "physic_pe_rom_type_id": 4,
    "physic_pe_rom_type_name": "Lateral flexion to Lt.",
    "physic_pe_patient_type_id": null,
    "active_status": null
  },
  {
    "physic_pe_rom_type_id": 5,
    "physic_pe_rom_type_name": "Rotation to Rt.",
    "physic_pe_patient_type_id": null,
    "active_status": null
  },
  {
    "physic_pe_rom_type_id": 6,
    "physic_pe_rom_type_name": "Rotation to Lt.",
    "physic_pe_patient_type_id": null,
    "active_status": null
  }
]
```
