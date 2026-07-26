# `bb_crossmatch_idn_spe`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_crossmatch_idn_spe_id | int(11) | NO | PRI | 0 |  |  |
| bb_blood_request_id | int(11) | YES |  | NULL |  |  |
| bb_d | char(2) | YES |  | NULL |  |  |
| bb_bc | char(2) | YES |  | NULL |  |  |
| bb_c | char(2) | YES |  | NULL |  |  |
| bb_be | char(2) | YES |  | NULL |  |  |
| bb_e | char(2) | YES |  | NULL |  |  |
| bb_m | char(2) | YES |  | NULL |  |  |
| bb_n | char(2) | YES |  | NULL |  |  |
| bb_bs | char(2) | YES |  | NULL |  |  |
| bb_s | char(2) | YES |  | NULL |  |  |
| bb_p | char(2) | YES |  | NULL |  |  |
| bb_lea | char(2) | YES |  | NULL |  |  |
| bb_leb | char(2) | YES |  | NULL |  |  |
| bb_mia | char(2) | YES |  | NULL |  |  |
| bb_dia | char(2) | YES |  | NULL |  |  |
| bb_dib | char(2) | YES |  | NULL |  |  |
| bb_jka | char(2) | YES |  | NULL |  |  |
| bb_jkb | char(2) | YES |  | NULL |  |  |
| bb_fya | char(2) | YES |  | NULL |  |  |
| bb_fyb | char(2) | YES |  | NULL |  |  |
| bb_bk | char(2) | YES |  | NULL |  |  |
| bb_k | char(2) | YES |  | NULL |  |  |
| bb_iusr | varchar(30) | YES |  | NULL |  |  |
| bb_idatetime | varchar(20) | YES |  | NULL |  |  |
| bb_srt | char(2) | YES |  | NULL |  |  |
| bb_s37 | char(2) | YES |  | NULL |  |  |
| bb_sat | char(2) | YES |  | NULL |  |  |
| bb_sres1 | char(2) | YES |  | NULL |  |  |
| bb_sda | char(2) | YES |  | NULL |  |  |
| bb_sres2 | char(2) | YES |  | NULL |  |  |
| bb_susr | varchar(30) | YES |  | NULL |  |  |
| bb_sdatetime | varchar(20) | YES |  | NULL |  |  |
| bb_iusr2 | varchar(30) | YES |  | NULL |  |  |
| bb_susr2 | varchar(30) | YES |  | NULL |  |  |
| bb_1 | char(2) | YES |  | NULL |  |  |
| bb_2 | char(2) | YES |  | NULL |  |  |
| bb_3 | char(2) | YES |  | NULL |  |  |
| bb_4 | char(2) | YES |  | NULL |  |  |
| bb_5 | char(2) | YES |  | NULL |  |  |
| bb_6 | char(2) | YES |  | NULL |  |  |
| bb_7 | char(2) | YES |  | NULL |  |  |
| bb_8 | char(2) | YES |  | NULL |  |  |
| bb_9 | char(2) | YES |  | NULL |  |  |
| bb_10 | char(2) | YES |  | NULL |  |  |
| bb_11 | char(2) | YES |  | NULL |  |  |
| bb_autoctrl | char(2) | YES |  | NULL |  |  |
| bb_ares | varchar(100) | YES |  | NULL |  |  |
| bb_ausr | varchar(30) | YES |  | NULL |  |  |
| bb_adatetime | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| bb_mur | char(2) | YES |  | NULL |  |  |
| bb_iden_method | varchar(10) | YES |  | NULL |  |  |
| bb_dat_method | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_crossmatch_idn_spe_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
