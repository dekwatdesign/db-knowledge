# `qr_payment_device`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| qr_payment_device_id | int(11) | NO | PRI | 0 |  |  |
| qr_payment_device_name | varchar(255) | YES | UNI | NULL |  |  |
| qr_payment_device_guid | varchar(255) | YES | UNI | NULL |  |  |
| qr_payment_device_mac | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_qr_payment_device_guid | qr_payment_device_guid | yes | 1 |
| ix_qr_payment_device_name | qr_payment_device_name | yes | 1 |
| PRIMARY | qr_payment_device_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
