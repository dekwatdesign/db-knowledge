# `ipt_bed_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_bed_stat_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| adm_date | date | YES | MUL | NULL |  |  |
| bedno | varchar(6) | YES | MUL | NULL |  |  |
| service_charge | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_admdate | an | yes | 1 |
| ix_an_admdate | adm_date | yes | 2 |
| ix_an_admdate_index | adm_date | yes | 1 |
| ix_an_admdate_index | an | yes | 2 |
| ix_bedno | bedno | no | 1 |
| ix_bedno_admdate | adm_date | no | 1 |
| ix_bedno_admdate | bedno | no | 2 |
| PRIMARY | ipt_bed_stat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
