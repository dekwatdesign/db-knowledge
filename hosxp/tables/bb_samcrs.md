# `bb_samcrs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_hn | varchar(9) | NO | PRI |  |  |  |
| bb_ctestno | int(11) | YES |  | NULL |  |  |
| bb_cunitno | varchar(11) | NO | PRI |  |  |  |
| bb_axrt | char(2) | YES |  | NULL |  |  |
| bb_ax37 | char(2) | YES |  | NULL |  |  |
| bb_axat | char(2) | YES |  | NULL |  |  |
| bb_bxrt | char(2) | YES |  | NULL |  |  |
| bb_bx37 | char(2) | YES |  | NULL |  |  |
| bb_bxat | char(2) | YES |  | NULL |  |  |
| bb_cres | char(1) | YES |  | NULL |  |  |
| bb_cusr | varchar(20) | YES |  | NULL |  |  |
| bb_cdate | date | YES |  | NULL |  |  |
| bb_ctime | time | YES |  | NULL |  |  |
| bb_csts | char(1) | YES |  | NULL |  |  |
| bb_cprodno | char(3) | NO | PRI |  |  |  |
| bb_prdprd | date | NO | PRI | 0000-00-00 |  |  |
| bb_prdgro | varchar(5) | NO | PRI |  |  |  |
| bb_username | varchar(20) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | bb_hn | yes | 1 |
| PRIMARY | bb_cunitno | yes | 2 |
| PRIMARY | bb_cprodno | yes | 3 |
| PRIMARY | bb_prdprd | yes | 4 |
| PRIMARY | bb_prdgro | yes | 5 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
