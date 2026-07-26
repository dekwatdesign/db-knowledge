# `forensic_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| forensic_template_id | int(11) | NO | PRI | 0 |  |  |
| forensic_template_name | varchar(25) | YES |  | NULL |  |  |
| forensic_template_text | longtext | YES |  | NULL |  |  |
| forensic_template_datetime | datetime | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| forensic_template_select | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | forensic_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
