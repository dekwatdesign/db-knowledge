# `drug_delivery`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_delivery_id | int(11) | NO | PRI | 0 |  |  |
| drug_delivery_datetime | datetime | YES |  | NULL |  |  |
| receive_staff | varchar(50) | YES | MUL | NULL |  |  |
| ovst_home_rx_package_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refofficer3 | receive_staff | no | 1 |
| ix_Refovst_home_rx4 | ovst_home_rx_package_id | no | 1 |
| PRIMARY | drug_delivery_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
