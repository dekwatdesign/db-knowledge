# `lab_form_web_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_form_web_template_id | int(11) | NO | PRI | NULL |  |  |
| template_name | varchar(150) | YES |  | NULL |  |  |
| officer_id | int(11) | YES | MUL | NULL |  |  |
| create_datetime | datetime | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| is_shared | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_lab_form_web_template_officer | officer_id | no | 1 |
| PRIMARY | lab_form_web_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
