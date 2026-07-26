# `person_visit_address`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_visit_address_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| addrpart | varchar(50) | YES |  | NULL |  |  |
| moopart | varchar(3) | YES |  | NULL |  |  |
| road | varchar(50) | YES |  | NULL |  |  |
| soi | varchar(50) | YES |  | NULL |  |  |
| chwpart | char(2) | YES | MUL | NULL |  |  |
| amppart | char(2) | YES | MUL | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| po_code | varchar(5) | YES | MUL | NULL |  |  |
| latitude | varchar(100) | YES |  | NULL |  |  |
| longitude | varchar(100) | YES |  | NULL |  |  |
| full_address | varchar(250) | YES |  | NULL |  |  |
| is_default | char(1) | YES |  | NULL |  |  |
| is_active | char(1) | YES | MUL | NULL |  |  |
| visit_address_date | date | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_perosn_visit_chwpart_amppart_tmbpart | amppart | no | 1 |
| ix_perosn_visit_chwpart_amppart_tmbpart | chwpart | no | 2 |
| ix_perosn_visit_chwpart_amppart_tmbpart | tmbpart | no | 3 |
| ix_person_visit_address_hn | hn | no | 1 |
| ix_person_visit_address_person_id | person_id | no | 1 |
| ix_person_visit_address_person_id_is_active | is_active | no | 1 |
| ix_person_visit_address_person_id_is_active | person_id | no | 2 |
| ix_person_visit_chwpart | chwpart | no | 1 |
| ix_person_visit_po_code | po_code | no | 1 |
| PRIMARY | person_visit_address_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
