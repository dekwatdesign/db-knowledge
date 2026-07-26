# `opi_disp_ds_calc_5_series`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_disp_ds_calc_5_series_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| qty | double(15,3) | YES |  | NULL |  |  |
| usage_code | varchar(10) | YES |  | NULL |  |  |
| dose | double(15,3) | YES |  | NULL |  |  |
| unit_name | varchar(25) | YES |  | NULL |  |  |
| frequency_code | varchar(10) | YES |  | NULL |  |  |
| time_code | varchar(10) | YES |  | NULL |  |  |
| drug_hint_text | varchar(150) | YES |  | NULL |  |  |
| modify_datetime | datetime | YES |  | NULL |  |  |
| modify_staff | varchar(25) | YES |  | NULL |  |  |
| modify_computer | varchar(30) | YES |  | NULL |  |  |
| print_sticker | char(1) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| sp_use | varchar(9) | YES |  | NULL |  |  |
| usage_unit_code | varchar(10) | YES |  | NULL |  |  |
| doctor | varchar(9) | YES |  | NULL |  |  |
| usage_line1 | varchar(150) | YES |  | NULL |  |  |
| usage_line2 | varchar(150) | YES |  | NULL |  |  |
| usage_line3 | varchar(150) | YES |  | NULL |  |  |
| usage_line4 | varchar(150) | YES |  | NULL |  |  |
| usage_shortlist | varchar(150) | YES |  | NULL |  |  |
| usage_lock | char(1) | YES |  | NULL |  |  |
| med_plan_number | int(11) | YES |  | NULL |  |  |
| orderstatus | char(1) | YES |  | NULL |  |  |
| use_rx_pattern | char(1) | YES |  | NULL |  |  |
| opi_dispense_type_id | int(11) | YES |  | NULL |  |  |
| opi_dispense_item_type_id | int(11) | YES |  | NULL |  |  |
| opi_dispense_qty_type_id | int(11) | YES |  | NULL |  |  |
| opi_dispense_usage_type_id | int(11) | YES |  | NULL |  |  |
| opi_dispense_his_name | varchar(100) | YES |  | NULL |  |  |
| pttype_items_price_id | int(11) | YES |  | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| shortlist | varchar(250) | YES |  | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| usage_eng_line1 | varchar(150) | YES |  | NULL |  |  |
| usage_eng_line2 | varchar(150) | YES |  | NULL |  |  |
| usage_eng_line3 | varchar(150) | YES |  | NULL |  |  |
| usage_eng_line4 | varchar(150) | YES |  | NULL |  |  |
| lang | char(2) | YES |  | NULL |  |  |
| qty_per_day | double(15,3) | YES |  | NULL |  |  |
| finish_date | date | YES |  | NULL |  |  |
| usage_note | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_guid | opi_guid | no | 1 |
| PRIMARY | opi_disp_ds_calc_5_series_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
