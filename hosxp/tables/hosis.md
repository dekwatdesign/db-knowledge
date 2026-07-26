# `hosis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| adatetime | datetime | YES |  | NULL |  |  |
| airway | tinyint(4) | YES |  | NULL |  |  |
| aplace | varchar(4) | YES |  | NULL |  |  |
| apoint | varchar(4) | YES |  | NULL |  |  |
| bp1 | tinyint(4) | YES |  | NULL |  |  |
| bp2 | tinyint(4) | YES |  | NULL |  |  |
| blood | varchar(4) | YES |  | NULL |  |  |
| pr | tinyint(4) | YES |  | NULL |  |  |
| rr | tinyint(4) | YES |  | NULL |  |  |
| splint | varchar(4) | YES |  | NULL |  |  |
| vn | varchar(13) | NO | PRI |  |  |  |
| injby | varchar(4) | YES |  | NULL |  |  |
| injoccu | varchar(4) | YES |  | NULL |  |  |
| cause | varchar(4) | YES |  | NULL |  |  |
| injp | varchar(4) | YES |  | NULL |  |  |
| injt | varchar(4) | YES |  | NULL |  |  |
| injfrom | varchar(4) | YES |  | NULL |  |  |
| risk1 | varchar(4) | YES |  | NULL |  |  |
| risk2 | varchar(4) | YES |  | NULL |  |  |
| risk3 | varchar(4) | YES |  | NULL |  |  |
| risk4 | varchar(4) | YES |  | NULL |  |  |
| alclevel | tinyint(4) | YES |  | NULL |  |  |
| tinj | varchar(4) | YES |  | NULL |  |  |
| atohosp | varchar(4) | YES |  | NULL |  |  |
| htohosp | varchar(4) | YES |  | NULL |  |  |
| foundation | varchar(4) | YES |  | NULL |  |  |
| iv | varchar(4) | YES |  | NULL |  |  |
| amb | varchar(4) | YES |  | NULL |  |  |
| coma | tinyint(4) | YES |  | NULL |  |  |
| diser | datetime | YES |  | NULL |  |  |
| staer | varchar(4) | YES |  | NULL |  |  |
| cause_icd | varchar(6) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

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
