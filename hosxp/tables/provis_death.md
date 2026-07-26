# `provis_death`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_death_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| ddeath | char(8) | YES |  | NULL |  |  |
| cdeath_a | varchar(5) | YES |  | NULL |  |  |
| cdeath_b | varchar(5) | YES |  | NULL |  |  |
| cdeath_c | varchar(5) | YES |  | NULL |  |  |
| cdeath_d | varchar(5) | YES |  | NULL |  |  |
| odisease | varchar(5) | YES |  | NULL |  |  |
| cdeath | varchar(5) | YES |  | NULL |  |  |
| pdeath | char(1) | YES |  | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| pregnancy | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | provis_death_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
