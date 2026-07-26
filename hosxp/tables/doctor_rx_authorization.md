# `doctor_rx_authorization`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_rx_authorization_id | int(11) | NO | PRI | 0 |  |  |
| authorize_doctor_code | varchar(9) | YES | MUL | NULL |  |  |
| receive_doctor_code | varchar(9) | YES |  | NULL |  |  |
| authorize_datetime | datetime | YES |  | NULL |  |  |
| expire_hour | int(11) | YES |  | NULL |  |  |
| authorization_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_authorize_doctor_code | authorize_doctor_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_rx_authorization_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
