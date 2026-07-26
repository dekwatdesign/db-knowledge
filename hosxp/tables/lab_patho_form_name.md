# `lab_patho_form_name`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_patho_form_name_id | int(11) | NO | PRI | 0 |  |  |
| form_name | varchar(250) | YES | MUL | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| lab_patho_type_id | int(11) | YES |  | NULL |  |  |
| use_prefix_slide_no | char(1) | YES |  | NULL |  |  |
| prefix_slide_no | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_form_name | form_name | no | 1 |
| PRIMARY | lab_patho_form_name_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
