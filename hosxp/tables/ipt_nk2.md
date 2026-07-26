# `ipt_nk2`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| mainhcode | varchar(5) | YES | MUL | NULL |  |  |
| mainchwcode | char(2) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| pttypeno | varchar(25) | YES |  | NULL |  |  |
| rcode | varchar(5) | YES |  | NULL |  |  |
| rtype | char(2) | YES |  | NULL |  |  |
| ptname | varchar(150) | YES |  | NULL |  |  |
| ptage | varchar(150) | YES |  | NULL |  |  |
| ptsex | varchar(10) | YES |  | NULL |  |  |
| ptoccupation | varchar(150) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| regdate | date | YES |  | NULL |  |  |
| dchdate | date | YES |  | NULL |  |  |
| dx1 | varchar(6) | YES |  | NULL |  |  |
| dx2 | varchar(6) | YES |  | NULL |  |  |
| dx3 | varchar(6) | YES |  | NULL |  |  |
| dx1name | varchar(150) | YES |  | NULL |  |  |
| dx2name | varchar(150) | YES |  | NULL |  |  |
| dx3name | varchar(150) | YES |  | NULL |  |  |
| op1 | varchar(6) | YES |  | NULL |  |  |
| op2 | varchar(6) | YES |  | NULL |  |  |
| op3 | varchar(6) | YES |  | NULL |  |  |
| dchstts | char(2) | YES |  | NULL |  |  |
| dchtype | char(2) | YES |  | NULL |  |  |
| bill1 | double(22,3) | YES |  | NULL |  |  |
| bill2 | double(22,3) | YES |  | NULL |  |  |
| bill3 | double(22,3) | YES |  | NULL |  |  |
| bill4 | double(22,3) | YES |  | NULL |  |  |
| bill5 | double(22,3) | YES |  | NULL |  |  |
| bill6 | double(22,3) | YES |  | NULL |  |  |
| bill7 | double(22,3) | YES |  | NULL |  |  |
| bill8 | double(22,3) | YES |  | NULL |  |  |
| bill9 | double(22,3) | YES |  | NULL |  |  |
| bill10 | double(22,3) | YES |  | NULL |  |  |
| bill11 | double(22,3) | YES |  | NULL |  |  |
| bill12 | double(22,3) | YES |  | NULL |  |  |
| bill13 | double(22,3) | YES |  | NULL |  |  |
| bill14 | double(22,3) | YES |  | NULL |  |  |
| bill15 | double(22,3) | YES |  | NULL |  |  |
| bill16 | double(22,3) | YES |  | NULL |  |  |
| bill15_1 | int(11) | YES |  | NULL |  |  |
| bill16_1 | int(11) | YES |  | NULL |  |  |
| billsum | double(22,3) | YES |  | NULL |  |  |
| billtext | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| mainhcode | mainhcode | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
