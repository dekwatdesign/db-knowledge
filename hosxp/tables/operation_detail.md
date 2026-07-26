# `operation_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_detail_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| operation_item_id | int(11) | YES | MUL | NULL |  |  |
| doctor | varchar(9) | YES | MUL | NULL |  |  |
| begin_datetime | datetime | YES |  | NULL |  |  |
| end_datetime | datetime | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| icdcode | varchar(9) | YES |  | NULL |  |  |
| wait_save | char(1) | YES |  | NULL |  |  |
| opitemrece_guid | varchar(38) | YES | MUL | NULL |  |  |
| operation_wound_id | int(11) | YES |  | NULL |  |  |
| operation_order_number | int(11) | YES |  | NULL |  |  |
| operation_position | int(11) | YES |  | NULL |  |  |
| wound_price | double(15,3) | YES |  | NULL |  |  |
| wound_qty | int(11) | YES |  | NULL |  |  |
| wound_type | varchar(100) | YES |  | NULL |  |  |
| patient_position | varchar(50) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| operation_side | varchar(50) | YES |  | NULL |  |  |
| extenstion_code | varchar(10) | YES |  | NULL |  |  |
| electric_touch | char(1) | YES |  | NULL |  |  |
| extension_code | varchar(15) | YES |  | NULL |  |  |
| diagnosis_text | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| oper_type | int(11) | YES |  | NULL |  |  |
| ovst_oper_type | int(11) | YES |  | NULL |  |  |
| biopsy | char(1) | YES |  | NULL |  |  |
| operation_type_id | int(11) | YES |  | NULL |  |  |
| operation_time_hour | int(11) | YES |  | NULL |  |  |
| operation_time_minute | int(11) | YES |  | NULL |  |  |
| cancel_operation_reason | varchar(200) | YES |  | NULL |  |  |
| spclty | varchar(2) | YES |  | NULL |  |  |
| room_id | int(11) | YES |  | NULL |  |  |
| operation_detail_note | text | YES |  | NULL |  |  |
| time_out_datetime | datetime | YES |  | NULL |  |  |
| incision_datetime | datetime | YES |  | NULL |  |  |
| closure_datetime | datetime | YES |  | NULL |  |  |
| doctor_fee_type_id | int(11) | YES |  | NULL |  |  |
| diag_ext_type_id | int(11) | YES |  | NULL |  |  |
| link_diag_id | int(11) | YES |  | NULL |  |  |
| is_trauma | char(1) | YES |  | NULL |  |  |
| discount_25_percent | char(1) | YES |  | NULL |  |  |
| include_df_price | char(1) | YES |  | NULL |  |  |
| df_price | double(15,3) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| operation_trauma_type_id | int(11) | YES |  | NULL |  |  |
| operation_result_type_id | int(11) | YES |  | NULL |  |  |
| charge_price | double(15,3) | YES |  | NULL |  |  |
| clinical_term | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_opitemrece_guid | opitemrece_guid | no | 1 |
| operation_id | operation_id | no | 1 |
| operation_item_id | operation_item_id | no | 1 |
| PRIMARY | operation_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
