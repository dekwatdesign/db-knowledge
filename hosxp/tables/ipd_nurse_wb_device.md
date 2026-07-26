# `ipd_nurse_wb_device`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_wb_device_id | int(11) | NO | PRI | 0 |  |  |
| mac_address | varchar(100) | YES | UNI | NULL |  |  |
| device_name | varchar(200) | YES |  | NULL |  |  |
| ipd_med_trolley_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_mac | mac_address | yes | 1 |
| PRIMARY | ipd_nurse_wb_device_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
