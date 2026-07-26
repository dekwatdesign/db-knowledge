# `doctor_cert_digital_pdf`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_cert_digital_pdf_id | int(11) | NO | PRI | 0 |  |  |
| doctor_cert_id | int(11) | YES | MUL | NULL |  |  |
| digital_pdf | longblob | YES |  | NULL |  |  |
| issue_datetime | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(25) | YES |  | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| document_id | varchar(100) | YES |  | NULL |  |  |
| pdf_url | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_doctor_cert_id | doctor_cert_id | no | 1 |
| PRIMARY | doctor_cert_digital_pdf_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
