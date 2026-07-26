# `opitemrece_finance_tr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opitemrece_finance_tr_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| unitprice_lock | char(1) | YES |  | NULL |  |  |
| paidst_lock | char(1) | YES |  | NULL |  |  |
| is_add | char(1) | YES |  | NULL |  |  |
| raw_sum_price | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vn_hos_guid | hos_guid | no | 1 |
| ix_vn_hos_guid | vn | no | 2 |
| ix_vn_hos_guid_index | vn | no | 1 |
| ix_vn_hos_guid_index | hos_guid | no | 2 |
| PRIMARY | opitemrece_finance_tr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
