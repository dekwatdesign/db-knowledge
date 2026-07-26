# `stock_vendor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_vendor_id | int(11) | NO | PRI | 0 |  |  |
| stock_vendor_name | varchar(200) | YES | MUL | NULL |  |  |
| stock_vendor_addr1 | varchar(200) | YES |  | NULL |  |  |
| stock_vendor_addr2 | varchar(200) | YES |  | NULL |  |  |
| stock_vendor_phone | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_fax | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_url | varchar(150) | YES |  | NULL |  |  |
| stock_vendor_minimum_bill_amt | double(15,3) | YES |  | NULL |  |  |
| stock_vendor_discount_percent | double(15,3) | YES |  | NULL |  |  |
| stock_vendor_due_day | int(11) | YES |  | NULL |  |  |
| stock_vendor_discontinue | char(1) | YES |  | NULL |  |  |
| stock_vendor_blacklist | char(1) | YES |  | NULL |  |  |
| stock_vendor_client_code | varchar(50) | YES |  | NULL |  |  |
| stock_vendor_cash_discount | double(15,3) | YES |  | NULL |  |  |
| stock_vendor_spcl_discount | double(15,3) | YES |  | NULL |  |  |
| stock_vendor_trade_discount | double(15,3) | YES |  | NULL |  |  |
| stock_vendor_mobile | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_tax1 | varchar(20) | YES | MUL | NULL |  |  |
| stock_vendor_tax2 | varchar(20) | YES | MUL | NULL |  |  |
| stock_vendor_tax3 | varchar(20) | YES |  | NULL |  |  |
| stock_vendor_ap_code | varchar(20) | YES | MUL | NULL |  |  |
| stock_vendor_email | varchar(150) | YES |  | NULL |  |  |
| stock_vendor_name_eng | varchar(200) | YES | MUL | NULL |  |  |
| stock_vendor_note | text | YES |  | NULL |  |  |
| client_code | varchar(30) | YES |  | NULL |  |  |
| stock_vendor_price_margin | double(15,3) | YES |  | NULL |  |  |
| stock_vendor_cash_disc_type_id | int(11) | YES |  | NULL |  |  |
| stock_vendor_vat_percent | double(15,3) | YES |  | NULL |  |  |
| stock_vendor_addr | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_moo | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_village | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_soi | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_road | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_tmb_name | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_amp_name | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_chw_name | varchar(100) | YES |  | NULL |  |  |
| stock_vendor_po_code | varchar(10) | YES |  | NULL |  |  |
| stock_vendor_active | char(1) | YES |  | NULL |  |  |
| supplier_list_text | varchar(250) | YES |  | NULL |  |  |
| stock_vendor_type_id | int(11) | YES |  | NULL |  |  |
| stock_vendor_blocked | char(1) | YES |  | NULL |  |  |
| stock_vendor_alt_addr | varchar(250) | YES |  | NULL |  |  |
| acc_ap_gov_org | char(1) | YES |  | NULL |  |  |
| stock_vendor_vmi_code | varchar(20) | YES |  | NULL |  |  |
| stock_vendor_vmi_enabled | char(1) | YES |  | NULL |  |  |
| stock_vendor_vmi_name | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_vendor_ap_code | stock_vendor_ap_code | no | 1 |
| ix_stock_vendor_name | stock_vendor_name | no | 1 |
| ix_stock_vendor_name_eng | stock_vendor_name_eng | no | 1 |
| ix_stock_vendor_tax1 | stock_vendor_tax1 | no | 1 |
| ix_stock_vendor_tax2 | stock_vendor_tax2 | no | 1 |
| PRIMARY | stock_vendor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
