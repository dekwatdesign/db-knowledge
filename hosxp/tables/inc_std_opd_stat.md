# `inc_std_opd_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| pcode | char(2) | YES |  | NULL |  |  |
| sum_income | double(15,3) | YES |  | NULL |  |  |
| inc01 | double(15,3) | YES |  | NULL |  |  |
| inc02 | double(15,3) | YES |  | NULL |  |  |
| inc03 | double(15,3) | YES |  | NULL |  |  |
| inc04 | double(15,3) | YES |  | NULL |  |  |
| inc05 | double(15,3) | YES |  | NULL |  |  |
| inc06 | double(15,3) | YES |  | NULL |  |  |
| inc07 | double(15,3) | YES |  | NULL |  |  |
| inc08 | double(15,3) | YES |  | NULL |  |  |
| inc09 | double(15,3) | YES |  | NULL |  |  |
| inc10 | double(15,3) | YES |  | NULL |  |  |
| inc11 | double(15,3) | YES |  | NULL |  |  |
| inc12 | double(15,3) | YES |  | NULL |  |  |
| inc13 | double(15,3) | YES |  | NULL |  |  |
| inc14 | double(15,3) | YES |  | NULL |  |  |
| inc15 | double(15,3) | YES |  | NULL |  |  |
| inc16 | double(15,3) | YES |  | NULL |  |  |
| income | double(15,3) | YES |  | NULL |  |  |
| inc_drug | double(15,3) | YES |  | NULL |  |  |
| inc_nondrug | double(15,3) | YES |  | NULL |  |  |
| uinc01 | double(15,3) | YES |  | NULL |  |  |
| uinc02 | double(15,3) | YES |  | NULL |  |  |
| uinc03 | double(15,3) | YES |  | NULL |  |  |
| uinc04 | double(15,3) | YES |  | NULL |  |  |
| uinc05 | double(15,3) | YES |  | NULL |  |  |
| uinc06 | double(15,3) | YES |  | NULL |  |  |
| uinc07 | double(15,3) | YES |  | NULL |  |  |
| uinc08 | double(15,3) | YES |  | NULL |  |  |
| uinc09 | double(15,3) | YES |  | NULL |  |  |
| uinc10 | double(15,3) | YES |  | NULL |  |  |
| uinc11 | double(15,3) | YES |  | NULL |  |  |
| uinc12 | double(15,3) | YES |  | NULL |  |  |
| uinc13 | double(15,3) | YES |  | NULL |  |  |
| uinc14 | double(15,3) | YES |  | NULL |  |  |
| uinc15 | double(15,3) | YES |  | NULL |  |  |
| uinc16 | double(15,3) | YES |  | NULL |  |  |
| uincome | double(15,3) | YES |  | NULL |  |  |
| uinc_drug | double(15,3) | YES |  | NULL |  |  |
| uinc_nondrug | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |
| pttype | pttype | no | 1 |
| vstdate | vstdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
