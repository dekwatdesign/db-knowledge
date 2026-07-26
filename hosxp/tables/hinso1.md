# `hinso1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| address | varchar(50) | YES |  | NULL |  |  |
| billbook | int(11) | YES | MUL | NULL |  |  |
| billno | int(11) | YES | MUL | NULL |  |  |
| birthday | datetime | YES |  | NULL |  |  |
| czcode | varchar(17) | YES | MUL | NULL |  |  |
| cardid | varchar(25) | YES |  | NULL |  |  |
| cardtype | int(11) | YES | MUL | NULL |  |  |
| expdate | datetime | YES | MUL | NULL |  |  |
| fname | varchar(50) | YES | MUL | NULL |  |  |
| hosp1code | varchar(9) | YES | MUL | NULL |  |  |
| hosp2code | varchar(9) | YES |  | NULL |  |  |
| lname | varchar(50) | YES | MUL | NULL |  |  |
| memorder | int(11) | YES |  | NULL |  |  |
| startdate | datetime | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| billbook | billbook | no | 1 |
| billno | billno | no | 1 |
| cardtype | cardtype | no | 1 |
| czcode | czcode | no | 1 |
| expdate | expdate | no | 1 |
| fname | fname | no | 1 |
| hosp1code_expdate | hosp1code | no | 1 |
| hosp1code_expdate | expdate | no | 2 |
| hosp1code_expdate | startdate | no | 3 |
| hosp1code_expdate | hosp2code | no | 4 |
| hosp1code_expdate | czcode | no | 5 |
| ix_hosp1code_expdate | czcode | no | 1 |
| ix_hosp1code_expdate | expdate | no | 2 |
| ix_hosp1code_expdate | hosp1code | no | 3 |
| ix_hosp1code_expdate | hosp2code | no | 4 |
| ix_hosp1code_expdate | startdate | no | 5 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| lname | lname | no | 1 |
| startdate | startdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
