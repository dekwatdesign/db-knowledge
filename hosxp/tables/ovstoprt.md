# `ovstoprt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_oprt_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| icd9cm | varchar(7) | YES | MUL | NULL |  |  |
| ovst_oper_type | int(11) | YES |  | NULL |  |  |
| ovst_diag_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_icd9cm | icd9cm | no | 1 |
| ix_ovstdiagid | ovst_diag_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_oprt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
