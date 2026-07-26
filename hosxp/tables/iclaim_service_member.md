# `iclaim_service_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_service_member_id | int(11) | NO | PRI | 0 |  |  |
| member_id | varchar(250) | YES | MUL | NULL |  |  |
| access_token | text | YES |  | NULL |  |  |
| iclaim_service_member_create | datetime | YES |  | NULL |  |  |
| token_request_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_member_id | member_id | no | 1 |
| PRIMARY | iclaim_service_member_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
