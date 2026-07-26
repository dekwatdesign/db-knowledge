# `company_contact`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| company_id | int(11) | NO | PRI | 0 |  |  |
| company_name | varchar(250) | YES | MUL | NULL |  |  |
| address1 | varchar(250) | YES |  | NULL |  |  |
| address2 | varchar(250) | YES |  | NULL |  |  |
| business_type_id | int(11) | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| discount | int(11) | YES |  | NULL |  |  |
| signature_picture | longblob | YES |  | NULL |  |  |
| map_picture | longblob | YES |  | NULL |  |  |
| employee_count | int(11) | YES |  | NULL |  |  |
| bill_date | date | YES |  | NULL |  |  |
| bill_place | varchar(250) | YES |  | NULL |  |  |
| credit_date_number | int(11) | YES |  | NULL |  |  |
| oldcode | varchar(25) | YES |  | NULL |  |  |
| contract_number | varchar(25) | YES |  | NULL |  |  |
| max_debt_money | double(15,3) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| company_note | text | YES |  | NULL |  |  |
| active_status | char(1) | YES | MUL | NULL |  |  |
| debtor_no | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_active_status | active_status | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | company_name | no | 1 |
| PRIMARY | company_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
