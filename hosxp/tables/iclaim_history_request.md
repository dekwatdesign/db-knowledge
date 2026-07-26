# `iclaim_history_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_history_request_id | int(11) | NO | PRI | 0 |  |  |
| document_id | varchar(100) | YES |  | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| person_name | varchar(200) | YES |  | NULL |  |  |
| i_status | char(1) | YES | MUL | NULL |  |  |
| i_status_text | varchar(200) | YES |  | NULL |  |  |
| visit_count | int(11) | YES |  | NULL |  |  |
| admit_count | int(11) | YES |  | NULL |  |  |
| request_datetime | datetime | YES |  | NULL |  |  |
| processing_datetime | datetime | YES |  | NULL |  |  |
| processing_doctor_code | varchar(20) | YES |  | NULL |  |  |
| processing_status | char(1) | YES | MUL | NULL |  |  |
| processing_status_text | varchar(200) | YES |  | NULL |  |  |
| phr_text | longtext | YES |  | NULL |  |  |
| dhealth_cert_pdf | longblob | YES |  | NULL |  |  |
| insurance_org_name | varchar(150) | YES |  | NULL |  |  |
| send_dhealth | char(1) | YES |  | NULL |  |  |
| consent_pdf | longblob | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| pdf_ok | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_cid_document_id | cid | yes | 1 |
| ix_cid_document_id | document_id | yes | 2 |
| ix_doctor_code | doctor_code | no | 1 |
| ix_i_status | i_status | no | 1 |
| ix_processing_status | processing_status | no | 1 |
| PRIMARY | iclaim_history_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
