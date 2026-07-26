# `blb_reaction`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_reaction_id | int(11) | NO | PRI | 0 |  |  |
| blb_request_id | int(11) | YES | MUL | NULL |  |  |
| blb_reaction_doctor | char(6) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_reaction_note | varchar(255) | YES |  | NULL |  |  |
| blb_reaction_date | date | YES |  | NULL |  |  |
| blb_reaction_time | time | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_request_id | blb_request_id | no | 1 |
| PRIMARY | blb_reaction_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
