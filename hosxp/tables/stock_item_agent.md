# `stock_item_agent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_agent_id | int(11) | NO | PRI | 0 |  |  |
| stock_item_agent_name | varchar(150) | YES |  | NULL |  |  |
| stock_item_agent_position | varchar(100) | YES |  | NULL |  |  |
| stock_item_agent_phone | varchar(100) | YES |  | NULL |  |  |
| stock_item_agent_note | text | YES |  | NULL |  |  |
| stock_item_agent_email | varchar(200) | YES |  | NULL |  |  |
| stock_item_agent_mobile | varchar(100) | YES |  | NULL |  |  |
| stock_item_agent_nick | varchar(50) | YES |  | NULL |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| stock_item_agent_update | datetime | YES |  | NULL |  |  |
| first_contact_date | date | YES |  | NULL |  |  |
| last_contact_date | date | YES |  | NULL |  |  |
| agent_picture | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_item_id | item_id | no | 1 |
| PRIMARY | stock_item_agent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
