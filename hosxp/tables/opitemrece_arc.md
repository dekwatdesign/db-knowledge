# `opitemrece_arc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| drugusage | varchar(7) | YES | MUL | NULL |  |  |
| idr | varchar(30) | YES |  | NULL |  |  |
| iperday | int(11) | YES |  | NULL |  |  |
| iperdose | double(12,3) | YES |  | NULL |  |  |
| recetime | time | YES |  | NULL |  |  |
| unitprice | double(12,3) | YES |  | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| doctor | varchar(10) | YES | MUL | NULL |  |  |
| rxdate | date | YES | MUL | NULL |  |  |
| rxtime | time | YES |  | NULL |  |  |
| sp_use | varchar(7) | YES |  | NULL |  |  |
| hcode | varchar(5) | YES | MUL | NULL |  |  |
| print | char(1) | YES |  | NULL |  |  |
| dep_code | char(3) | YES |  | NULL |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| use_right | char(1) | YES |  | NULL |  |  |
| node_id | char(1) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| sub_type | char(1) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| remain | char(1) | YES |  | NULL |  |  |
| item_type | char(1) | YES | MUL | NULL |  |  |
| staff | varchar(15) | YES |  | NULL |  |  |
| doctor_lock | char(1) | YES |  | NULL |  |  |
| paidst | char(2) | YES |  | NULL |  |  |
| item_no | tinyint(4) | YES |  | NULL |  |  |
| last_modified | datetime | YES |  | NULL |  |  |
| sum_price | double(15,3) | YES |  | NULL |  |  |
| cost | double(15,3) | YES |  | NULL |  |  |
| stock_department_id | int(11) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| command_doctor | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_rxdate_icode | an | no | 1 |
| ix_an_rxdate_icode | rxdate | no | 2 |
| ix_an_rxdate_icode | icode | no | 3 |
| ix_an_rxdate_icode_index | an | no | 1 |
| ix_an_rxdate_icode_index | icode | no | 2 |
| ix_an_rxdate_icode_index | rxdate | no | 3 |
| ix_doctor | doctor | no | 1 |
| ix_drugusage | drugusage | no | 1 |
| ix_finance_number | finance_number | no | 1 |
| ix_hcode | hcode | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_icode | icode | no | 1 |
| ix_item_type | item_type | no | 1 |
| ix_pttype | pttype | no | 1 |
| ix_rxdate | rxdate | no | 1 |
| ix_sub_type | sub_type | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vstdate | vstdate | no | 1 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
