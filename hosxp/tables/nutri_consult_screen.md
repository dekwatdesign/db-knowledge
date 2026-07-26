# `nutri_consult_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutri_consult_screen_id | int(11) | NO | PRI | 0 |  |  |
| nutri_consult_screen_date | date | YES |  | NULL |  |  |
| nutri_cs_screen_begin_time | time | YES |  | NULL |  |  |
| nutri_cs_screen_end_time | time | YES |  | NULL |  |  |
| nutri_consult_screen_title | varchar(100) | YES |  | NULL |  |  |
| nutri_consult_screen_note | text | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| nutri_consult_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdoctor30 | doctor_code | no | 1 |
| ix_Refnutri_consult23 | nutri_consult_id | no | 1 |
| PRIMARY | nutri_consult_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
