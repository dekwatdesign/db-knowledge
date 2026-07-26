# `dw_refer_person`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_guid | varchar(38) | NO | PRI |  |  |  |
| hospcode | varchar(9) | YES | MUL | NULL |  |  |
| cid | char(13) | YES | MUL | NULL |  |  |
| pname | varchar(30) | YES |  | NULL |  |  |
| fname | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| birthdate | date | YES |  | NULL |  |  |
| addrpart | varchar(50) | YES |  | NULL |  |  |
| moopart | varchar(10) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| drug_allergy | varchar(150) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | person_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
