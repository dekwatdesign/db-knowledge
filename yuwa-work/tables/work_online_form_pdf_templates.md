# `work_online_form_pdf_templates`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| form_id | int | NO | MUL | NULL |  |  |
| title | varchar(255) | NO |  | NULL |  |  |
| original_name | varchar(255) | NO |  | NULL |  |  |
| stored_name | varchar(255) | NO |  | NULL |  |  |
| file_path | varchar(500) | NO |  | NULL |  |  |
| file_size | int | NO |  | 0 |  |  |
| page_count | int | NO |  | 0 |  |  |
| layout_json | longtext | YES |  | NULL |  |  |
| is_submitter_downloadable | varchar(1) | NO |  | N |  |  |
| sort_order | int | NO |  | 0 |  |  |
| created_by | int | NO |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |
| is_active | varchar(1) | NO | MUL | Y |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_online_form_pdf_templates_active | is_active | no | 1 |
| idx_online_form_pdf_templates_form | form_id | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| form_id | `work_online_forms.id` | fk_online_form_pdf_templates_form |

## Sample rows (0)

```json
[]
```
