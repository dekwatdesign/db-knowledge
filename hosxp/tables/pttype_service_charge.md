# `pttype_service_charge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_service_charge_id | int(11) | NO | PRI | 0 |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| paidst | char(2) | YES |  | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| visit_type | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype | pttype | no | 1 |
| PRIMARY | pttype_service_charge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
