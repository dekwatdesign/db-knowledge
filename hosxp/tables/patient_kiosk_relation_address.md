# `patient_kiosk_relation_address`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_relation_address_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| patient_relation_type_id | int(11) | YES |  | NULL |  |  |
| addrpart | varchar(250) | YES |  | NULL |  |  |
| road | varchar(200) | YES |  | NULL |  |  |
| moopart | varchar(50) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| po_code | char(5) | YES |  | NULL |  |  |
| email | varchar(100) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| phone | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| mobile | varchar(50) | YES |  | NULL |  |  |
| soi | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_relation_address_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
