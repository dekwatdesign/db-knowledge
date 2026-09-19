# `work_favorites`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| gtw_user_id | int | NO | MUL | NULL |  | FK → GTW users.id |
| item_type | varchar(20) | NO |  | NULL |  | work_app \| custom_app |
| item_id | int | NO |  | NULL |  | FK → work_apps.id หรือ work_custom_apps.id |
| created_at | datetime | NO |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_gtw_user_id | gtw_user_id | no | 1 |
| PRIMARY | id | yes | 1 |
| uk_user_item | gtw_user_id | yes | 1 |
| uk_user_item | item_type | yes | 2 |
| uk_user_item | item_id | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
