# `universal_form_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| universal_form_department_id | int(11) | NO | PRI | 0 |  |  |
| universal_form_id | int(11) | YES | MUL | NULL |  |  |
| depcode | varchar(3) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | universal_form_id | yes | 1 |
| ix_unique | depcode | yes | 2 |
| ix_unique_index | depcode | yes | 1 |
| ix_unique_index | universal_form_id | yes | 2 |
| ix_universal_form_id | universal_form_id | no | 1 |
| PRIMARY | universal_form_department_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
