# `dt_lab_test`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_lab_test_id | int(11) | NO | PRI | 0 |  |  |
| dt_lab_test_receive_date | date | YES |  | NULL |  |  |
| dt_lab_test_receive_time | time | YES |  | NULL |  |  |
| dt_lab_test_receive_doctor | char(6) | YES |  | NULL |  |  |
| dt_lab_test_receive_depcode | char(3) | YES |  | NULL |  |  |
| dt_lab_test_send_doctor | char(6) | YES |  | NULL |  |  |
| dt_lab_test_send_date | date | YES |  | NULL |  |  |
| dt_lab_test_send_time | time | YES |  | NULL |  |  |
| dt_lab_test_check | char(1) | YES |  | NULL |  |  |
| dt_lab_test_check_date | date | YES |  | NULL |  |  |
| dt_lab_test_note | text | YES |  | NULL |  |  |
| dt_lab_test_tool | char(1) | YES |  | NULL |  |  |
| dt_lab_test_tool_re_date | date | YES |  | NULL |  |  |
| dt_lab_test_tool_re_doctor | char(6) | YES |  | NULL |  |  |
| dt_lab_order_id | int(11) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(250) | YES |  | NULL |  |  |
| dt_lab_test_document | char(1) | YES |  | NULL |  |  |
| dt_lab_test_lab_note | text | YES |  | NULL |  |  |
| dt_lab_test_receive_note | text | YES |  | NULL |  |  |
| dt_lab_test_type_id | int(11) | YES |  | NULL |  |  |
| dt_lab_quality_type_id | int(11) | YES |  | NULL |  |  |
| dt_lab_test_self_receive | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_lab_test_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
