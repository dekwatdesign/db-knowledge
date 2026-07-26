# `stock_committee`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_committee_id | int(11) | NO | PRI | 0 |  |  |
| stock_committee_name | varchar(250) | YES | UNI | NULL |  |  |
| stock_committee_position | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| stock_committee_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_committee_name | stock_committee_name | yes | 1 |
| PRIMARY | stock_committee_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
