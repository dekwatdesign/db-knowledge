# `work_online_form_fields`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| form_id | int | NO | UNI | NULL |  |  |
| fields_json | longtext | NO |  | NULL |  |  |
| updated_by | int | NO |  | NULL |  |  |
| updated_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |
| uniq_online_form_fields_form | form_id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| form_id | `work_online_forms.id` | fk_online_form_fields_form |

## Sample rows (0)

```json
[]
```
