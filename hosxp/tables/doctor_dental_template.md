# `doctor_dental_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_dental_template_id | int(11) | NO | PRI | 0 |  |  |
| doctor | varchar(6) | YES |  | NULL |  |  |
| template_name | varchar(50) | YES |  | NULL |  |  |
| template_text | longtext | YES |  | NULL |  |  |
| hos_guid | char(38) | YES |  | NULL |  |  |
| template_field_text | text | YES |  | NULL |  |  |
| template_normal_text | text | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | doctor_dental_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
