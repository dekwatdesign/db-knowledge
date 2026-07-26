# `stock_item_department_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_department_stat_id | int(11) | NO | PRI | 0 |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| mo1_rate_qty | int(11) | YES |  | NULL |  |  |
| mo2_rate_qty | int(11) | YES |  | NULL |  |  |
| mo3_rate_qty | int(11) | YES |  | NULL |  |  |
| mo4_rate_qty | int(11) | YES |  | NULL |  |  |
| mo5_rate_qty | int(11) | YES |  | NULL |  |  |
| mo6_rate_qty | int(11) | YES |  | NULL |  |  |
| mo7_rate_qty | int(11) | YES |  | NULL |  |  |
| mo8_rate_qty | int(11) | YES |  | NULL |  |  |
| mo9_rate_qty | int(11) | YES |  | NULL |  |  |
| mo10_rate_qty | int(11) | YES |  | NULL |  |  |
| mo11_rate_qty | int(11) | YES |  | NULL |  |  |
| mo12_rate_qty | int(11) | YES |  | NULL |  |  |
| last_issue_date | date | YES |  | NULL |  |  |
| accumulate_qty | int(11) | YES |  | NULL |  |  |
| onhand_qty | int(11) | YES |  | NULL |  |  |
| average_3mo_qty | int(11) | YES |  | NULL |  |  |
| maximum_3mo_qty | int(11) | YES |  | NULL |  |  |
| minimum_3mo_qty | int(11) | YES |  | NULL |  |  |
| need_calc | char(1) | YES | MUL | NULL |  |  |
| current_mo_qty | int(11) | YES |  | NULL |  |  |
| last_calc_stat | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_need_calc | need_calc | no | 1 |
| ix_udep | department_id | yes | 1 |
| ix_udep | item_id | yes | 2 |
| PRIMARY | stock_item_department_stat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
