# `clinic_hd_service_nmgm_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_service_nmgm_list_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_nmgm_type_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_service_id | int(11) | YES | MUL | NULL |  |  |
| check_value | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_service_id | clinic_hd_service_id | no | 1 |
| PRIMARY | clinic_hd_service_nmgm_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
