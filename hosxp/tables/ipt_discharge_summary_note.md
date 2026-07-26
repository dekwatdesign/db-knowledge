# `ipt_discharge_summary_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_discharge_summary_note_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| doctor_code | varchar(25) | YES |  | NULL |  |  |
| summary_datetime | datetime | YES |  | NULL |  |  |
| summary_note_text | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | ipt_discharge_summary_note_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
