# `ovst_supervision`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_supervision_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| supervision_role_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| ix_vn_supervision_role | vn | yes | 1 |
| ix_vn_supervision_role | supervision_role_id | yes | 2 |
| PRIMARY | ovst_supervision_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
