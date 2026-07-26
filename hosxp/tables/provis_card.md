# `provis_card`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_card_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| instype | varchar(4) | YES |  | NULL |  |  |
| insid | varchar(18) | YES |  | NULL |  |  |
| start | char(8) | YES |  | NULL |  |  |
| expir | char(8) | YES |  | NULL |  |  |
| main | char(5) | YES |  | NULL |  |  |
| sub | char(5) | YES |  | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | provis_card_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
