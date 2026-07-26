# `incith_adjust`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| incith_adj_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| income | char(2) | YES | MUL | NULL |  |  |
| sum_income | double(15,3) | YES |  | NULL |  |  |
| adjust_amount | double(15,3) | YES |  | NULL |  |  |
| debt_amount | double(15,3) | YES |  | NULL |  |  |
| paid_amount | double(15,3) | YES |  | NULL |  |  |
| sum_paidst_01 | double(15,3) | YES |  | NULL |  |  |
| sum_paidst_02 | double(15,3) | YES |  | NULL |  |  |
| sum_paidst_03 | double(15,3) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| income | income | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | incith_adj_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
