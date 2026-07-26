# `bb_blood`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bloodid | int(11) | NO | PRI | 0 |  |  |
| statusid | int(11) | YES |  | NULL |  |  |
| bloodgroupid | int(11) | YES |  | NULL |  |  |
| subgroupid | int(11) | YES |  | NULL |  |  |
| receivedetailid | bigint(20) | YES |  | NULL |  |  |
| unitid | int(11) | YES |  | NULL |  |  |
| receivedate | date | YES |  | NULL |  |  |
| receivetime | time | YES |  | NULL |  |  |
| expiredate | date | YES |  | NULL |  |  |
| worker | varchar(20) | YES |  | NULL |  |  |
| keeper | varchar(20) | YES |  | NULL |  |  |
| description | varchar(255) | YES |  | NULL |  |  |
| weight | int(11) | YES |  | NULL |  |  |
| antigen_description | varchar(255) | YES |  | NULL |  |  |
| abo_description | varchar(255) | YES |  | NULL |  |  |
| rh_description | varchar(255) | YES |  | NULL |  |  |
| antibody_description | varchar(255) | YES |  | NULL |  |  |
| destroydate | date | YES |  | NULL |  |  |
| approved | char(1) | YES |  | NULL |  |  |
| quantity | int(11) | YES |  | NULL |  |  |
| available | int(11) | YES |  | NULL |  |  |
| bb_branch_id | int(11) | YES |  | NULL |  |  |
| bb_curr_donor | int(11) | YES |  | NULL |  |  |
| bb_curr_year | int(11) | YES |  | NULL |  |  |
| bb_curr_bag | int(11) | YES |  | NULL |  |  |
| bb_lot_bag | int(11) | YES |  | NULL |  |  |
| bb_warning | char(1) | YES |  | NULL |  |  |
| bb_redcross | varchar(50) | YES |  | NULL |  |  |
| bb_server | varchar(50) | YES |  | NULL |  |  |
| bb_income | varchar(20) | YES |  | NULL |  |  |
| bb_crossmatch | char(1) | YES |  | NULL |  |  |
| bb_labno | char(1) | YES |  | NULL |  |  |
| bb_hb | int(11) | YES |  | NULL |  |  |
| bb_hct | int(11) | YES |  | NULL |  |  |
| bb_usr | char(1) | YES |  | NULL |  |  |
| bb_req | char(1) | YES |  | NULL |  |  |
| bb_not | char(1) | YES |  | NULL |  |  |
| bb_iden | int(11) | YES |  | NULL |  |  |
| bb_method | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| bb_plt | varchar(20) | YES |  | NULL |  |  |
| bb_red_price | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bloodid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
