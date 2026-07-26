# `drug_delivery_address`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_delivery_address_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(13) | YES | MUL | NULL |  |  |
| addrpart | varchar(50) | YES |  | NULL |  |  |
| village | varchar(50) | YES |  | NULL |  |  |
| moopart | char(3) | YES |  | NULL |  |  |
| soi | varchar(100) | YES |  | NULL |  |  |
| road | varchar(50) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| po_code | varchar(5) | YES |  | NULL |  |  |
| latitude | varchar(50) | YES |  | NULL |  |  |
| longitude | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refpatient6 | hn | no | 1 |
| PRIMARY | drug_delivery_address_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
