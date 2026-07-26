# `clinic_hd_service_post_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_service_post_list_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_service_id | int(11) | YES | MUL | NULL |  |  |
| clinic_hd_post_type_id | int(11) | YES |  | NULL |  |  |
| check_value | char(1) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_clinic_hd_service_post_list_check_value | check_value | no | 1 |
| ix_idx_clinic_hd_service_post_list_clinic_hd_service_id | clinic_hd_service_id | no | 1 |
| PRIMARY | clinic_hd_service_post_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
