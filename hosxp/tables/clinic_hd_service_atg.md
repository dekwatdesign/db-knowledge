# `clinic_hd_service_atg`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_service_atg_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_service_id | int(11) | YES | MUL | NULL |  |  |
| clinic_hd_atg_type_id | int(11) | YES |  | NULL |  |  |
| atg_loading_dose | double(15,3) | YES |  | NULL |  |  |
| atg_maintenance_dose | double(15,3) | YES |  | NULL |  |  |
| atg_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_service_id | clinic_hd_service_id | no | 1 |
| PRIMARY | clinic_hd_service_atg_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
