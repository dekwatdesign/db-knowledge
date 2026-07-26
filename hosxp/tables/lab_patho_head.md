# `lab_patho_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_patho_head_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES | MUL | NULL |  |  |
| lab_items_code | int(11) | YES | MUL | NULL |  |  |
| lab_patho_type_id | int(11) | YES |  | NULL |  |  |
| lab_patho_receive | char(1) | YES |  | NULL |  |  |
| lab_patho_receive_date | date | YES |  | NULL |  |  |
| lab_patho_receive_time | time | YES |  | NULL |  |  |
| receive_doctorcode | varchar(15) | YES |  | NULL |  |  |
| lab_patho_report | char(1) | YES |  | NULL |  |  |
| lab_patho_report_date | date | YES | MUL | NULL |  |  |
| lab_patho_report_time | time | YES |  | NULL |  |  |
| lab_patho_slideno | varchar(50) | YES |  | NULL |  |  |
| lab_patho_slideno_count | int(11) | YES |  | NULL |  |  |
| lab_patho_slideno_seq | varchar(50) | YES |  | NULL |  |  |
| lab_patho_staff | varchar(15) | YES |  | NULL |  |  |
| lab_patho_pgist | varchar(15) | YES |  | NULL |  |  |
| lab_patho_inhos | char(1) | YES |  | NULL |  |  |
| lab_patho_hospcode | varchar(9) | YES |  | NULL |  |  |
| lab_patho_desc | text | YES |  | NULL |  |  |
| lab_patho_gross | text | YES |  | NULL |  |  |
| lab_patho_diag | text | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| lab_patho_name | varchar(250) | YES |  | NULL |  |  |
| lab_receive_staff | varchar(15) | YES |  | NULL |  |  |
| lab_patho_order_extra | char(1) | YES |  | NULL |  |  |
| lab_patho_order_extra_date | date | YES |  | NULL |  |  |
| lab_patho_respecimen | char(1) | YES |  | NULL |  |  |
| lab_patho_respecimen_date | date | YES |  | NULL |  |  |
| lab_patho_consult | char(1) | YES |  | NULL |  |  |
| lab_patho_consult_date | date | YES |  | NULL |  |  |
| lab_patho_print | varchar(15) | YES |  | NULL |  |  |
| lab_patho_print_date | date | YES |  | NULL |  |  |
| lab_patho_print_time | time | YES |  | NULL |  |  |
| lab_patho_subgross | varchar(15) | YES |  | NULL |  |  |
| lab_patho_subgross_date | date | YES |  | NULL |  |  |
| lab_patho_subgross_time | time | YES |  | NULL |  |  |
| lab_patho_rent_slide | char(1) | YES |  | NULL |  |  |
| lab_patho_rent_slide_date | date | YES |  | NULL |  |  |
| lab_patho_rent_slide_no | varchar(100) | YES |  | NULL |  |  |
| lab_patho_rent_slide_count | int(11) | YES |  | NULL |  |  |
| lab_patho_return_slide | char(1) | YES |  | NULL |  |  |
| lab_patho_return_slide_date | date | YES |  | NULL |  |  |
| lab_patho_return_slide_no | varchar(100) | YES |  | NULL |  |  |
| lab_patho_return_slide_count | int(11) | YES |  | NULL |  |  |
| lab_patho_order_extra_no | varchar(100) | YES |  | NULL |  |  |
| lab_patho_order_extra_count | int(11) | YES |  | NULL |  |  |
| lab_patho_staff_date | date | YES |  | NULL |  |  |
| lab_patho_operate_date | date | YES |  | NULL |  |  |
| lab_patho_icd_o | varchar(7) | YES |  | NULL |  |  |
| lab_patho_micro | text | YES |  | NULL |  |  |
| lab_patho_gross_date | date | YES |  | NULL |  |  |
| lab_patho_diag_date | date | YES |  | NULL |  |  |
| lab_patho_micro_date | date | YES |  | NULL |  |  |
| lab_patho_add_work | text | YES |  | NULL |  |  |
| lab_patho_result_text | text | YES |  | NULL |  |  |
| lab_patho_gross_text | text | YES |  | NULL |  |  |
| lab_patho_diag_text | text | YES |  | NULL |  |  |
| lab_patho_micro_text | text | YES |  | NULL |  |  |
| lab_patho_pgist_date | date | YES |  | NULL |  |  |
| lab_patho_pgist_time | time | YES |  | NULL |  |  |
| lab_patho_operate_time | time | YES |  | NULL |  |  |
| lab_patho_respecimen_time | time | YES |  | NULL |  |  |
| lab_patho_consult_time | time | YES |  | NULL |  |  |
| lab_patho_order_extra_time | time | YES |  | NULL |  |  |
| lab_patho_rent_slide_time | time | YES |  | NULL |  |  |
| lab_patho_return_slide_time | time | YES |  | NULL |  |  |
| lab_patho_leave | char(1) | YES |  | NULL |  |  |
| lab_patho_leave_date | date | YES |  | NULL |  |  |
| lab_patho_leave_time | time | YES |  | NULL |  |  |
| lab_patho_leave_staff | varchar(15) | YES |  | NULL |  |  |
| lab_patho_staff_time | time | YES |  | NULL |  |  |
| lab_patho_volume | varchar(100) | YES |  | NULL |  |  |
| lab_patho_order_extra_inhos | char(1) | YES |  | NULL |  |  |
| lab_patho_order_extra_outhos | char(1) | YES |  | NULL |  |  |
| lab_patho_cell_block | char(1) | YES |  | NULL |  |  |
| lab_patho_cell_block_date | date | YES |  | NULL |  |  |
| lab_patho_cell_block_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_items_code | lab_items_code | no | 1 |
| ix_lab_order_number | lab_order_number | no | 1 |
| ix_lab_patho_report_date | lab_patho_report_date | no | 1 |
| PRIMARY | lab_patho_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
