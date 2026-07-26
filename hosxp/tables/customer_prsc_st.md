# `customer_prsc_st`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| customer_prsc_st_id | int(11) | NO | PRI | 0 |  |  |
| customer_prsc_dt_id | int(11) | YES | MUL | NULL |  |  |
| stock_draw_list_id | int(11) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| customer_prsc_id | int(11) | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_customer_prsc_dt_id | customer_prsc_dt_id | no | 1 |
| ix_draw_list_id | stock_draw_list_id | no | 1 |
| ix_id | customer_prsc_id | no | 1 |
| PRIMARY | customer_prsc_st_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
