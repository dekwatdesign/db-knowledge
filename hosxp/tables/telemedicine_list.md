# `telemedicine_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| telemedicine_list_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| doctor_code | varchar(20) | YES | MUL | NULL |  |  |
| start_datetime | datetime | YES |  | NULL |  |  |
| finish_datetime | datetime | YES |  | NULL |  |  |
| video_url | varchar(3000) | YES |  | NULL |  |  |
| transcription_text | varchar(3000) | YES |  | NULL |  |  |
| summarize_text | varchar(2000) | YES |  | NULL |  |  |
| flag | varchar(50) | YES |  | NULL |  |  |
| queue_no | int(11) | YES |  | NULL |  |  |
| phr_otp | varchar(10) | YES |  | NULL |  |  |
| medgemma_summarize_text | varchar(4000) | YES |  | NULL |  |  |
| medgemma_suggest_question_text | varchar(2000) | YES |  | NULL |  |  |
| medgemma_call_datetime | datetime | YES |  | NULL |  |  |
| phr_otp_datetime | datetime | YES |  | NULL |  |  |
| asr_transcript_nurse | varchar(4000) | YES |  | NULL |  |  |
| asr_transcript_doctor | varchar(4000) | YES |  | NULL |  |  |
| asr_transcript_pharmacist | varchar(4000) | YES |  | NULL |  |  |
| triage_level | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_vn | vn | yes | 1 |
| PRIMARY | telemedicine_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
