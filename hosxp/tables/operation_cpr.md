# `operation_cpr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_cpr_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| cpr_date | date | YES |  | NULL |  |  |
| cpr_time | time | YES |  | NULL |  |  |
| cpr_note_text | text | YES |  | NULL |  |  |
| is_death | char(1) | YES |  | NULL |  |  |
| death_date | date | YES |  | NULL |  |  |
| death_time | time | YES |  | NULL |  |  |
| finish_date | date | YES |  | NULL |  |  |
| finish_time | time | YES |  | NULL |  |  |
| has_defibrillator | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | operation_id | no | 1 |
| PRIMARY | operation_cpr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
