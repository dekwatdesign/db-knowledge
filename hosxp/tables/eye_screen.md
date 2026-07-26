# `eye_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| eye_screen_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | UNI | NULL |  |  |
| r01 | varchar(50) | YES |  | NULL |  |  |
| r02 | char(1) | YES |  | NULL |  |  |
| r03 | varchar(50) | YES |  | NULL |  |  |
| r04 | int(11) | YES |  | NULL |  |  |
| r05 | char(1) | YES |  | NULL |  |  |
| rph | varchar(50) | YES |  | NULL |  |  |
| rct | double(15,3) | YES |  | NULL |  |  |
| l01 | varchar(50) | YES |  | NULL |  |  |
| l02 | char(1) | YES |  | NULL |  |  |
| l03 | varchar(50) | YES |  | NULL |  |  |
| l04 | int(11) | YES |  | NULL |  |  |
| l05 | char(1) | YES |  | NULL |  |  |
| lph | varchar(50) | YES |  | NULL |  |  |
| lct | double(15,3) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| image_data1 | longblob | YES |  | NULL |  |  |
| ph_l1 | varchar(50) | YES |  | NULL |  |  |
| ph_l2 | varchar(50) | YES |  | NULL |  |  |
| ph_l3 | varchar(50) | YES |  | NULL |  |  |
| ph_l4 | varchar(50) | YES |  | NULL |  |  |
| ph_r1 | varchar(50) | YES |  | NULL |  |  |
| ph_r2 | varchar(50) | YES |  | NULL |  |  |
| ph_r3 | varchar(50) | YES |  | NULL |  |  |
| ph_r4 | varchar(50) | YES |  | NULL |  |  |
| sch_rct | varchar(50) | YES |  | NULL |  |  |
| sch_lct | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | yes | 1 |
| PRIMARY | eye_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
