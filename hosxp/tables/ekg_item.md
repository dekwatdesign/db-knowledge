# `ekg_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ekg_item_id | int(11) | NO | PRI | 0 |  |  |
| ekg_item_name | varchar(200) | YES | UNI | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| price1 | double(15,3) | YES |  | NULL |  |  |
| price2 | double(15,3) | YES |  | NULL |  |  |
| price3 | double(15,3) | YES |  | NULL |  |  |
| ipd_price1 | double(15,3) | YES |  | NULL |  |  |
| ipd_price2 | double(15,3) | YES |  | NULL |  |  |
| ipd_price3 | double(15,3) | YES |  | NULL |  |  |
| icd9cm | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ekg_item_name | ekg_item_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ekg_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
