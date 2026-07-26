# `lab_form_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_form_item_id | int(11) | NO | PRI | 0 |  |  |
| form_name | varchar(250) | YES | MUL | NULL |  |  |
| item_type | varchar(15) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| item_flag | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_form_name | form_name | no | 1 |
| ix_form_name_id | form_name | no | 1 |
| ix_form_name_id | item_type | no | 2 |
| ix_form_name_id | item_id | no | 3 |
| ix_form_name_id_index | form_name | no | 1 |
| ix_form_name_id_index | item_id | no | 2 |
| ix_form_name_id_index | item_type | no | 3 |
| PRIMARY | lab_form_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
