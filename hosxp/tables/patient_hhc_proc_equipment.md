# `patient_hhc_proc_equipment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| proc_equipment_id | int(11) | NO | PRI | 0 |  |  |
| equipment_id | int(11) | YES |  | NULL |  |  |
| er_oper_code | int(11) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| icode | varchar(32) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_patient_hhc_proc_equipment_er_oper_code | er_oper_code | no | 1 |
| ix_uq_patient_hhc_proc_equipment_oper_icode | er_oper_code | yes | 1 |
| ix_uq_patient_hhc_proc_equipment_oper_icode | icode | yes | 2 |
| PRIMARY | proc_equipment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
