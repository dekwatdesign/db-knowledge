# `ovst_doctor_access`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_doctor_access_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| doctor_code | varchar(20) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| ix_vn_doctor | vn | no | 1 |
| ix_vn_doctor | doctor_code | no | 2 |
| ix_vn_doctor_index | doctor_code | no | 1 |
| ix_vn_doctor_index | vn | no | 2 |
| PRIMARY | ovst_doctor_access_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
