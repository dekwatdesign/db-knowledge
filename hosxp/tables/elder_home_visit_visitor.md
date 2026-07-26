# `elder_home_visit_visitor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_home_visit_visitor_id | int(11) | NO | PRI | 0 |  |  |
| elder_home_visit_visitor_name | char(15) | YES |  | NULL |  |  |
| elder_home_visit_visitor_note | varchar(255) | YES |  | NULL |  |  |
| person_visit_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_home_visit_visitor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
