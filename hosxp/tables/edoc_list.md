# `edoc_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_id | int(11) | NO | PRI | 0 |  |  |
| send_from | varchar(250) | YES | MUL | NULL |  |  |
| subject | varchar(250) | YES | MUL | NULL |  |  |
| send_to | varchar(250) | YES | MUL | NULL |  |  |
| send_doc_number | varchar(100) | YES |  | NULL |  |  |
| send_date | date | YES | MUL | NULL |  |  |
| receive_date | date | YES | MUL | NULL |  |  |
| receive_time | time | YES |  | NULL |  |  |
| edoc_keyword | varchar(250) | YES | MUL | NULL |  |  |
| edoc_store_number | varchar(25) | YES |  | NULL |  |  |
| edoc_summary | text | YES |  | NULL |  |  |
| edoc_type_id | int(11) | YES | MUL | NULL |  |  |
| scan_page_count | int(11) | YES |  | NULL |  |  |
| edoc_priority_id | int(11) | YES |  | NULL |  |  |
| edoc_security_id | int(11) | YES |  | NULL |  |  |
| edoc_refer_to | varchar(250) | YES |  | NULL |  |  |
| edoc_include_document | varchar(250) | YES |  | NULL |  |  |
| edoc_transport_id | int(11) | YES |  | NULL |  |  |
| edoc_objective_id | int(11) | YES |  | NULL |  |  |
| edoc_expire_date | date | YES |  | NULL |  |  |
| edoc_finish_date | date | YES |  | NULL |  |  |
| edoc_work_trace | char(1) | YES |  | NULL |  |  |
| edoc_status_id | int(11) | YES |  | NULL |  |  |
| wait_process | char(1) | YES | MUL | NULL |  |  |
| edoc_receive_no | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| edoc_keyword | edoc_keyword | no | 1 |
| edoc_type_id | edoc_type_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | edoc_id | yes | 1 |
| receive_date | receive_date | no | 1 |
| send_date | send_date | no | 1 |
| send_from | send_from | no | 1 |
| send_to | send_to | no | 1 |
| subject | subject | no | 1 |
| wait_process | wait_process | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
