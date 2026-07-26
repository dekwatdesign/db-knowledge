# `opi_inc_charge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_inc_charge_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| paidst | char(2) | YES |  | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| order_number | int(11) | YES |  | NULL |  |  |
| origin_guid | varchar(38) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_guid | opi_guid | yes | 1 |
| ix_origin_guid | origin_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | opi_inc_charge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
