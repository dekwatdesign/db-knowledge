# `cancer_cost_template_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_cost_template_detail_id | int(11) | NO | PRI | 0 |  |  |
| cancer_cost_template_head_id | int(11) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| price | double(22,3) | YES |  | NULL |  |  |
| income | varchar(2) | YES |  | NULL |  |  |
| paidst | varchar(2) | YES |  | NULL |  |  |
| ipd_price | double(22,3) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_cost_template_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
