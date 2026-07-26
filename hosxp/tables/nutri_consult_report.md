# `nutri_consult_report`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutri_consult_report_id | int(11) | NO | PRI | 0 |  |  |
| nutri_consult_report_date | date | YES |  | NULL |  |  |
| nutri_cs_report_begin_time | time | YES |  | NULL |  |  |
| nutri_cs_report_end_time | time | YES |  | NULL |  |  |
| nutri_consult_report_title | varchar(100) | YES |  | NULL |  |  |
| nutri_consult_report_note | text | YES |  | NULL |  |  |
| icd | varchar(9) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| price | decimal(10,0) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| nutri_consult_id | int(11) | YES | MUL | NULL |  |  |
| nutri_consult_report_note1 | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdoctor33 | doctor_code | no | 1 |
| ix_Refnutri_consult26 | nutri_consult_id | no | 1 |
| PRIMARY | nutri_consult_report_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
