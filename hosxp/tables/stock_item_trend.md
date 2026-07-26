# `stock_item_trend`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| item_id | int(11) | NO | PRI | 0 |  |  |
| mo1_qty | int(11) | YES |  | NULL |  |  |
| mo2_qty | int(11) | YES |  | NULL |  |  |
| mo3_qty | int(11) | YES |  | NULL |  |  |
| mo4_qty | int(11) | YES |  | NULL |  |  |
| mo5_qty | int(11) | YES |  | NULL |  |  |
| mo6_qty | int(11) | YES |  | NULL |  |  |
| mo7_qty | int(11) | YES |  | NULL |  |  |
| mo8_qty | int(11) | YES |  | NULL |  |  |
| mo9_qty | int(11) | YES |  | NULL |  |  |
| mo10_qty | int(11) | YES |  | NULL |  |  |
| mo11_qty | int(11) | YES |  | NULL |  |  |
| mo12_qty | int(11) | YES |  | NULL |  |  |
| trend_b0 | double(15,3) | YES |  | NULL |  |  |
| trend_b1 | double(15,3) | YES |  | NULL |  |  |
| trend_r2 | double(15,3) | YES |  | NULL |  |  |
| trend_mean | double(15,3) | YES |  | NULL |  |  |
| trend_sd | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| need_calc | char(1) | YES | MUL | NULL |  |  |
| forcast_month | double(15,3) | YES |  | NULL |  |  |
| forcast_day | int(11) | YES |  | NULL |  |  |
| lead_day_sd | double(15,3) | YES |  | NULL |  |  |
| cur_mo_qty | int(11) | YES |  | NULL |  |  |
| last_calc_trend | date | YES |  | NULL |  |  |
| need_sp | char(1) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_needsp | need_sp | no | 1 |
| ix_need_calc | need_calc | no | 1 |
| PRIMARY | item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
