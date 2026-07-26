# `dt_snoring_palpationpain`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_snoring_palpationpain_id | int(11) | NO | PRI | 0 |  |  |
| dt_snoring_pp_tmj_chk | char(1) | YES |  | NULL |  |  |
| dt_snoring_pp_tmj_rlateral | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_tmj_rposterior | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_tmj_lposterior | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_tmj_llateral | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_chk | char(1) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rmass_ori | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rmass_body | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rmass_ins | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rmass_deep | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lmass_ori | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lmass_body | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lmass_ins | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lmass_deep | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rtemp_ori | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rtemp_mid | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rtemp_post | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_ltemp_ori | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_ltemp_mid | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_ltemp_post | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_chk | char(1) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_rscm_ori | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_rscm_mid | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_rscm_ins | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_lscm_ori | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_lscm_mid | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_lscm_ins | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_rtrapezius | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_ltrapezius | int(11) | YES |  | NULL |  |  |
| dt_snoring_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_snoring_pp_mas_rposter | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_image | longblob | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lposter | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rsubman | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lsubman | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rlateral | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_llateral | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rtemp_ten | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_ltemp_ten | int(11) | YES |  | NULL |  |  |
| dt_snoring_pp_tmj_rlattrigger | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_tmj_rlatrefer | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_tmj_llattrigger | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_tmj_llatrefer | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_tmj_rpostrigger | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_tmj_rposrefer | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_tmj_lpostrigger | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_tmj_lposrefer | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rtemporitrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rtemporiref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_ltemporitrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_ltemporiref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rtempmidtrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rtempmidref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_ltempmidtrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_ltempmidref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rtemppostrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rtempposref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_ltemppostrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_ltempposref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rmassoritrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rmassoriref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lmassoritrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lmassoriref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rmassinstrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rmassinsref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lmassinstrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lmassinsref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rmassborefer | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lmassbotrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lmassborefer | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rmassdptrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rmassdprefer | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lmassdptrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lmassdprefer | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rposttriger | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rpostrefer | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lposttriger | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lpostrefer | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rsubtriger | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rsubrefer | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lsubtriger | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_lsubrefer | varchar(10) | YES |  | NULL |  |  |
|   dt_snoring_pp_mas_rlattriger | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rlatrefer | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_llattriger | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_llatrefer | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_rscmoritrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_rscmoriref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_lscmoritrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_lscmoriref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_rscmmidtrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_rscmmidref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_lscmmidtrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_lscmmidref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_rscminstrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_rscminsref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_lscminstrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_lscminsref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_rtrapetrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_rtraperef | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_ltrapetrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_cer_ltraperef | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rtemptentrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rtemptenref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_ltemptentrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_ltemptenref | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rmassbotrig | varchar(10) | YES |  | NULL |  |  |
| dt_snoring_pp_mas_rlattriger | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_snoring_main12 | dt_snoring_main_id | no | 1 |
| PRIMARY | dt_snoring_palpationpain_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
