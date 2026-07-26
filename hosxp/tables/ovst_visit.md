# `ovst_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_visit_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| doctor_code | varchar(25) | YES |  | NULL |  |  |
| clinic | varchar(3) | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| update_staff | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| ix_vn_clinic | vn | yes | 1 |
| ix_vn_clinic | clinic | yes | 2 |
| ix_vn_clinic_index | clinic | yes | 1 |
| ix_vn_clinic_index | vn | yes | 2 |
| PRIMARY | ovst_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
