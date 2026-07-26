# `opdscreen_prevention`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| fall_check | char(1) | YES |  | NULL |  |  |
| convulsion_check | char(1) | YES |  | NULL |  |  |
| spread_check | char(1) | YES |  | NULL |  |  |
| etc_check | char(1) | YES |  | NULL |  |  |
| etc_text | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
