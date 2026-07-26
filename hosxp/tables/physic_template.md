# `physic_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_template_id | int(11) | NO | PRI | 0 |  |  |
| physic_template_name | varchar(255) | YES | MUL | NULL |  |  |
| doctor_code | varchar(6) | YES | MUL | NULL |  |  |
| physic_template_lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dc | doctor_code | no | 1 |
| ix_physic_template_name | physic_template_name | no | 1 |
| PRIMARY | physic_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
