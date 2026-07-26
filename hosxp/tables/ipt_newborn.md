# `ipt_newborn`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| birth_weight | int(11) | YES |  | NULL |  |  |
| dead | char(1) | YES |  | NULL |  |  |
| preg_no | tinyint(4) | YES |  | NULL |  |  |
| doctor | varchar(15) | YES |  | NULL |  |  |
| born_date | date | YES |  | NULL |  |  |
| born_time | time | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| apgar1 | tinyint(4) | YES |  | NULL |  |  |
| apgar2 | tinyint(4) | YES |  | NULL |  |  |
| birthcondition1 | tinyint(4) | YES |  | NULL |  |  |
| birthcondition2 | tinyint(4) | YES |  | NULL |  |  |
| anc_complete | char(1) | YES |  | NULL |  |  |
| mother_an | varchar(9) | YES |  | NULL |  |  |
| father_an | varchar(9) | YES |  | NULL |  |  |
| newborn_death_cause_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| has_asphyxia | char(1) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
