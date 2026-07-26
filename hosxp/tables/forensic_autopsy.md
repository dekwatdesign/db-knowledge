# `forensic_autopsy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| forensic_autopsy_id | int(11) | NO | PRI | 0 |  |  |
| forensic_autopsy_result | longtext | YES |  | NULL |  |  |
| forensic_autopsy_text | longtext | YES |  | NULL |  |  |
| forensic_autopsy_date | date | YES |  | NULL |  |  |
| forensic_autopsy_time | time | YES |  | NULL |  |  |
| forensic_status | char(1) | YES |  | NULL |  |  |
| forensic_death_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| forensic_autopsy_comment | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refforensic_death27 | forensic_death_id | no | 1 |
| PRIMARY | forensic_autopsy_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
