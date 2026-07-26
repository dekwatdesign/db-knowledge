# `dt_oper_restion`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_oper_restion_id | int(11) | NO | PRI | 0 |  |  |
| dt_oper_restion_tem_chk | varchar(255) | YES |  | NULL |  |  |
| dt_oper_restion_tem_complete | varchar(20) | YES |  | NULL |  |  |
| dt_oper_restion_tem_unseen | char(1) | YES |  | NULL |  |  |
| dt_oper_zinc_ox_id | int(11) | YES |  | NULL |  |  |
| dt_oper_restion_mat_grp_chk | varchar(200) | YES |  | NULL |  |  |
| dt_oper_aquantity_id | int(11) | YES |  | NULL |  |  |
| dt_oper_zinc_rbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_amal_brand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_restion_amal_note | varchar(100) | YES |  | NULL |  |  |
| dt_oper_resin_brand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_resin_brand_note | varchar(100) | YES |  | NULL |  |  |
| dt_oper_resin_shade | varchar(100) | YES |  | NULL |  |  |
| dt_oper_rcadhesive_id | int(11) | YES |  | NULL |  |  |
| dt_oper_rcadhesive_note | varchar(100) | YES |  | NULL |  |  |
| dt_oper_glass_brand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_glass_brand_note | varchar(100) | YES |  | NULL |  |  |
| dt_oper_rmquantity_id | int(11) | YES |  | NULL |  |  |
| dt_oper_rmbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_rmshade_id | char(11) | YES |  | NULL |  |  |
| dt_oper_gshade_id | char(2) | YES |  | NULL |  |  |
| dt_oper_gshade_note | varchar(100) | YES |  | NULL |  |  |
| dt_oper_gquantity_id | int(11) | YES |  | NULL |  |  |
| dt_oper_glass_brand2_id | int(11) | YES |  | NULL |  |  |
| dt_oper_gishade_id | int(11) | YES |  | NULL |  |  |
| dt_oper_rc2shade_note | varchar(100) | YES |  | NULL |  |  |
| dt_oper_rc2brand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_restion_san_open_chk | varchar(20) | YES |  | NULL |  |  |
| dt_oper_restion_other_note | text | YES |  | NULL |  |  |
| dt_oper_tem_spfy_type_id | int(11) | YES | MUL | NULL |  |  |
| dt_oper_main_id | int(11) | YES | MUL | NULL |  |  |
| dt_oper_rmshade_note | varchar(100) | YES |  | NULL |  |  |
| dt_oper_san_ad_note | varchar(100) | YES |  | NULL |  |  |
| dt_oper_zincbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_zshade_id | char(2) | YES |  | NULL |  |  |
| dt_oper_zadhesive_id | int(11) | YES |  | NULL |  |  |
| dt_oper_fbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_fshade_id | int(11) | YES |  | NULL |  |  |
| dt_oper_fadhesive_id | int(11) | YES |  | NULL |  |  |
| dt_oper_a2quantity_id | int(11) | YES |  | NULL |  |  |
| dt_oper_a2brand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_brand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_abrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_rcshade_id | char(2) | YES |  | NULL |  |  |
| dt_oper_rcbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_gbrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_gibrand_id | int(11) | YES |  | NULL |  |  |
| dt_oper_rc2shade_id | char(2) | YES |  | NULL |  |  |
| dt_oper_rcshade | varchar(2) | YES |  | NULL |  |  |
| dt_oper_rmshade | varchar(2) | YES |  | NULL |  |  |
| dt_oper_gshade | varchar(2) | YES |  | NULL |  |  |
| dt_oper_rc2shade | varchar(2) | YES |  | NULL |  |  |
| dt_oper_zshade | varchar(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_oper_main16 | dt_oper_main_id | no | 1 |
| ix_Refdt_oper_tem_spfy_type14 | dt_oper_tem_spfy_type_id | no | 1 |
| PRIMARY | dt_oper_restion_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
