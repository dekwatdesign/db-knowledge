# `lab_form_web_template_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_form_web_template_detail_id | int(11) | NO | PRI | NULL |  |  |
| lab_form_web_template_id | int(11) | YES | MUL | NULL |  |  |
| lab_type | tinyint(4) | YES |  | NULL |  |  |
| lab_code | int(11) | YES |  | NULL |  |  |
| lab_name | varchar(255) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_lab_form_web_template_detail_template | lab_form_web_template_id | no | 1 |
| PRIMARY | lab_form_web_template_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
