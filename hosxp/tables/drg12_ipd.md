# `drg12_ipd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| dateadm | date | YES |  | NULL |  |  |
| timeadm | char(4) | YES |  | NULL |  |  |
| datedsc | date | YES |  | NULL |  |  |
| timedsc | char(4) | YES |  | NULL |  |  |
| dischs | char(1) | YES |  | NULL |  |  |
| discht | char(1) | YES |  | NULL |  |  |
| warddsc | char(4) | YES |  | NULL |  |  |
| dept | char(2) | YES |  | NULL |  |  |
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
