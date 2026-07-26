# `psychiatric_estimate_infection`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_infection_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_estimate_infection_date | date | YES |  | NULL |  |  |
| psychiatric_estimate_infection_findinfection1 | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_infection_findinfection2 | char(2) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_infection_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
