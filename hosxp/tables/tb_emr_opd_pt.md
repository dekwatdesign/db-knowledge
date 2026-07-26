# `tb_emr_opd_pt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(15) | NO | PRI |  |  |  |
| loginname | varchar(50) | NO | PRI |  |  |  |
| pt_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| pt_user | varchar(200) | YES |  | NULL |  |  |
| pt_text | text | YES |  | NULL |  |  |
| pt_ps | char(3) | YES |  | NULL |  |  |
| pt_bi | char(3) | YES |  | NULL |  |  |
| pt_mrm_rom | char(3) | YES |  | NULL |  |  |
| pt_tka_rom | char(3) | YES |  | NULL |  |  |
| pt_copd | char(3) | YES |  | NULL |  |  |
| pt_hf | char(3) | YES |  | NULL |  |  |
| pt_hd | char(3) | YES |  | NULL |  |  |
| pt_sit | char(3) | YES |  | NULL |  |  |
| pt_dm | char(3) | YES |  | NULL |  |  |
| pt_dch | char(3) | YES |  | NULL |  |  |
| pt_dch_text | varchar(255) | YES |  | NULL |  |  |
| pt_delete_user | varchar(50) | YES |  | NULL |  |  |
| pt_delete_datetime | datetime | YES |  | NULL |  |  |
| pt_status | char(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | vn | yes | 1 |
| PRIMARY | loginname | yes | 2 |
| PRIMARY | pt_datetime | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
