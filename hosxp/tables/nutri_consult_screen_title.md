# `nutri_consult_screen_title`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutri_consult_screen_title_id | int(11) | NO | PRI | 0 |  |  |
| nutri_cs_screen_title_name | varchar(100) | YES |  | NULL |  |  |
| nutri_cs_screen_title_code | varchar(20) | YES |  | NULL |  |  |
| nutri_cs_screen_title_active | char(1) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdoctor39 | doctor_code | no | 1 |
| PRIMARY | nutri_consult_screen_title_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
