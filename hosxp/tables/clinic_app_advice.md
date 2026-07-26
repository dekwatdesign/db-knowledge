# `clinic_app_advice`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_app_advice_id | int(11) | NO | PRI | 0 |  |  |
| clinic | char(3) | YES | MUL | NULL |  |  |
| advice_text | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic | clinic | no | 1 |
| PRIMARY | clinic_app_advice_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
