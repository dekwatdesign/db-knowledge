# `opi_disp_2_day_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_disp_2_day_stat_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| rxdate | date | YES |  | NULL |  |  |
| total_dose_mg | double(15,3) | YES |  | NULL |  |  |
| rx_year | int(11) | YES |  | NULL |  |  |
| rx_week | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hn_y_w | hn | no | 1 |
| ix_hn_y_w | rx_year | no | 2 |
| ix_hn_y_w | rx_week | no | 3 |
| ix_hn_y_w_index | hn | no | 1 |
| ix_hn_y_w_index | rx_week | no | 2 |
| ix_hn_y_w_index | rx_year | no | 3 |
| PRIMARY | opi_disp_2_day_stat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
