# `refer_symptom_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_symptom_note_id | int(11) | NO | PRI | 0 |  |  |
| refer_queue_id | int(11) | YES | MUL | NULL |  |  |
| symptom_datetime | datetime | YES |  | NULL |  |  |
| vital_sign_text | text | YES |  | NULL |  |  |
| symptom_text | text | YES |  | NULL |  |  |
| nursing_text | text | YES |  | NULL |  |  |
| referout_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_referout_id | referout_id | no | 1 |
| ix_refer_queue_id | refer_queue_id | no | 1 |
| PRIMARY | refer_symptom_note_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
