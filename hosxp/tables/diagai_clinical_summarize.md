# `diagai_clinical_summarize`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| diagai_clinical_summarize_guid | varchar(40) | NO | PRI |  |  |  |
| ipt_discharge_summary_note_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_diagai_clinical_summarize_guid_ipt_discharge_summary_note_id | diagai_clinical_summarize_guid | yes | 1 |
| ix_diagai_clinical_summarize_guid_ipt_discharge_summary_note_id | ipt_discharge_summary_note_id | yes | 2 |
| PRIMARY | diagai_clinical_summarize_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
