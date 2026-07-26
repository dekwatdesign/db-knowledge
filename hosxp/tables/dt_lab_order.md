# `dt_lab_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_lab_order_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| department | varchar(3) | YES |  | NULL |  |  |
| dt_lab_order_doctor | char(6) | YES |  | NULL |  |  |
| dt_lab_order_adviser | char(6) | YES |  | NULL |  |  |
| dt_lab_order_date | date | YES |  | NULL |  |  |
| dt_lab_order_time | time | YES |  | NULL |  |  |
| dt_lab_order_depcode | char(3) | YES |  | NULL |  |  |
| dt_lab_order_adviser_approve | char(1) | YES |  | NULL |  |  |
| dt_lab_order_receive_number | int(11) | YES |  | NULL |  |  |
| dt_lab_order_receive_date | date | YES |  | NULL |  |  |
| dt_lab_order_receive_time | time | YES |  | NULL |  |  |
| dt_lab_order_receive_doctor | char(6) | YES |  | NULL |  |  |
| dt_lab_order_confirm | char(1) | YES |  | NULL |  |  |
| dt_lab_order_confirm_doctor | char(6) | YES |  | NULL |  |  |
| dt_lab_order_status_id | int(11) | YES |  | NULL |  |  |
| dt_lab_order_design | char(1) | YES |  | NULL |  |  |
| dt_lab_order_img_upper | longblob | YES |  | NULL |  |  |
| dt_lab_order_doc_upper | longblob | YES |  | NULL |  |  |
| dt_lab_order_img_lower | longblob | YES |  | NULL |  |  |
| dt_lab_order_doc_lower | longblob | YES |  | NULL |  |  |
| dt_lab_color_type_id | int(11) | YES |  | NULL |  |  |
| dt_lab_dental_type_id | int(11) | YES |  | NULL |  |  |
| dt_lab_order_note | text | YES |  | NULL |  |  |
| dt_lab_form_name | varchar(250) | YES |  | NULL |  |  |
| staff | varchar(250) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| dt_lab_order_finish_date | date | YES |  | NULL |  |  |
| dt_lab_order_other | char(1) | YES |  | NULL |  |  |
| dt_lab_order_test | char(1) | YES |  | NULL |  |  |
| dt_lab_order_test_date | date | YES |  | NULL |  |  |
| dt_lab_order_quality | char(1) | YES |  | NULL |  |  |
| dt_lab_order_install | char(1) | YES |  | NULL |  |  |
| dt_lab_order_install_date | date | YES |  | NULL |  |  |
| dt_lab_outlab_company_id | int(11) | YES |  | NULL |  |  |
| dt_lab_form_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_lab_order_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
