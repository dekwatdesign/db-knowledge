# `drug_delivery_signature`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_delivery_signature_id | int(11) | NO | PRI | 0 |  |  |
| signature_datetime | datetime | YES |  | NULL |  |  |
| signature_blob | longblob | YES |  | NULL |  |  |
| signature_width | int(11) | YES |  | NULL |  |  |
| signature_height | int(11) | YES |  | NULL |  |  |
| signature_type | char(3) | YES |  | NULL |  |  |
| receive_status | char(1) | YES |  | NULL |  |  |
| send_staff | varchar(50) | YES |  | NULL |  |  |
| longitude | varchar(50) | YES |  | NULL |  |  |
| latitude | varchar(50) | YES |  | NULL |  |  |
| ovst_home_rx_package_detail_id | int(11) | YES | MUL | NULL |  |  |
| drug_delivery_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refovst_home_rx_package_detail5 | ovst_home_rx_package_detail_id | no | 1 |
| PRIMARY | drug_delivery_signature_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
