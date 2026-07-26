# `opd_ai_summarize`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_ai_summarize_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| rx_summarize_text | text | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| patient_text | text | YES |  | NULL |  |  |
| last_send_patient_notify | datetime | YES |  | NULL |  |  |
| short_summarize_text | text | YES |  | NULL |  |  |
| last_emr_md5 | varchar(50) | YES |  | NULL |  |  |
| herbal_med_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | yes | 1 |
| PRIMARY | opd_ai_summarize_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
