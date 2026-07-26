# `ipd_rx_pattern_unit_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_rx_pattern_unit_detail_id | int(11) | NO | PRI | 0 |  |  |
| ipd_rx_pattern_unit_id | int(11) | YES | MUL | NULL |  |  |
| day_number | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ipd_rx_pattern_unit_id | ipd_rx_pattern_unit_id | no | 1 |
| PRIMARY | ipd_rx_pattern_unit_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
