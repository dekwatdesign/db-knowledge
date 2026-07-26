# `hospital`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| auto_pk | int(11) | NO | PRI | 0 |  |  |
| Hosp | varchar(10) | YES | MUL | NULL |  |  |
| Prov | char(2) | YES |  | NULL |  |  |
| Hn | varchar(9) | YES | MUL | NULL |  |  |
| Prename | varchar(10) | YES |  | NULL |  |  |
| Name | varchar(20) | YES |  | NULL |  |  |
| Fname | varchar(25) | YES |  | NULL |  |  |
| Home | char(1) | YES |  | NULL |  |  |
| Sex | char(1) | YES |  | NULL |  |  |
| Birth | date | YES |  | NULL |  |  |
| Age | int(11) | YES |  | NULL |  |  |
| Month | int(11) | YES |  | NULL |  |  |
| Year | int(11) | YES |  | NULL |  |  |
| I_type | char(2) | YES |  | NULL |  |  |
| Occu | char(2) | YES |  | NULL |  |  |
| Adate | date | YES | MUL | NULL |  |  |
| Atime | time | YES |  | NULL |  |  |
| Hdate | date | YES |  | NULL |  |  |
| Htime | time | YES |  | NULL |  |  |
| Aplace | varchar(4) | YES |  | NULL |  |  |
| Apoint | char(1) | YES |  | NULL |  |  |
| Injby | char(1) | YES |  | NULL |  |  |
| Injoccu | char(1) | YES |  | NULL |  |  |
| Cause | char(1) | YES |  | NULL |  |  |
| Injp | char(1) | YES |  | NULL |  |  |
| Injt | char(2) | YES |  | NULL |  |  |
| Injfrom | char(2) | YES |  | NULL |  |  |
| Icdcause | char(3) | YES |  | NULL |  |  |
| Risk1 | char(1) | YES |  | NULL |  |  |
| Alclevel | int(11) | YES |  | NULL |  |  |
| Risk2 | char(1) | YES |  | NULL |  |  |
| Risk3 | char(1) | YES |  | NULL |  |  |
| Risk4 | char(1) | YES |  | NULL |  |  |
| Risk5 | char(1) | YES |  | NULL |  |  |
| Risk6 | char(1) | YES |  | NULL |  |  |
| Atohosp | char(1) | YES |  | NULL |  |  |
| Htohosp | char(2) | YES |  | NULL |  |  |
| Hprov | char(2) | YES |  | NULL |  |  |
| Foundation | char(2) | YES |  | NULL |  |  |
| Amb | char(1) | YES |  | NULL |  |  |
| Refer | char(1) | YES |  | NULL |  |  |
| Airway | char(1) | YES |  | NULL |  |  |
| Blood | char(1) | YES |  | NULL |  |  |
| Splint | char(1) | YES |  | NULL |  |  |
| Iv | char(1) | YES |  | NULL |  |  |
| Bp1 | int(11) | YES |  | NULL |  |  |
| Bp2 | int(11) | YES |  | NULL |  |  |
| Pr | int(11) | YES |  | NULL |  |  |
| Rr | int(11) | YES |  | NULL |  |  |
| Coma | int(11) | YES |  | NULL |  |  |
| Tinj | char(1) | YES |  | NULL |  |  |
| Diser | date | YES | MUL | NULL |  |  |
| Timer | time | YES |  | NULL |  |  |
| Staer | char(1) | YES |  | NULL |  |  |
| Ward | varchar(4) | YES |  | NULL |  |  |
| Diag1 | varchar(4) | YES |  | NULL |  |  |
| Br1 | int(11) | YES |  | NULL |  |  |
| Ais1 | int(11) | YES |  | NULL |  |  |
| Diag2 | varchar(4) | YES |  | NULL |  |  |
| Br2 | int(11) | YES |  | NULL |  |  |
| Ais2 | int(11) | YES |  | NULL |  |  |
| Diag3 | varchar(4) | YES |  | NULL |  |  |
| Br3 | int(11) | YES |  | NULL |  |  |
| Ais3 | int(11) | YES |  | NULL |  |  |
| Diag4 | varchar(4) | YES |  | NULL |  |  |
| Br4 | int(11) | YES |  | NULL |  |  |
| Ais4 | int(11) | YES |  | NULL |  |  |
| Diag5 | varchar(4) | YES |  | NULL |  |  |
| Br5 | int(11) | YES |  | NULL |  |  |
| Ais5 | int(11) | YES |  | NULL |  |  |
| Diag6 | varchar(4) | YES |  | NULL |  |  |
| Br6 | int(11) | YES |  | NULL |  |  |
| Ais6 | int(11) | YES |  | NULL |  |  |
| Rdate | date | YES | MUL | NULL |  |  |
| Staward | char(1) | YES |  | NULL |  |  |
| highway | char(2) | YES |  | NULL |  |  |
| munic | char(2) | YES |  | NULL |  |  |
| medicate | varchar(50) | YES |  | NULL |  |  |
| ISS | double(15,3) | YES |  | NULL |  |  |
| RTS | double(15,3) | YES |  | NULL |  |  |
| PS | double(15,3) | YES |  | NULL |  |  |
| cause_id | int(11) | YES | MUL | NULL |  |  |
| er_accident_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| Adate | Adate | no | 1 |
| cause_id | cause_id | no | 1 |
| Diser | Diser | no | 1 |
| Hn | Hn | no | 1 |
| Hosp | Hosp | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | auto_pk | yes | 1 |
| Rdate | Rdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
