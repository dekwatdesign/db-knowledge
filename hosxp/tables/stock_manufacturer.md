# `stock_manufacturer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| manufacturer_id | int(11) | NO | PRI | 0 |  |  |
| manufacturer_name | varchar(150) | YES | UNI | NULL |  |  |
| manufacturer_address1 | varchar(250) | YES |  | NULL |  |  |
| manufacturer_address2 | varchar(250) | YES |  | NULL |  |  |
| manufacturer_phone | varchar(150) | YES |  | NULL |  |  |
| manufacturer_fax | varchar(150) | YES |  | NULL |  |  |
| manufacturer_tax | char(1) | YES |  | NULL |  |  |
| manufacturer_note | longtext | YES |  | NULL |  |  |
| manufacturer_oldcode | varchar(30) | YES |  | NULL |  |  |
| manufacturer_in_blacklist | char(1) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| manufacturer_url | varchar(200) | YES |  | NULL |  |  |
| manufacturer_begin_date | date | YES |  | NULL |  |  |
| manufacturer_end_date | date | YES |  | NULL |  |  |
| manufacturer_email | varchar(150) | YES |  | NULL |  |  |
| manufacturer_mobile | varchar(150) | YES |  | NULL |  |  |
| is_blacklist | char(1) | YES |  | NULL |  |  |
| manufacturer_code | varchar(50) | YES |  | NULL |  |  |
| supplier_item_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique | manufacturer_name | yes | 1 |
| PRIMARY | manufacturer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
