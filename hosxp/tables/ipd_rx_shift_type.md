# `ipd_rx_shift_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_rx_shift_type_id | int(11) | NO | PRI | 0 |  |  |
| ipd_rx_shift_type_name | varchar(200) | YES | UNI | NULL |  |  |
| shift_time | time | YES |  | NULL |  |  |
| next_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_rx_shift_type_name | ipd_rx_shift_type_name | yes | 1 |
| PRIMARY | ipd_rx_shift_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
