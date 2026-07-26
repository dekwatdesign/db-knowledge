# `drg12_cht`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| an | char(9) | YES |  | NULL |  |  |
| date | date | YES |  | NULL |  |  |
| chrgitem | char(2) | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| person_id | char(13) | YES |  | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |
| export_month | char(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode_export_month | hospcode | no | 1 |
| ix_hospcode_export_month | export_month | no | 2 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
