# `bb_crossmatch_grp_ant`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_crossmatch_grp_ant_id | int(11) | NO | PRI | 0 |  |  |
| bb_blood_request_id | int(11) | YES |  | NULL |  |  |
| bb_ganta | char(2) | YES |  | NULL |  |  |
| bb_gantb | char(2) | YES |  | NULL |  |  |
| bb_gantab | char(2) | YES |  | NULL |  |  |
| bb_gacell | char(2) | YES |  | NULL |  |  |
| bb_gbcell | char(2) | YES |  | NULL |  |  |
| bb_gocell | char(2) | YES |  | NULL |  |  |
| bb_gres1 | char(4) | YES |  | NULL |  |  |
| bb_grt | char(2) | YES |  | NULL |  |  |
| bb_g37 | char(2) | YES |  | NULL |  |  |
| bb_gat | char(2) | YES |  | NULL |  |  |
| bb_gres2 | char(2) | YES |  | NULL |  |  |
| bb_gusr | varchar(30) | YES |  | NULL |  |  |
| bb_gdatetime | varchar(20) | YES |  | NULL |  |  |
| bb_x | int(11) | YES |  | NULL |  |  |
| bb_gusr2 | varchar(30) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_crossmatch_grp_ant_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
