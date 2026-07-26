# `zapuser`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| zap_id | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| zap_fullname | varchar(255) | NO |  | NULL |  |  |
| zap_email | varchar(255) | NO |  | NULL |  |  |
| zap_username | varchar(255) | NO |  | NULL |  |  |
| zap_password | varchar(255) | NO |  | NULL |  |  |
| zap_type | enum('USER','ADMIN','NOTUSER') | NO |  | NULL |  |  |
| updated_at | datetime | NO |  | NULL |  |  |
| created_at | datetime | NO |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | zap_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
