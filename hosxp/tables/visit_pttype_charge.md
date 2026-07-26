# `visit_pttype_charge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| visit_pttype_charge_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| pttype_service_charge_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| ix_vn_pttype | vn | no | 1 |
| ix_vn_pttype | pttype | no | 2 |
| ix_vn_pttype_index | pttype | no | 1 |
| ix_vn_pttype_index | vn | no | 2 |
| PRIMARY | visit_pttype_charge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
