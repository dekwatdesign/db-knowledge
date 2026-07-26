# `dashboard_url_users`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dashboard_url_users_id | int(11) | NO | PRI | NULL |  |  |
| dashboard_url_setting_id | int(11) | NO | MUL | NULL |  |  |
| staff | varchar(50) | NO | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_staff | staff | no | 1 |
| ix_staff_dashboard | dashboard_url_setting_id | yes | 1 |
| ix_staff_dashboard | staff | yes | 2 |
| PRIMARY | dashboard_url_users_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
