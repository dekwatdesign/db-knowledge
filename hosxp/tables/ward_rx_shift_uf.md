# `ward_rx_shift_uf`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ward_rx_shift_uf_id | int(11) | NO | PRI | 0 |  |  |
| ipd_rx_shift_type_id | int(11) | YES | MUL | NULL |  |  |
| unit | varchar(25) | YES |  | NULL |  |  |
| frequency | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_rx_shift_type_id | ipd_rx_shift_type_id | no | 1 |
| ix_ipd_rx_shift_type_id_u | ipd_rx_shift_type_id | no | 1 |
| ix_ipd_rx_shift_type_id_u | unit | no | 2 |
| PRIMARY | ward_rx_shift_uf_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
