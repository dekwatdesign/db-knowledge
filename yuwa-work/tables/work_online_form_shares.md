# `work_online_form_shares`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| entity_type | varchar(10) | NO | MUL | NULL |  |  |
| entity_id | int | NO |  | NULL |  |  |
| share_token | varchar(64) | NO | UNI | NULL |  |  |
| share_level | varchar(20) | NO |  | private |  |  |
| label | varchar(255) | YES |  | NULL |  |  |
| share_open_at | datetime | YES |  | NULL |  |  |
| share_close_at | datetime | YES |  | NULL |  |  |
| created_by | int | NO | MUL | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| is_active | varchar(1) | NO |  | Y |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_online_form_shares_entity | entity_type | no | 1 |
| idx_online_form_shares_entity | entity_id | no | 2 |
| idx_online_form_shares_owner | created_by | no | 1 |
| PRIMARY | id | yes | 1 |
| uniq_online_form_share_token | share_token | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
