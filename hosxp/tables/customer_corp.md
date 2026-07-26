# `customer_corp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| customer_corp_id | int(11) | NO | PRI | 0 |  |  |
| customer_corp_name | varchar(200) | YES |  | NULL |  |  |
| customer_corp_tax_id | varchar(100) | YES |  | NULL |  |  |
| customer_corp_fax | varchar(20) | YES |  | NULL |  |  |
| customer_corp_account | varchar(20) | YES |  | NULL |  |  |
| acc_bank_type_id | int(11) | YES |  | NULL |  |  |
| customer_corp_acc_name | varchar(200) | YES |  | NULL |  |  |
| customer_corp_email | varchar(100) | YES |  | NULL |  |  |
| customer_corp_phone | varchar(100) | YES |  | NULL |  |  |
| customer_corp_addrpart | varchar(50) | YES |  | NULL |  |  |
| customer_corp_moopart | char(3) | YES |  | NULL |  |  |
| customer_corp_tmbpart | char(2) | YES |  | NULL |  |  |
| customer_corp_amppart | char(2) | YES |  | NULL |  |  |
| customer_corp_chwpart | char(2) | YES |  | NULL |  |  |
| customer_corp_road | varchar(50) | YES |  | NULL |  |  |
| customer_corp_soi | varchar(100) | YES |  | NULL |  |  |
| customer_corp_postcode | varchar(5) | YES |  | NULL |  |  |
| customer_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | customer_corp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
