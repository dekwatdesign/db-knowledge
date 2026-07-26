# `iclaim_opd_discharge_benefit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_opd_dis_benefit_id | int(11) | NO | PRI | 0 |  |  |
| billing_code | varchar(100) | YES |  | NULL |  |  |
| simb_code | varchar(10) | YES |  | NULL |  |  |
| simb_desc | varchar(250) | YES |  | NULL |  |  |
| claim_result | varchar(100) | YES |  | NULL |  |  |
| simb_approve_amt | double(15,3) | YES |  | NULL |  |  |
| iclaim_opd_discharge_detail_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reficlaim_opd_discharge_detail1 | iclaim_opd_discharge_detail_id | no | 1 |
| PRIMARY | iclaim_opd_dis_benefit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
