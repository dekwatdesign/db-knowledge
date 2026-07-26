# `lab_order_colab_transaction`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_order_colab_transaction_id | int(11) | NO | PRI | 0 |  |  |
| lab_no | varchar(50) | YES | MUL | NULL |  |  |
| lab_items_code | int(11) | YES | MUL | NULL |  |  |
| process_flag | char(1) | YES |  | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| passport | varchar(100) | YES |  | NULL |  |  |
| birth | datetime | YES |  | NULL |  |  |
| pre_name | varchar(10) | YES |  | NULL |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| lname | varchar(100) | YES |  | NULL |  |  |
| name_eng | varchar(100) | YES |  | NULL |  |  |
| lname_eng | varchar(100) | YES |  | NULL |  |  |
| telephone | varchar(100) | YES |  | NULL |  |  |
| address | varchar(500) | YES |  | NULL |  |  |
| address_eng | varchar(500) | YES |  | NULL |  |  |
| nation | char(3) | YES |  | NULL |  |  |
| province | char(2) | YES |  | NULL |  |  |
| district | char(4) | YES |  | NULL |  |  |
| sub_district | char(6) | YES |  | NULL |  |  |
| send_department_code | varchar(20) | YES |  | NULL |  |  |
| send_department_name | varchar(150) | YES |  | NULL |  |  |
| receive_department_code | varchar(20) | YES |  | NULL |  |  |
| receive_department_name | varchar(150) | YES |  | NULL |  |  |
| speciment | varchar(100) | YES |  | NULL |  |  |
| objective | int(11) | YES |  | NULL |  |  |
| loinc | int(11) | YES |  | NULL |  |  |
| collection_date | datetime | YES |  | NULL |  |  |
| recieve_date | datetime | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| results | int(11) | YES |  | NULL |  |  |
| results_date | datetime | YES |  | NULL |  |  |
| ct_1 | varchar(100) | YES |  | NULL |  |  |
| ct_2 | varchar(100) | YES |  | NULL |  |  |
| ct_3 | varchar(100) | YES |  | NULL |  |  |
| gene_code_1 | varchar(200) | YES |  | NULL |  |  |
| gene_code_2 | varchar(200) | YES |  | NULL |  |  |
| gene_code_3 | varchar(200) | YES |  | NULL |  |  |
| approve_date | datetime | YES |  | NULL |  |  |
| remark | varchar(250) | YES |  | NULL |  |  |
| approver | varchar(200) | YES |  | NULL |  |  |
| send_date | datetime | YES |  | NULL |  |  |
| develop | varchar(5) | YES |  | NULL |  |  |
| tools | varchar(100) | YES |  | NULL |  |  |
| response_transaction | varchar(250) | YES |  | NULL |  |  |
| log_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_items_code | lab_items_code | no | 1 |
| ix_lab_no | lab_no | no | 1 |
| PRIMARY | lab_order_colab_transaction_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
