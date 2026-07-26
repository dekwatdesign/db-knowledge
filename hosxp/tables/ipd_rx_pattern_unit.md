# `ipd_rx_pattern_unit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_rx_pattern_unit_id | int(11) | NO | PRI | 0 |  |  |
| usage_unit_code | varchar(10) | YES | MUL | NULL |  |  |
| dose_per_units | int(11) | YES |  | NULL |  |  |
| dose_per_day | double(15,3) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_key | usage_unit_code | no | 1 |
| ix_key | dose_per_units | no | 2 |
| ix_key | dose_per_day | no | 3 |
| ix_key_index | dose_per_day | no | 1 |
| ix_key_index | dose_per_units | no | 2 |
| ix_key_index | usage_unit_code | no | 3 |
| PRIMARY | ipd_rx_pattern_unit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
