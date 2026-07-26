# `nutri_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutri_template_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| nutri_template_name | varchar(100) | YES |  | NULL |  |  |
| nutri_template_text | text | YES |  | NULL |  |  |
| nutri_template_text1 | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdoctor28 | doctor_code | no | 1 |
| PRIMARY | nutri_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
