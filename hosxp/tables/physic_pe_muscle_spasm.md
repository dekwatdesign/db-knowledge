# `physic_pe_muscle_spasm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_muscle_spasm_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_upper_trapezius | int(11) | YES |  | NULL |  |  |
| physic_pe_levator_scapulaet | int(11) | YES |  | NULL |  |  |
| physic_pe_suboccipital | int(11) | YES |  | NULL |  |  |
| physic_pe_sternocleidomastoid | int(11) | YES |  | NULL |  |  |
| physic_pe_scalenes | int(11) | YES |  | NULL |  |  |
| physic_pe_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_muscle_spasm_pe | physic_pe_id | no | 1 |
| PRIMARY | physic_pe_muscle_spasm_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
