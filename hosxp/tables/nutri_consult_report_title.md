# `nutri_consult_report_title`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutri_consult_report_title_id | int(11) | NO | PRI | 0 |  |  |
| nutri_cs_report_title_code | varchar(50) | YES |  | NULL |  |  |
| nutri_cs_report_title_name | varchar(150) | YES |  | NULL |  |  |
| nutri_cs_report_title_active | char(1) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| icd9 | varchar(9) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| price_opd | decimal(10,0) | YES |  | NULL |  |  |
| price_ipd | decimal(10,0) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdoctor29 | doctor_code | no | 1 |
| PRIMARY | nutri_consult_report_title_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
