# `doctor_rx_authorization_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_rx_authorization_list_id | int(11) | NO | PRI | 0 |  |  |
| doctor_rx_authorization_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| authorization_rx_datetime | datetime | YES |  | NULL |  |  |
| doctor_code1 | varchar(9) | YES |  | NULL |  |  |
| doctor_code2 | varchar(9) | YES |  | NULL |  |  |
| authorization_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_rx_authorization_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
