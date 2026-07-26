# `enoc_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| enoc_number | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| codeenoc | varchar(10) | YES |  | NULL |  |  |
| addr | varchar(50) | YES |  | NULL |  |  |
| road | varchar(50) | YES |  | NULL |  |  |
| moo | char(2) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| ovstost | char(2) | YES |  | NULL |  |  |
| death_date | date | YES |  | NULL |  |  |
| pdx | varchar(9) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| ptstat | char(1) | YES |  | NULL |  |  |
| send_epidem | char(1) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| office | tinytext | YES |  | NULL |  |  |
| hserv | varchar(10) | YES |  | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| hospcode | varchar(9) | YES |  | NULL |  |  |
| enoc_guid | varchar(38) | YES | MUL | NULL |  |  |
| data_sync | char(1) | YES |  | NULL |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| intime | char(1) | YES |  | NULL |  |  |
| epi_group_code | int(11) | YES |  | NULL |  |  |
| illcause | char(10) | YES |  | NULL |  |  |
| illcause_text | blob | YES |  | NULL |  |  |
| workdescriptioncode | char(10) | YES |  | NULL |  |  |
| workdescription | blob | YES |  | NULL |  |  |
| cause_place | varchar(500) | YES |  | NULL |  |  |
| workplacename | varchar(500) | YES |  | NULL |  |  |
| workplacetype | char(10) | YES |  | NULL |  |  |
| workplacetype_text | blob | YES |  | NULL |  |  |
| house_lat | varchar(50) | YES |  | NULL |  |  |
| house_long | varchar(50) | YES |  | NULL |  |  |
| pat_addr | varchar(50) | YES |  | NULL |  |  |
| pat_moo | varchar(5) | YES |  | NULL |  |  |
| pat_road | varchar(50) | YES |  | NULL |  |  |
| pat_chwpart | varchar(2) | YES |  | NULL |  |  |
| pat_amppart | varchar(2) | YES |  | NULL |  |  |
| pat_tmbpart | varchar(2) | YES |  | NULL |  |  |
| tel | varchar(13) | YES |  | NULL |  |  |
| pat_death | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_enoc_guid | enoc_guid | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_last_update | last_update | no | 1 |
| ix_pdx | pdx | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | enoc_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
