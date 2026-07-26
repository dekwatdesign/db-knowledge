# `evaluate_form`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| evaluate_form_id | int(11) | NO | PRI | 0 |  |  |
| evaluate_form_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_evaluate_form_name | evaluate_form_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | evaluate_form_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
