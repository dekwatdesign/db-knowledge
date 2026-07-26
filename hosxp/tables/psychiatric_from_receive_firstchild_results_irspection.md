# `psychiatric_from_receive_firstchild_results_irspection`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| results_irspection_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_from_receive_firstchild_id | int(11) | YES |  | NULL |  |  |
| rdate | date | YES |  | NULL |  |  |
| diag | varchar(50) | YES |  | NULL |  |  |
| age | varchar(50) | YES |  | NULL |  |  |
| results | varchar(50) | YES |  | NULL |  |  |
| fdate | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | results_irspection_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
