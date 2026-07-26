# `service_income_discount`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| service_income_discount_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| income | char(2) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_service_uni1 | vn | yes | 1 |
| ix_service_uni1 | income | yes | 2 |
| ix_service_uni1 | pttype | yes | 3 |
| ix_service_uni1_index | income | yes | 1 |
| ix_service_uni1_index | pttype | yes | 2 |
| ix_service_uni1_index | vn | yes | 3 |
| ix_vn | vn | no | 1 |
| PRIMARY | service_income_discount_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
