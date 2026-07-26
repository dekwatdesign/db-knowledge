# `stock_supplier`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supplier_id | int(11) | NO | PRI | 0 |  |  |
| supplier_name | varchar(150) | YES | MUL | NULL |  |  |
| supplier_address1 | varchar(250) | YES |  | NULL |  |  |
| supplier_address2 | varchar(250) | YES |  | NULL |  |  |
| supplier_phone | varchar(150) | YES |  | NULL |  |  |
| supplier_fax | varchar(150) | YES |  | NULL |  |  |
| supplier_agent_name | varchar(250) | YES |  | NULL |  |  |
| supplier_agent_contact | varchar(250) | YES |  | NULL |  |  |
| company_type | varchar(50) | YES | MUL | NULL |  |  |
| company_code | varchar(10) | YES | MUL | NULL |  |  |
| supplier_credit | int(11) | YES |  | NULL |  |  |
| supplier_discount | int(11) | YES |  | NULL |  |  |
| supplier_balance | double(15,3) | YES |  | NULL |  |  |
| supplier_remain | double(15,3) | YES |  | NULL |  |  |
| supplier_purchase_month | double(15,3) | YES |  | NULL |  |  |
| supplier_purchase_year | double(15,3) | YES |  | NULL |  |  |
| supplier_pay_month | double(15,3) | YES |  | NULL |  |  |
| supplier_pay_year | double(15,3) | YES |  | NULL |  |  |
| supplier_pay_LastDate | date | YES |  | NULL |  |  |
| supplier_pay_Lastttime | time | YES |  | NULL |  |  |
| supplier_contact_LastDate | date | YES |  | NULL |  |  |
| supplier_contact_Lasttime | time | YES |  | NULL |  |  |
| supplier_tax | char(1) | YES |  | NULL |  |  |
| supplier_note | longtext | YES |  | NULL |  |  |
| supplier_oldcode | varchar(30) | YES |  | NULL |  |  |
| internal_code | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| didstd_code | varchar(5) | YES |  | NULL |  |  |
| stock_supplier_type_id | int(11) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES | MUL | NULL |  |  |
| transport_day | int(11) | YES |  | NULL |  |  |
| supplier_title | varchar(100) | YES |  | NULL |  |  |
| supplier_suffix | varchar(100) | YES |  | NULL |  |  |
| supplier_vat | varchar(30) | YES |  | NULL |  |  |
| stock_supplier_parent_id | int(11) | YES |  | NULL |  |  |
| supplier_tax_no | varchar(30) | YES |  | NULL |  |  |
| supplier_in_blacklist | char(1) | YES |  | NULL |  |  |
| active_status | char(1) | YES | MUL | NULL |  |  |
| nationality | char(3) | YES |  | NULL |  |  |
| item_count | int(11) | YES |  | NULL |  |  |
| supplier_url | varchar(200) | YES |  | NULL |  |  |
| supplier_begin_date | date | YES |  | NULL |  |  |
| supplier_end_date | date | YES |  | NULL |  |  |
| supplier_email | varchar(150) | YES |  | NULL |  |  |
| supplier_mobile | varchar(150) | YES |  | NULL |  |  |
| vendor_list_text | varchar(250) | YES |  | NULL |  |  |
| stock_vendor_link_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_active_status | active_status | no | 1 |
| ix_company_code | company_code | no | 1 |
| ix_company_type | company_type | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_supplier_name | supplier_name | no | 1 |
| ix_warehouse_id | warehouse_id | no | 1 |
| PRIMARY | supplier_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
