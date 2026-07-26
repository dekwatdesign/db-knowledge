# `physic_pe_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_treatment_id | int(11) | NO | PRI | 0 |  |  |
| physic_items_id | int(11) | YES | MUL | NULL |  |  |
| physic_pe_treatment_count | int(11) | YES |  | NULL |  |  |
| physic_pe_treatment_time | int(11) | YES |  | NULL |  |  |
| physic_pe_treatment_note | varchar(250) | YES |  | NULL |  |  |
| physic_pe_id | int(11) | YES | MUL | NULL |  |  |
| physic_pe_treatment_area_id | int(11) | YES |  | NULL |  |  |
| physic_pe_side_id | int(11) | YES |  | NULL |  |  |
| physic_pe_treatment_dose | double(11,2) | YES |  | NULL |  |  |
| physic_pe_treatment_side_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_treatment_item | physic_items_id | no | 1 |
| ix_idx_physic_pe_treatment_pe_id | physic_pe_id | no | 1 |
| PRIMARY | physic_pe_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
