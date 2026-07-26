# `lab_digital_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_digital_lab_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES |  | NULL |  |  |
| document_id | varchar(200) | YES | MUL | NULL |  |  |
| transaction_id | varchar(200) | YES |  | NULL |  |  |
| status_code | varchar(10) | YES |  | NULL |  |  |
| status_name | varchar(200) | YES |  | NULL |  |  |
| send_datetime | datetime | YES |  | NULL |  |  |
| response_json | text | YES |  | NULL |  |  |
| error_message | text | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_dlp_docid | document_id | no | 1 |
| ix_idx_dlp_docid | lab_digital_lab_id | no | 2 |
| ix_idx_dlp_order | lab_digital_lab_id | no | 1 |
| ix_idx_dlp_order | lab_order_number | no | 2 |
| PRIMARY | lab_digital_lab_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
