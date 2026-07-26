# `user_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| user_template_id | int(11) | NO | PRI | 0 |  |  |
| user_login | varchar(50) | YES | MUL | NULL |  |  |
| user_name | varchar(200) | YES |  | NULL |  |  |
| template_name | varchar(200) | YES | MUL | NULL |  |  |
| template_group | varchar(100) | YES | MUL | NULL |  |  |
| template_description | varchar(2000) | YES |  | NULL |  |  |
| template_data_xml | varchar(10000) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| template_grid | blob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_user_login | user_login | no | 1 |
| ix_user_login_template_name | template_name | no | 1 |
| ix_user_login_template_name | user_login | no | 2 |
| ix_user_login_template_name_group | template_group | yes | 1 |
| ix_user_login_template_name_group | template_name | yes | 2 |
| ix_user_login_template_name_group | user_login | yes | 3 |
| PRIMARY | user_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
