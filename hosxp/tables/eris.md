# `eris`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | YES | MUL | NULL |  |  |
| hosp | varchar(10) | YES |  | NULL |  |  |
| prov | char(2) | YES |  | NULL |  |  |
| prename | varchar(10) | YES |  | NULL |  |  |
| name | varchar(20) | YES |  | NULL |  |  |
| fname | varchar(25) | YES |  | NULL |  |  |
| home | char(1) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| birth | varchar(8) | YES |  | NULL |  |  |
| age | int(11) | YES |  | NULL |  |  |
| month | int(11) | YES |  | NULL |  |  |
| year | int(11) | YES |  | NULL |  |  |
| i_type | char(2) | YES |  | NULL |  |  |
| occu | char(2) | YES |  | NULL |  |  |
| adate | varchar(8) | YES |  | NULL |  |  |
| atime | varchar(5) | YES |  | NULL |  |  |
| hdate | varchar(8) | YES |  | NULL |  |  |
| htime | varchar(5) | YES |  | NULL |  |  |
| aplace | varchar(4) | YES |  | NULL |  |  |
| apoint | char(1) | YES |  | NULL |  |  |
| injby | char(1) | YES |  | NULL |  |  |
| injoccu | char(1) | YES |  | NULL |  |  |
| cause | char(1) | YES |  | NULL |  |  |
| injp | char(1) | YES |  | NULL |  |  |
| injt | char(2) | YES |  | NULL |  |  |
| injfrom | char(2) | YES |  | NULL |  |  |
| icdcause | char(3) | YES |  | NULL |  |  |
| risk1 | char(1) | YES |  | NULL |  |  |
| alclevel | int(11) | YES |  | NULL |  |  |
| risk2 | char(1) | YES |  | NULL |  |  |
| risk3 | char(1) | YES |  | NULL |  |  |
| risk4 | char(1) | YES |  | NULL |  |  |
| atohosp | char(1) | YES |  | NULL |  |  |
| htohosp | char(2) | YES |  | NULL |  |  |
| hprov | char(2) | YES |  | NULL |  |  |
| foundation | char(2) | YES |  | NULL |  |  |
| amb | char(1) | YES |  | NULL |  |  |
| refer | char(1) | YES |  | NULL |  |  |
| airway | char(1) | YES |  | NULL |  |  |
| blood | char(1) | YES |  | NULL |  |  |
| splint | char(1) | YES |  | NULL |  |  |
| iv | char(1) | YES |  | NULL |  |  |
| bp1 | int(11) | YES |  | NULL |  |  |
| bp2 | int(11) | YES |  | NULL |  |  |
| pr | int(11) | YES |  | NULL |  |  |
| rr | int(11) | YES |  | NULL |  |  |
| coma | int(11) | YES |  | NULL |  |  |
| tinj | char(1) | YES |  | NULL |  |  |
| diser | varchar(8) | YES |  | NULL |  |  |
| timer | varchar(5) | YES |  | NULL |  |  |
| staer | char(1) | YES |  | NULL |  |  |
| ward | varchar(4) | YES |  | NULL |  |  |
| diag1 | varchar(4) | YES |  | NULL |  |  |
| br1 | int(11) | YES |  | NULL |  |  |
| ais1 | int(11) | YES |  | NULL |  |  |
| diag2 | varchar(4) | YES |  | NULL |  |  |
| br2 | int(11) | YES |  | NULL |  |  |
| ais2 | int(11) | YES |  | NULL |  |  |
| diag3 | varchar(4) | YES |  | NULL |  |  |
| br3 | int(11) | YES |  | NULL |  |  |
| ais3 | int(11) | YES |  | NULL |  |  |
| diag4 | varchar(4) | YES |  | NULL |  |  |
| br4 | int(11) | YES |  | NULL |  |  |
| ais4 | int(11) | YES |  | NULL |  |  |
| diag5 | varchar(4) | YES |  | NULL |  |  |
| br5 | int(11) | YES |  | NULL |  |  |
| ais5 | int(11) | YES |  | NULL |  |  |
| diag6 | varchar(4) | YES |  | NULL |  |  |
| br6 | int(11) | YES |  | NULL |  |  |
| ais6 | int(11) | YES |  | NULL |  |  |
| rdate | varchar(8) | YES |  | NULL |  |  |
| staward | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
