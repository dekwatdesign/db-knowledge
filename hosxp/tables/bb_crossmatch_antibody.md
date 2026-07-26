# `bb_crossmatch_antibody`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_crossmatch_antibody_id | int(11) | NO | PRI | 0 |  |  |
| bb_crossmatch_grp_ant_id | int(11) | YES |  | NULL |  |  |
| bb_aort | char(2) | YES |  | NULL |  |  |
| bb_ao37 | char(2) | YES |  | NULL |  |  |
| bb_aoat | char(2) | YES |  | NULL |  |  |
| bb_ap37 | char(2) | YES |  | NULL |  |  |
| bb_ares | char(2) | YES |  | NULL |  |  |
| bb_ausr | varchar(30) | YES |  | NULL |  |  |
| bb_adatetime | varchar(20) | YES |  | NULL |  |  |
| bb_ox | varchar(3) | YES |  | NULL |  |  |
| bb_px | varchar(4) | YES |  | NULL |  |  |
| bb_x | int(11) | YES |  | NULL |  |  |
| bb_ausr2 | varchar(30) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| bb_method | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_crossmatch_antibody_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
