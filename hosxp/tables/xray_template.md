# `xray_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| template_id | int(11) | NO | PRI | 0 |  |  |
| template_name | varchar(250) | YES | UNI | NULL |  |  |
| template_data | longblob | YES |  | NULL |  |  |
| template_text | longtext | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| doctor_code | varchar(10) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | template_id | yes | 1 |
| template_name | template_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
